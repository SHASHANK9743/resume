import React from "react";
import Academics from "./Academics/Academics";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Skillset from "./Skillset/Skillset";
import Certifications from "./Certifications/Certifications";
function MainBody() {
  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <Academics />
      <Work />
      <Projects />
      <Skillset />
      <Certifications />
    </div>
  );
}
export default MainBody;
