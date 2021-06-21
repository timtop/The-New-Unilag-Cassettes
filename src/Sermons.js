import React from "react";

import builderimg from "./imgs/Builders-1.jpg";
import downloadbtn from "./imgs/Download icon.svg";
import "./styles/sermons.css";

class Sermons extends React.Component {
  renderlist() {
    return this.props.sermons.map((sermon) => {
      return (
        <div className="sermon_card">
          <img src={builderimg} alt="Avatar" className="sermon_img" />
          <div className="sermon_container">
            <div className="sermon_title">
              <b>{sermon.title}</b>
            </div>
            <div className="sermon_preacher">{sermon.preacher}</div>
            <div className="sermon_date">{sermon.date}</div>
            <div className="download_btn">
              <img src={downloadbtn} alt="Avatar" className="download_icon" />
              <a href={sermon.link} download>
                Download
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="sermon">
        <h1>Sermon</h1>
        <div className="card_display">{this.renderlist()}</div>
      </div>
    );
  }
}

export default Sermons;
