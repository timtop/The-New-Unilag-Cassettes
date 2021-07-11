import React from "react";

import Header from "./Header";
import Sermons from "./Sermons";
import "./styles/app.css";
// Images Import
import builder1 from "./imgs/Builders-1.jpg";
import builder2 from "./imgs/Builders-2.jpg";
import builder3 from "./imgs/Builders-3.jpg";
import builder4 from "./imgs/Builders-4.jpg";
import builder5 from "./imgs/Builders-5.jpg";
import builder6 from "./imgs/Builders-6.jpg";

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
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1624830384/Messages/200621_-_The_Heart_Of_A_Builder_iivzpe.mp3",
        name: "The Builders III - 20/06/21",
        img: builder3,
      },
      {
        title: "The Builders IIII",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 27th June 2021",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1625415070/Messages/The_Builders_px6j2j.mp3",
        name: "The Builders III - 20/06/21",
        img: builder4,
      },
      {
        title: "Building from the Ruins",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 4th July 2021",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1625414586/Messages/Builing_from_the_Ruins_nwaadg.mp3",
        name: "The Builders III - 20/06/21",
        img: builder5,
      },
      {
        title: "Tear Down and Rebuild (Panel Section)",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 11th July 2021",
        link: "https://res.cloudinary.com/the-new-unilag/video/upload/v1626024565/Messages/11th_July_2021_Sunday_Service_i4uwzi.mp3",
        name: "The Builders III - 20/06/21",
        img: builder6,
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
