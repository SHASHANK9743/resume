import React from "react";
import ReactPlayer from "react-player/lazy";
function MyYoutube() {
  return (
    <div className="container-fluid">
      <h3>My Youtube Channel</h3>
      <hr style={{ border: "1px solid black" }} />
      <br />
      <div className="row">
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
        <div className="col">
          <ReactPlayer
            height="200px"
            width="350px"
            url="https://www.youtube.com/watch?v=i8F08a9ASoc"
          />
        </div>
      </div>
      <br />
    </div>
  );
}
export default MyYoutube;
