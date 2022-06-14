import React, { Component } from "react";

class Jokes extends Component {
  state = { joke: {}};

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/randon_joke')
  }
}