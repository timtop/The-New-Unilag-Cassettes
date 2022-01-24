import React from "react";

// import builderimg from "./imgs/Builders-1.jpg";
import downloadbtn from "./imgs/Download icon.svg";
import "./styles/sermons.css";

class Sermons extends React.Component {
  renderlist2021() {
    return this.props.sermons.map((sermon) => {
      return (
        <div className="sermon_card">
          <img src={sermon.img} alt="Avatar" className="sermon_img" />
          <div className="sermon_container">
            <div className="sermon_title">
              <b>{sermon.title}</b>
            </div>
            <div className="sermon_preacher">{sermon.preacher}</div>
            <div className="sermon_date">{sermon.date}</div>
            <a href={sermon.link} download={sermon.name}>
              <div className="download_btn">
                <img src={downloadbtn} alt="Avatar" className="download_icon" />
                Download
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  renderlist2022() {
    return this.props.sermons2022.map((sermon) => {
      return (
        <div className="sermon_card">
          <img src={sermon.img} alt="Avatar" className="sermon_img" />
          <div className="sermon_container">
            <div className="sermon_title">
              <b>{sermon.title}</b>
            </div>
            <div className="sermon_preacher">{sermon.preacher}</div>
            <div className="sermon_date">{sermon.date}</div>
            <a href={sermon.link} download={sermon.name}>
              <div className="download_btn">
                <img src={downloadbtn} alt="Avatar" className="download_icon" />
                Download
              </div>
            </a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="sermon">
        <h1>Sermons 2022</h1>
        <div className="card_display">{this.renderlist2022()}</div>

        <h1>Sermons 2021</h1>
        <div className="card_display">{this.renderlist2021()}</div>
      </div>
    );
  }
}

export default Sermons;
