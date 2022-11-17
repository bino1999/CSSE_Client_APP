import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
// import '../assets/login.css'
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
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/style.css";

//Implementation of the login page with the required fields to be filled

export default function Login() {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const UserData = {
    email_address,
    password,
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/user/login/";
      const res = await axios.post(url, UserData);

      localStorage.setItem("name", res.data.data.name);
      localStorage.setItem("id", res.data.data.id);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("accesstoken", res.data.data.accessToken);

      if (res.status == 200) {
        swal({
          title: "Success!",
          text: "User Logged Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        }).then(() => {
          setEmail("");
          setPassword("");
          setError("");
          window.location.href = `/homepage`;
        });
      }
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
      <br />
      <MDBContainer fluid className="p-4">
        <h1>Log in To The System</h1>
        



   <div className="row">


<div className="col-6">



            <MDBCard className="my-3 " >
              <MDBCardBody className="p-5 ct1">
                <h2>Local User</h2>
                <br />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email_address}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />

                <div className="d-flex justify-content-center mb-4">
                  <a href="">Forgot password?</a>
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

                <MDBBtn
                  className="btn btn-info w-100 mb-4 btnabc"
                  size="md"
                  onClick={Login}
                >
                  sign in
                </MDBBtn>

                <div className="text-center">
                  <p>OR</p>
                  <MDBBtn
                    className="btn btn-info w-100 mb-4 btnabc"
                    size="md"
                    href="/register"
                  >
                    sign up
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
         

         
            <MDBCard className="my-3" style={{ backgroundColor: "#EEEEEE" }}>
              <MDBCardBody className="p-5">
                <h2>Foreign User</h2>
                <br />

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="NIE Number"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBBtn className="btn btn-info w-100 mb-4" size="md">
                  Create a one day pass
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
        




</div> 
<br />

{/* ..................................................................................... */}

<div className="col-6">


<div className="card">


<div className="card-header">
   
   <h3>About Us</h3>
    
</div>


<div className="card-body">

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit excepturi numquam perspiciatis, nesciunt est eius harum a optio. Modi ab repellat voluptas. Accusantium quibusdam consectetur exercitationem adipisci recusandae autem?
</div>



</div>

           <br />
{/* ..................................................................... */}
            <br />

<div className="card">


<div className="card-header">
   
   <h3> Contact Us</h3>
</div>


<div className="card-body">
 
<form action="">


<label> Name  </label>
<input type="text"  class="form-control"
 id='Name'

 /> 

<label> Email  </label>
<input type="text"class="form-control"
 id='DateOfBirth'

  />

<label> Contact Number   </label>
<input type="text" class="form-control"
 id='Email'

  />


<label> Message  </label>
<input type="text"  class="form-control"
 id='Address'
 />


</form>

<div className="card-footer">

         <button className='btn btn-success jop' type="button" > Send </button>
      

        </div>

</div>



</div>
          
          <br />
{/* .................................................................... */}
          <br /> 


          <div className="card">


<div className="card-header">
      
       <h3>Login Methods</h3>
      
</div>


<div className="card-body">



  
</div>



</div>











</div>











   </div>





   
      
      </MDBContainer>
      <Footer />
    </>
  );
}
