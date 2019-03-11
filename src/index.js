import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} <span>({this.props.username})</span>
        </h1>
        <img width="200px" height="200px" src={this.props.img} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Badge
    name="Ringo Singson"
    username="ringosingson"
    img="https://avatars1.githubusercontent.com/u/15993546?s=400&u=df3e33d3a1737531c7ebefe5c3b0fa4e971f4f5c&v=4"
  />,
  rootElement
);
