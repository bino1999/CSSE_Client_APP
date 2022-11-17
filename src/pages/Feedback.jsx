import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";




export default function Feedback() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");


  const feedbackData = {
    Name,
    Email,
    feedback,
  
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/feedback/";
      const { data: res } = await axios.post(url, feedbackData);

      swal({
        title: "Success!",
        text: "Shedule Added Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      }).then(() => {
        setName("");
        setEmail("");
        setfeedback("");
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
    <div>
           <br /> <br /> <br />
            
      <div>
        <Header/>
      </div>

         <div className="container">
         <form action="">

<label className='jj'> Name  </label>

<input className='ip form-control bn'
type="text"
id='Name'
value={Name}
onChange={(e) => {
  setName(e.target.value);
}}

 /> 

<br />

<label className='jj'> Email  </label>

<input className='ip form-control bn'
type="text"
id='mail'
value={Email}
onChange={(e) => {
  setEmail(e.target.value);
}}


 /> 

<br />

<label className='jj'> Feedback  </label>

<input className='ip form-control bn'
type="text"
id='feed'
value={feedback}
onChange={(e) => {
  setfeedback(e.target.value);
}}

 /> 

<br />

{/* <label className='jj'> Password </label>

<input className='ip form-control bn'
type="text"
id='Password'

 />  */}

<br />


<button class="btn btn-success" type='button' 
onClick={sendData} >
   Submit 
</button>


<br />


</form>
         </div>
     
      <br /> <br />

      <Footer/>

    </div>
  )
}



