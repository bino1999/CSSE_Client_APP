import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Qrcode from "./Qrcode"
import "../assets/Home.css";


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
import { Button } from "react-bootstrap";

//Implementation of the landing page after login

export default function Homepage() {
  return (
    <div>
      <Header />
      <br />
      <br />
    
      {/* <MDBContainer fluid className="p-4">
        <MDBBtn href="/qr" className="btn btn-info btn-lg">
          QR
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/travhist" className="btn btn-info btn-lg">
          Travel History
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/credbal" className="btn btn-info btn-lg">
          Credit Balance
        </MDBBtn>
        <br />
        <br />
        <MDBBtn href="/busloc" className="btn btn-info btn-lg">
          Bus Location
        </MDBBtn>
      </MDBContainer> */}



   <div>

  <br />  <br />

<div className="row">



<div className="col-3">


<div className="card">

  <div className="card-header">
  
   <h3>Monthly Travel History </h3>
   
  </div>

  <div className="card-body">
    
     <h5>Monthly Travel Distance</h5> <br />

      <h6>43.4 Km</h6>

   
  </div>


  <div className="card-footer">

   <div> <MDBBtn href="/travhist" className="btn btn-info btn-lg">
          Travel History
        </MDBBtn></div>

  </div>
</div>



</div>



<div className="col-3">


<div className="card">

  <div className="card-header">
  
   <h3>Monthly Travel Expences </h3>
   
  </div>

  <div className="card-body">
    
     <h5>Monthly Travel Expences </h5> <br />

      <h6> $105.99</h6>

   
  </div>


  <div className="card-footer">

<div>
<MDBBtn href="/credbal" className="btn btn-info btn-lg">
          Credit Balance
        </MDBBtn>
</div>

  </div>
</div>



</div>



<div className="col-3">


<div className="card">

  <div className="card-header">
  
   <h3>Today Travel Distance </h3>
   
  </div>

  <div className="card-body">
    
     <h5>Today Travel Distance</h5> <br />

      <h6>12.5 Km</h6>

   
  </div>


  <div className="card-footer">
    
    <div> 
    <MDBBtn href="/busloc" className="btn btn-info btn-lg">
          Bus Location
        </MDBBtn>
    </div>

  </div>
</div>

</div>




<div className="col-3">


<div className="card">

  <div className="card-header">
  
   <h3>QR CODE </h3>
   
  </div>

  <div className="card-body">
    
     <h5>Scan your QR here</h5> <br />

     <div>
     <Qrcode/>
     </div>

   
  </div>


  <div className="card-footer">

 <div>
 <MDBBtn href="/qr" className="btn btn-info btn-lg">
          QR
        </MDBBtn>
 </div>

  </div>
</div>



</div>




</div>


{/* ...................................................................................................................... */}

<br /> 



<div>


<div className="row">

<div className="col-4">

<div className="card-header">
  
   <h4>View Shedule</h4>

</div>

<div className="card-body">
<img src="../images/She.jpg" className="handle" alt=""  />
</div>

<div className="card-footer">

<Button>  <a  href="/viewshedule "> View  </a>  </Button>

</div>


</div>

{/* ............................................................................................................ */}


<div className="col-4">

<div className="card-header">

 <h4>View Gallery</h4>
</div>

<div className="card-body">
<img src="../images/oip.jpeg"  className="handle hjo" alt=""  />
</div>

<div className="card-footer">
   
<Button> View   </Button>
  
</div>


</div>


{/* ...................................................................................................... */}




<div className="col-4">

<div className="card-header">

<h4>Provide feedback</h4>

</div>

<div className="card-body">
<img src="../images/feed.webp"  className="handle" alt=""  />
</div>

<div className="card-footer">
 
<MDBBtn href="/feed" className="btn btn-info btn-lg">
          View 
        </MDBBtn>
  
</div>


</div>


{/* ............................................................................ */}


</div>




</div>












   </div>









      <Footer />
    </div>
  );
}
