import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuProjector } from "react-icons/lu";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy;2024. All Rights Reserved By Akshat Agrawal</div>
      <div>
        <Link to={"https://akshatagrawalportfoliowebsite.netlify.app/"} target="_blank">
        <LuProjector />
        </Link>
        <Link to={"https://twitter.com/Akshat_2002"} target="_blank">
        <FaTwitter />
        </Link>
        <Link to={"https://www.linkedin.com/in/akshat-agrawal-282830205/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/akki-2002"} target="_blank">
        <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;