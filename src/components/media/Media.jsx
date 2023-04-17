import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './media.css'
const Media = () => {
  return (
    <div className="media">
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
  );
};

export default Media;
