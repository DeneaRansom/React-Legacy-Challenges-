import React, { Component } from "react";
import Dogs from "./Dogs";
export default class DogIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      img: "",
    };
  }
  dogFetcher() {
    console.log("Component Mounted!");
    console.log(this.state.img);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          img: data.message,
        });
      })
      .catch(console.log);
    console.log(this.state.img);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.dogFetcher()}>See a dog!</button>
        <img src={this.state.img} alt="lil doggy" />
      </div>
    );
  }
}
