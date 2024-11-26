import React from "react";
import tw from "tailwind-styled-components";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <img src={require("../../assets/Aboutus.jpg")} alt="ABOUT US"/>
      </div>
      <div className=" top-[-200px">
        <img src={require("../../assets/Process.png")} alt="Process" />
      </div>
    </div>
  );
};

export default About;
