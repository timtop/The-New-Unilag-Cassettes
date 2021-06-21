import React from "react";

import Header from "./Header";
import Sermons from "./Sermons";
import "./styles/app.css";

class App extends React.Component {
  render() {
    const sermons = [
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "https://mega.nz/file/xsBXnQQK#8uyCGffPeAID0i1x_68JF78RAjh7YnGfl_HD6CAZyX0",
        name: "The Builders I - 06/06/21",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
        name: "The Builders I - 06/06/21",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
        name: "The Builders I - 06/06/21",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
        name: "The Builders I - 06/06/21",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
        name: "The Builders I - 06/06/21",
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
