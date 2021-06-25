import React from "react";

import Header from "./Header";
import Sermons from "./Sermons";
import "./styles/app.css";
// Images Import
import builder1 from "./imgs/Builders-1.jpg";
import builder2 from "./imgs/Builders-2.jpg";
import builder3 from "./imgs/Builders-3.jpg";

class App extends React.Component {
  render() {
    const sermons = [
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624613525/Messages/060621_-_The_Builders_1_hic1uz.mp3",
        name: "The Builders I - 06/06/21",
        img: builder1,
      },
      {
        title: "The Builders II",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 13th June 2021",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624537131/Messages/130621_-_Allignment_with_The_Builder_rza5hx.mp3",
        name: "The Builders II - 13/06/21",
        img: builder2,
      },
      {
        title: "The Builders III",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 20th June 2021",
        link: "null",
        name: "The Builders III - 20/06/21",
        img: builder3,
      },
    ];
    return (
      <div className="wrapper">
        <Header />
        <Sermons sermons={sermons} />
      </div>
    );
  }
}

export default App;
