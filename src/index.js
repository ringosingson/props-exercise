import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var USER_DATA = {
  name: "Ringo Singson",
  username: "ringosingson",
  img:
    "https://avatars1.githubusercontent.com/u/15993546?s=400&u=df3e33d3a1737531c7ebefe5c3b0fa4e971f4f5c&v=4"
};

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name: {this.props.user.name}</h1>
        <h3>Username: {this.props.user.username}</h3>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Badge user={USER_DATA} />, rootElement);
