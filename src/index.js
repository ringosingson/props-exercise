import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img}/>
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name:{this.props.name} </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}<h3/>
    )
      }
    }
    
class Badge extends React.Component {
          render() {
        return(
        <div>
        <Avatar img = {this.props.user.img}/>
        <Label name= {this.props.user.name}/>
        <ScreenName username= {this.props.user.username}/>
        </div>
    )
      }
}

ReactDOM.render(<Badge user = {{
          name: "Ringo Singson",
          username: "ringosingson",
          img: "https://avatars1.githubusercontent.com/u/15993546?s=400&u=df3e33d3a1737531c7ebefe5c3b0fa4e971f4f5c&v=4",
        }} />, document.getElementById("root");
