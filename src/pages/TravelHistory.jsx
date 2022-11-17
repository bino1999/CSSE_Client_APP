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
import Viewtravelhistmodal from "../components/modals/Viewtravelhistmodal";
import Reviewmodal from "../components/modals/Reviewmodal";

//Implementation of the page to display travel history of the user

export default function TravelHistory() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const getTravels = async () => {
      const res = await fetch(
        `http://127.0.0.1:8090/travel/${localStorage.getItem("email")}`
      );

      const data = await res.json();
      console.log(data);
      setTravels(data);
    };
    getTravels();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <MDBContainer fluid className="p-5">
        <h2>Travel History</h2>
        <br />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <td>From</td>
              <td>To</td>
              <td>Date & Time</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {travels.map((travels) => (
              <tr key={travels._id}>
                <td>{travels.source}</td>
                <td>
                  {travels.destination
                    ? travels.destination
                    : "Incomplete Trip"}
                </td>
                <td>{travels.createdAt.toString().substring(0, 10)}</td>
                <td>{travels.amount ? travels.amount : "Incomplete Trip"}</td>
                <td>
                  <Viewtravelhistmodal
                    from={travels.source}
                    to={travels.destination}
                    date={travels.createdAt.toString().substring(0, 10)}
                    price={travels.amount}
                    getin={travels.createdAt.toString().substring(11, 16)}
                    getout={travels.updatedAt.toString().substring(11, 16)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MDBContainer>
      <Footer />
    </div>
  );
}
