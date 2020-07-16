import React from "react";

function Skillset() {
  return (
    <div className="container-fluid">
      <h3>Skills</h3>
      <hr style={{ border: "1px solid black" }} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h5>Front-End Languages</h5>
            <ul>
              <li>
                <h6>HTML</h6>
              </li>
              <li>
                <h6>css</h6>
              </li>
              <li>
                <h6>JAVASCRIPT</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Front-End Libraries/Frameworks</h5>
            <ul>
              <li>
                <h6>React JS</h6>
              </li>
              <li>
                <h6>Bootstrap 4</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Back-End Languages</h5>
            <ul>
              <li>
                <h6>Node JS</h6>
              </li>
              <li>
                <h6>Python</h6>
              </li>
              <li>
                <h6>Java</h6>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Back-End Libraries/Frameworks</h5>
            <ul>
              <li>
                <h6>Express</h6>
              </li>
              <li>
                <h6>Django (Working Knowledge)</h6>
              </li>
              <li>
                <h6>Flask (Working Knowledge)</h6>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h5>Database</h5>
          <ul>
            <li>
              <h6>SQL</h6>
            </li>
            <li>
              <h6>MONGO DB (Working Knowledge)</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skillset;
