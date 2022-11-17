import React from 'react';
import { useState, useEffect } from "react";
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addtimetable.css";
import axios from 'axios';
import swal from "sweetalert";


export default function ViewAllTimeTable() {

  const [timetdata, setTimetdata] = useState([]);

  useEffect(() => {
    const getTimetable = async () => {
      const res = await fetch(
        "http://127.0.0.1:8090/timetable/"
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
        <Header/>

    <div class="row">
            <Slidebar/>
        <div className='timetableArea'>

            <h1>Time Tables</h1>
            <hr/>

            <div className='timetablecontainer'>

            <div className='tableItem'>

           

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Route No</th>
                  <th scope="col">Bus No</th>
                  <th scope="col">Start Location</th>
                  <th scope="col">End Location</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               
              {timetdata.map((timetdata) => (

                <tr>
                  <td>{timetdata.route_no}</td>
                  <td>{timetdata.bus_no}</td>
                  <td>{timetdata.start_location}</td>
                  <td>{timetdata.end_location}</td>
                  <td>{timetdata.start_time}</td>
                  <td>{timetdata.end_time}</td>
                  <td>
                  <a href={`/admin/Updatetime/${timetdata._id}`}>
                    <button class='btn btn-primary m-1'>Update</button>
                  </a>
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
    </div>
  )
}