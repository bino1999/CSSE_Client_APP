import React from "react";
import { useState, useEffect } from "react";
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
import Footer from "../components/Footer";
import Header from "../components/Header";
import Topupcreditmodal from "../components/modals/Topupcreditmodal";

//Implementation of the page to display topup credit 

export default function CreditBalance() {
  const [balance, setBalance] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `http://127.0.0.1:8090/user/${localStorage.getItem("id")}`
      );
      setBalance(res.data.data.credit_amount);
    };
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
     


     <div className="row">
   


        <div className="col-6">

          <div className="card">

          <div className="card-header">
          <h3>Credit Balance</h3>
      </div>


      <div className="card-body">


      <div class="row justify-content-center">
          <div class="col-auto">
            <table class="" style={{ fontSize: "25px", textAlign: "left" }}>
              <tr>
                <td>  Your Balence </td>
                <td>={balance}.00 LKR</td>
              </tr>
            </table>
          </div>
        </div>


      </div>


      <div className="card-footer">

      <div className="row">
          <div className="col">
            <Topupcreditmodal
              id={localStorage.getItem("id")}
              name={localStorage.getItem("name")}
            />
          </div>
        </div>



      </div>




          </div>

        </div> 


{/* ......................................................................... */}

<div className="col-6">


<div className="card">


<div className="card-header">
 
 <h3>
  About top up
 </h3>

</div>

<div className="card-body">

  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus. Excepturi voluptate aspernatur est repellendus nulla. Quo aut ipsa quas odit vero possimus deleniti. Hic eligendi temporibus sit voluptatem eos.   <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga doloribus, molestiae mollitia tempore quis obcaecati. Et inventore, rerum nobis numquam iure voluptate minus quia placeat repellendus error culpa repellat. <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ab sapiente veniam impedit minima nobis aut neque cum sequi aspernatur. Eius, dolor. Error, dolorem officiis modi officia similique quas laboriosam.
  

</div>
</div>




</div>






           
      {/* <div className="card-header">
          <h3>Credit Balance</h3>
      </div> */}


      {/* <div className="card-body">


      <div class="row justify-content-center">
          <div class="col-auto">
            <table class="" style={{ fontSize: "25px", textAlign: "left" }}>
              <tr>
                <td>  Your Balence </td>
                <td>={balance}.00 LKR</td>
              </tr>
            </table>
          </div>
        </div>


      </div>


      <div className="card-footer">

      <div className="row">
          <div className="col">
            <Topupcreditmodal
              id={localStorage.getItem("id")}
              name={localStorage.getItem("name")}
            />
          </div>
        </div>



      </div> */}





    </div>


    <div className="row">



    {/* <MDBContainer fluid className="p-5">
        <h2>Credit Balance</h2>
        <hr />
        <br />
        <div class="row justify-content-center">
          <div class="col-auto">
            <table class="" style={{ fontSize: "25px", textAlign: "left" }}>
              <tr>
                <td>Account Credit Balance</td>
                <td>={balance}.00 LKR</td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col">
            <Topupcreditmodal
              id={localStorage.getItem("id")}
              name={localStorage.getItem("name")}
            />
          </div>
        </div>
      </MDBContainer> */}


    






    </div>



    <div className="row">







    </div>







      <Footer />
    </div>
  );
}
