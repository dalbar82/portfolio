import React, { Component } from "react";
import SOCIALS from "./data/socials";

class Social extends Component {
  render() {

    const { link, image } = this.props.social

    return(
      <div style={{ display: "inline-block", margin: 10}}>
        <a href={link}>
          <img src={image} alt='profile' style={{ width: 25}}/>
        </a>
      </div>
    )
  }
}

class Socials extends Component {
  render() {
    return (
      <div>
        <h2>Contact Links</h2>
        <div>
          {
            SOCIALS.map(SOCIAL => {
              return (
                <Social key={SOCIAL.id} social={SOCIAL}/>
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default Socials;