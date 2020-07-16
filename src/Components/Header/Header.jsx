import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="container-fluid" style={{ background: "#140722" }}>
      <div className="row">
        <div className="col-2.75">
          <img
            src={process.env.PUBLIC_URL + "/resume.jpg"}
            className="Image"
            alt=""
          />
        </div>

        <div className="col-10">
          <div className="info-Container">
            <h3 style={{ color: "white" }}>SHASHANK DWIVEDI</h3>
            <hr style={{ border: "1px solid white" }} />
            <h6 style={{ color: "white" }}>Full Stack Developer (MERN)</h6>
            <h6 style={{ color: "white" }}>Machine Learning Enthusiast</h6>
            <h6 style={{ color: "white" }}>
              Birla Institute of Technology and Science, Pilani
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
