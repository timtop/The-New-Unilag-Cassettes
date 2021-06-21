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
        link: "link",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
      },
      {
        title: "The Builders",
        preacher: "Pst. Deborah Elijah",
        date: "Sunday 6th June 2021",
        link: "link",
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
