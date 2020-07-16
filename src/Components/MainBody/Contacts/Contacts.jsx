import React from "react";

function Contacts() {
  return (
    <div className="container-fluid">
      <h3>Contact Me</h3>
      <hr style={{ border: "1px solid black" }} />
      <br />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-1">
          <a href="https://www.linkedin.com/in/shashank-dwivedi-0a3ba4116/">
            <img
              src={process.env.PUBLIC_URL + "/LinkedIn-.png"}
              alt=""
              style={{
                height: "50px",
                width: "50px",
              }}
            />
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-1">
          <a href="https://github.com/SHASHANK9743">
            <img
              src={process.env.PUBLIC_URL + "/github.jpg"}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-1">
          <a href="https://www.facebook.com/dazzling.shashank?ref=bookmarks">
            <img
              src={process.env.PUBLIC_URL + "/fb.png"}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col">
          <a href="https://www.youtube.com/channel/UCm4hOzV7acLCKEiq2AXs8Vw?view_as=subscriber">
            <img
              src={process.env.PUBLIC_URL + "/youtube.png"}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Contacts;
