import React from "react";

function Certifications() {
  return (
    <div className="container-fluid">
      <h3>Certifications</h3>
      <hr style={{ border: "1px solid black" }} />
      <div className="row">
        <div className="col-7">
          <h5>Course Name</h5>
        </div>
        <div className="col-2">
          <h5>Certificate Link</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h6>The Complete 2020 Web Development Bootcamp</h6>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <a href="https://www.udemy.com/certificate/UC-f29b71c1-abeb-423b-8b9e-2a3e71bce9bb/">
            <h6>Click Me</h6>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h6>Data Structures and Algorithms: Deep Dive using Java</h6>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <a href="/">
            <h6>Click Me</h6>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h6>Python Bootcamp 2020</h6>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <a href="/">
            <h6>Click Me</h6>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h6>SQL Masterclass: SQL for Data Analytics</h6>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <a href="/">
            <h6>Click Me</h6>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h6>MATLAB for Scientists and Engineers</h6>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <a href="https://www.udemy.com/certificate/UC-AU4PP0A2/">
            <h6>Click Me</h6>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
