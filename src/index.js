import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(user) {
      return user.friend === true;
    });

    var nonFriends = this.props.list.filter(function(user) {
      return user.friend !== true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user) {
            return <li key={user.name}>{user.name}</li>;
          })}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(function(user) {
            return <li key={user.name}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Users
    list={[
      { name: "Ringo Singson", friend: true },
      { name: "PAoa", friend: false },
      { name: "Zoua", friend: true },
      { name: "Monna", friend: false },
      { name: "Lenna", friend: true },
      { name: "Tonga", friend: false }
    ]}
  />,
  rootElement
);
