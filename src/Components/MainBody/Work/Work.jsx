import React from "react";

function Work() {
  return (
    <div className="container-fluid">
      <h3>Work Experience</h3>
      <hr style={{ border: "1px solid black" }} />
      <div className="row">
        <div className="col">
          <h5>Organization</h5>
        </div>
        <div className="col">
          <h5>Designation</h5>
        </div>
        <div className="col">
          <h5>Period</h5>
        </div>
      </div>
      <hr style={{ border: "1px solid black" }} />
      <div className="row">
        <div className="col">
          <h6>Wipro India Pvt Limited</h6>
        </div>
        <div className="col">
          <h6>Project Engineer - (Star Batch)</h6>
        </div>
        <div className="col">
          <h5>Aug 2020 - Present</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Mercedes-Benz Research and Development, Bengaluru, India</h6>
        </div>
        <div className="col">
          <h6>Student Intern</h6>
        </div>
        <div className="col">
          <h5>Jul 2019 - Jun 2020</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h6>Hindalco Industries Limited</h6>
        </div>
        <div className="col">
          <h6>Summer Trainee</h6>
        </div>
        <div className="col">
          <h5>May 2017 - Jul 2017</h5>
        </div>
      </div>
      <br />
    </div>
  );
}
export default Work;
