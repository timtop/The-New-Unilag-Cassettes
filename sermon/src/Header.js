import React from "react";

import vinyl from "./imgs/Vinyl.svg";
import "./styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header_text">
          Welcome to The New (Unilag) <br /> Sermon Portal
        </h1>
        <img className="vinyl" src={vinyl} alt="A vinyl player" />
      </div>
    );
  }
}

export default Header;
