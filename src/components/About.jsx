import React from "react";

const About = ({ image, about }) => {
  return (
    <div>
      <aside>
        <img
          src={image}
          placeholder="https://via.placeholder.com/215"
          alt="blog logo"
        ></img>
        <p>{about}</p>
      </aside>
    </div>
  );
};

export default About;
