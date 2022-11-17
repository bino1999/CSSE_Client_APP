import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";

import swal from "sweetalert";
import axios from "axios";

//Implementation of TopUp Credit Modal

export default function Topupcreditmodal(props) {
  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [type, setType] = useState("");
  const [cardno, setCardno] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UserData = {
    id,
    type,
    cvv,
    cardno,
    amount,
  };

  const handleSubmit = async (e) => {
    console.log(UserData);

    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/user/topup/";
      const { data: res } = await axios.post(url, UserData);

      swal({
        title: "Success!",
        text: "Credit Topup Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      }).then(() => {
        setError("");
        window.location.href = `/credbal`;
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setMsg("");
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Button className="btn btn-info btn-lg" onClick={handleShow}>
        Topup Credit
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            TopUp Credit
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={1}>
                <Form.Label>Card Type:</Form.Label>
              </Col>
              <Col sm={2}>
                <select
                  className="Col-3"
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="" selected>
                    Select Type
                  </option>
                  <option value="Visa">Visa</option>
                  <option value="Mastercard">Mastercard</option>
                </select>
              </Col>
              <Col sm={2}>
                <Form.Label>Card Number:</Form.Label>
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  value={cardno}
                  onChange={(e) => {
                    setCardno(e.target.value);
                  }}
                />
              </Col>
              <Col sm={1}>
                <Form.Label>CVV:</Form.Label>
              </Col>
              <Col sm={2}>
                <Form.Control
                  type="number"
                  value={cvv}
                  onChange={(e) => {
                    setCvv(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Name:
              </Form.Label>
              <Col sm="4">
                <Form.Control type="text" value={name} readOnly />
              </Col>
              <Form.Label column sm="2">
                Amount:
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            ** For cash topup please visit a Pay Station in the nearby bus
            station.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              topup
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
