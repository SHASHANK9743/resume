import React from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import Header from "../../Header/Header";
function Sticky_Header() {
  return (
    <div>
      <StickyHeader header={<Header />} />
    </div>
  );
}
export default Sticky_Header;
