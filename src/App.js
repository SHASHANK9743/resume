import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import MainBody from "./Components/MainBody/MainBody.jsx";
import Sticky_Header from "./Components/MainBody/Sticky_Header/Sticky_Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <MainBody className="mainBody" />
      <Footer />
    </div>
  );
}

export default App;
