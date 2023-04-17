import React from "react";
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdWavingHand } from "react-icons/md";
import Typewriter from "typewriter-effect";
import "./Intro.css";
import Media from "../media/Media";
const Intro = () => {
  return (
    <section name="Home" className="intro">
    {/* social media */}
    <Media />
      <div className="container">
        <p>
          <MdWavingHand style={{ color: "#FFD600" }} /> Hi, my name is
        </p>
        <h1>
          <Typewriter
            options={{
              strings: ["Eslam Saadat (Iman)", "I'm a Front-end developer"],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
            }}
          />
        </h1>
        <p className="intro_text">
          I'm a passionate front-end developer who loves to learn and share my
          knowledge.
        </p>

        <Link to="Work" smooth={true} duration={500}>
          <button className="btn">
            View Work <HiArrowNarrowRight className="icon" />{" "}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
