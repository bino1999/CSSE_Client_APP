import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import Header from "../components/Header";
import Footer from "../components/Footer";

//Implementation of the page to register a new user

export default function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email_address, setEmail] = useState("");
  const [nic, setNIC] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const UserData = {
    name,
    mobile,
    type: "LocalUser",
    email_address,
    nic,
    password,
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/user/";
      const { data: res } = await axios.post(url, UserData);

      swal({
        title: "Success!",
        text: "User Registered Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      }).then(() => {
        setEmail("");
        setMobile("");
        setNIC("");
        setName("");
        setPassword("");
        setError("");
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
      <Header />
      <br />
      <br />
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol md="3"></MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5" style={{ backgroundColor: "#EEEEEE" }}>
              <MDBCardBody className="p-5">
                <h2>Register</h2>
                <br />

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Name"
                      id="form1"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Mobile"
                      id="form1"
                      type="number"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email_address}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="NIC"
                  id="form1"
                  type="text"
                  value={nic}
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn
                  className="btn btn-info w-100 mb-4"
                  size="md"
                  onClick={sendData}
                >
                  sign up
                </MDBBtn>

                <div className="text-center">
                  <div className="d-flex justify-content-center mb-4">
                    Already have an account?<a href="/">Login</a>
                  </div>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {msg && (
                    <div className="alert alert-success" role="alert">
                      {msg}
                    </div>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}
