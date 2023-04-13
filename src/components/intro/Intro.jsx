import React from "react";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import Typewriter from "typewriter-effect";
import "./Intro.css";
const Intro = () => {
  return (
    <section name="Home" className="intro">
      <div className="social">
        <ul>
          <li>
            <a
              href="/"
              className="linkedin"
              style={{ backgroundColor: "var(--bg-blue)" }}
            >
              <span>linkedin</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="github"
              style={{ backgroundColor: "var(--bg-dark)" }}
            >
              <span>Github</span>
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="email"
              style={{ backgroundColor: "var(--bg-green)" }}
            >
              <span>Email</span>
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="resume"
              style={{ backgroundColor: "var(--bg-gray)" }}
            >
              <span>Resume</span>
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
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
