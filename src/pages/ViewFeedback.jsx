import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

import Footer from "../components/Footer";
import Header from "../components/Header";



export default function ViewFeedback() {

   
    const [timetdata, setTimetdata] = useState([]);

    useEffect(() => {
      const getTimetable = async () => {
        const res = await fetch(
          "http://127.0.0.1:8090/feedback/"
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

        <br /><br /><br /> <br />cd 


       <div class="row">
            
        <div className='timetableArea'>

            <h1>Customer feedbacks</h1>
            <hr/>

            <div className='timetablecontainer'>

            <div className='tableItem'>

           

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Feedback</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               
              {timetdata.map((timetdata) => (

                <tr>
                  <td>{timetdata.Name}</td>
                  <td>{timetdata.Email}</td>
                  <td>{timetdata.feedback}</td>
                  
                  <td>
                
                    <button class='btn btn-danger m-1' onClick={onDelete.bind(this, timetdata._id)}>Remove</button>
                    </td>
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


