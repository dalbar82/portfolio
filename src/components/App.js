import React, { Component } from "react";
import Projects from "./Projects";
import Socials from "./Socials";
import profileImage from '../assets/dog.jpeg'
import Title from "./Title";

class App extends Component{
  state = {
    displayBio: false
  }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio})
  }

  render() {
    return(
      <div>
        <img src={profileImage} className="profile-image"/>
        <h1>Hello</h1>
        <p>My name is Damian</p>
        <p>Code is life</p>
        <Title />
        {this.state.displayBio ? (
        <div>
          <p>I live in woodend</p>
          <p>Love music, movies and code</p>
          <button onClick={this.toggleDisplayBio}>Read Less</button>
        </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <Socials />
      </div>
    )
  }
}

export default App;