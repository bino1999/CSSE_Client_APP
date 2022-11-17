import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

import Footer from "../components/Footer";
import Header from "../components/Header";



export default function ViewShedule() {

   
    const [timetdata, setTimetdata] = useState([]);

    useEffect(() => {
      const getTimetable = async () => {
        const res = await fetch(
          "http://127.0.0.1:8090/shedule/"
        );
  
        const data = await res.json();
        console.log(data);
        setTimetdata(data);
      };
      getTimetable();
    }, []);
  
    const onDelete = (id) => {
      axios.delete("http://localhost:8090/deletetime/"  + id)
      .then(() => {
  
        swal({
          title: "Success!",
          text: "Time Table Data deleted Successfully",
          icon: 'success',
          timer: 5000,
          button: false,
        });
  
        window.location.reload();
      })
      .catch(() => {
        alert("Something went wrong");
        window.location.reload();
      })
    }



  return (
         
  


    <div>
       
       <div>
        <Header/>
       </div>

       <div class="row">
            
        <div className='timetableArea'>

            <h1>Shedule</h1>
            <hr/>

            <div className='timetablecontainer'>

            <div className='tableItem'>

           

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Bus Name</th>
                  <th scope="col">Current Location</th>
                  <th scope="col">Destination</th>
                
                </tr>
              </thead>
              <tbody>
               
              {timetdata.map((timetdata) => (

                <tr>
                  <td>{timetdata.Bus_Name}</td>
                  <td>{timetdata.Current_location}</td>
                  <td>{timetdata.Destination}</td>
                  
                
                </tr>

                  ))}
                
              </tbody>
            </table>

            </div>

            

            </div>

            </div>
    </div> 

    {/* .............................................................. */}












    </div>
  )
}


