import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "../assets/style.css";
import "../assets/header.css";

//Implementation of the footer component

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src="" height="15" alt="TAP CARD" loading="lazy" />
            </a> */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("accesstoken") ? (
                <>

<li className="nav-item">
                <a className="nav-link" href="/homepage" >
                  <h6 className="sty"> Journy History</h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/credbal">
                <h6 className="sty"> Recharge</h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <h6 className="sty"> Manage Eccount</h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <h6 className="sty"> FAQ </h6>
                </a>
              </li>

                </>
              ) : (
                <>
                </>
              )}
             
            </ul>

            {localStorage.getItem("accesstoken") ? (
              <MDBBtn href="/logout" className="btn-secondary">
                Logout
              </MDBBtn>
            ) : (
              <>
                <MDBBtn href="/register" className="btn-secondary me-2">
                  Register
                </MDBBtn>
                <MDBBtn href="/" className="btn-secondary">
                  Login
                </MDBBtn>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
