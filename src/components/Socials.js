import React from "react";
import SOCIALS from "../data/socials";

const Social = props => {
  const { link, image } = props.social

  return(
    <div style={{ display: "inline-block", margin: 10}}>
      <a href={link}>
        <img src={image} style={{ width: 25}}/>
      </a>
    </div>
  )
}
const Socials = () => (
  <div>
    <h2>Contact Links</h2>
    <div>
      {
        SOCIALS.map(SOCIAL => (
            <Social key={SOCIAL.id} social={SOCIAL}/>
          ))
      }
    </div>
  </div>
)

export default Socials;