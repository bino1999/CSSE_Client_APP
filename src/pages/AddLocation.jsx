import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";




export default function AddLocation() {

  const [Bus_Name, setBus_Name] = useState("");
  const [Current_location, setCurrent_location] = useState("");
  const [Destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");


  const sheduleData = {
    Bus_Name,
    Current_location,
    Destination,
  
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/shedule/";
      const { data: res } = await axios.post(url, sheduleData);

      swal({
        title: "Success!",
        text: "Shedule Added Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      }).then(() => {
        setBus_Name("");
        setCurrent_location("");
        setDestination("");
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

<label className='jj'> Bus Name  </label>

<input className='ip form-control bn'
type="text"
id='Name'
value={Bus_Name}
onChange={(e) => {
  setBus_Name(e.target.value);
}}

 /> 

<br />

<label className='jj'> Current Location  </label>

<input className='ip form-control bn'
type="text"
id='location'
value={Current_location}
onChange={(e) => {
  setCurrent_location(e.target.value);
}}


 /> 

<br />

<label className='jj'> Destination  </label>

<input className='ip form-control bn'
type="text"
id='des'
value={Destination}
onChange={(e) => {
  setDestination(e.target.value);
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



