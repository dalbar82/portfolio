import React, { Component } from "react";

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
        <h1>Hello</h1>
        <p>My aname is Damian</p>
        <p>Code is life</p>
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
      </div>
    )
  }
}

export default App;