import React from "react";
import Academics from "./Academics/Academics";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Skillset from "./Skillset/Skillset";
import Certifications from "./Certifications/Certifications";
import Contacts from "./Contacts/Contacts";
import MyYoutube from "./MyYoutube/MyYoutube";
function MainBody() {
  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <Academics />
      <Work />
      <Projects />
      <Skillset />
      <Certifications />
      <MyYoutube />
      <Contacts />
    </div>
  );
}
export default MainBody;
