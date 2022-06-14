import React, { Component } from "react";

const TITLES = [
  'legend',
  'myth',
  'star',
  'carer'
]

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true};

  componentDidMount() {
    setTimeout(() => this.setState( { fadeIn: false}), 2000)

    this.animateTitles();
  }

  componentWillUnmount() {

  }

  animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });
      setTimeout(() => this.setState( { fadeIn: false}), 2000);
    }, 4000)
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[this.state.titleIndex];

    return(
      <p className={ fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am a {title}</p>
    )
  }
}

export default Title;