import { Component } from "react";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css3.svg";
import sass from "../assets/images/sass.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import js from "../assets/images/js.svg";
import react from "../assets/images/react.svg";
import mongodb from "../assets/images/mongodb.svg";
import postresql from "../assets/images/postresql.svg";
import github from "../assets/images/github.svg";
import Card from "./Card";

class Skills extends Component {
  render() {
    return (
      <div className="skills mb-5 py-5">
        <h1 className="text-center">Skills</h1>
        <hr className="mb-3" />
        <div className="cards d-flex justify-content-evenly flex-wrap">
          <Card image={html} text="HTML" />
          <Card image={css} text="CSS" />
          <Card image={sass} text="SASS" />
          <Card image={bootstrap} text="BOOTSTRAP" />
          <Card image={js} text="JAVASCRIPT" />
          <Card image={react} text="REACT" />
          <Card image={mongodb} text="MONGODB" />
          <Card image={postresql} text="POSTGRESQL" />
          <Card image={github} text="GITHUB" />
        </div>
      </div>
    );
  }
}

export default Skills;
