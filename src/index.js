import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name) {
          return <li>{name}</li>;
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <Users list={["Ringo", "Tonga", "Monna", "Lenna"]} />,
  document.getElementById("root")
);
