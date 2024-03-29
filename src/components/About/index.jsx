import React from "react";
import "./about.css";
import Profile from "../../images/profile.jpeg";
const About = () => {
  return (
    <div className="aboutcontainer">
      <div className="imgwraper">
        <img src={Profile} alt="profile picture" width="400" height="500" />
      </div>
      <div className="aboutcontent">
        <h1>About</h1>
        <p>
          Hi, my name is Joseph D Ardoin and I'm a full-stack developer. I enjoy
          working with HTML, CSS, Javascrip, React, Node, Express, and MongoDB.
          I'm also working on a few projects that I will be adding to my
          portfolio soon. I'm currently looking for a full-time position as a
          full-stack developer. If you have any questions or would like to get
          in touch, please feel free to contact me.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
