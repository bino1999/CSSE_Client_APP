import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { useState } from "react";

//Implementation of the modal viewing the further details of each travel history data

export default function Viewtravelhistmodal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <Button className="btn btn-success btn-sm" onClick={handleShow}>
      View
    </Button>

    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Trip Information</Modal.Title>
      </Modal.Header>
        <Modal.Body>
            <table className='table table-bordered border-primary'>
              <tr>
                <td><b>From</b></td>
                <td>{props.from}</td>
              </tr>
              <tr>
                <td><b>To</b></td>
                <td>{props.to}</td>
              </tr>
              <tr>
                <td><b>Date</b></td>
                <td>{props.date}</td>
              </tr>
              <tr>
                <td><b>Get In Time</b></td>
                <td>{props.getin}</td>
              </tr>
              <tr>
                <td><b>Get Out Time</b></td>
                <td>{props.getout}</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>{props.price}</td>
              </tr>
             
            </table>     
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" type="submit" onClick={handleClose}>
            topup
          </Button> */}
          <Button variant="danger" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  )
}
