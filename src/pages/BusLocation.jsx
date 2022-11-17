import React from 'react'
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
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function BusLocation() {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-4">
      <h2>Bus Locations</h2>
      <br/>
        
        <div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Current Location</th>
      <th scope="col">The Way to go</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Colombo - Kandy</td>
      <td>Colombo </td>
      <td>Kandy</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Kollupitiya - Kaduwela</td>
      <td>Kaduwela</td>
      <td>Kollupitiya</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Panadura - Fort</td>
      <td>Pandaru</td>
      <td>Fort</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Pettah - Kottawa</td>
      <td>Pettah</td>
      <td>Kottawa</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Malabe - Maharagama</td>
      <td>Maharagama</td>
      <td>Malabe</td>
    </tr> 
    <tr>
      <th scope="row">6</th>
      <td>Colombo - Jaffna</td>
      <td>Jaffna</td>
      <td>Colombo</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Pettah - Athurugiriya</td>
      <td>Athurugiriya</td>
      <td>Pettah</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Pettah - Horana</td>
      <td>Pettah</td>
      <td>Horana</td>
    </tr> 
    <tr>
      <th scope="row">9</th>
      <td>Colombo - Gampaha</td>
      <td>Gampaha</td>
      <td>Colombo</td>
    </tr> 
    <tr>
      <th scope="row">10</th>
      <td>Colombo - Galle</td>
      <td>Colombo</td>
      <td>Galle</td>
    </tr> 
    
  </tbody>
</table>


        </div>











      </MDBContainer>
      <Footer/>
    </div>
  )
}
