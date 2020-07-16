import React from "react";

export default function Projects() {
  return (
    <div className="container-fluid">
      <h3>Projects</h3>
      <hr style={{ border: "1px solid black" }} />
      <div>
        <h5>Image Based Frequency Analyzer</h5>
        <p>
          Created and deployed an Image based frequency Analyzer utilizing
          concepts of Machine Learning and Artificial Intelligence.
        </p>
      </div>
      <hr style={{ border: "1px solid black" }} />
      <div>
        <h5>Project Management Interface</h5>
        <p>
          The requirement was to develop an efficient network map, which would
          render all the projects for a particular annual year along with
          concerned details. This would prove to be an efficient tool for the
          management to effectively visualize all the projects at once. The
          Network graph was dynamic in nature, which had real-time zooming, drag
          and drop functionalities. Further, with the application of certain
          concepts in the backend application of filters could be enabled, which
          would give additional functionalities, like rendering the nodes based
          on properties.
        </p>
      </div>
      <hr style={{ border: "1px solid black" }} />
      <div>
        <h5>Novel Coronavirus India Tracker</h5>
        <p>Created a Coronavirus case tracker for India.</p>
      </div>
      <br />
    </div>
  );
}
