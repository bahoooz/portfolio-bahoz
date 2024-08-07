/* eslint-disable react/no-unescaped-entities */
import "../components-css/Header.css";
import { CaretDown, Link } from "@phosphor-icons/react";
import HydraImg from "../../assets/header-hydra.webp";
import GmcImg from "../../assets/header-gmc.webp";
import MernBlogImg from "../../assets/header-blog-mern.webp";
import Typewriter from "./TypewritterEffect";

const Header = () => {
  return (
    <div id="header">
      <h1>
        Je m'appelle <br /> Julien Brault--Chérif,
      </h1>
      <h2>
        Développeur Web Full-Stack
      </h2>
      <a className="link-header" href="https://www.linkedin.com/in/julien-brault-ch%C3%A9rif-aa276226b/" target="_blank" rel="noreferrer">
      <Typewriter text="Vooir mon linkedin !" />
      </a>
      <div className="container-projects">
        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gmod-creators.com"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img
            className="img-project"
            src={GmcImg}
            alt="Image projet Mern blog"
          />
        </div>
        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mern-blog-nfas.onrender.com/"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img
            className="img-project"
            src={MernBlogImg}
            alt="Image projet Mern blog"
          />
        </div>
        <div className="img-box">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://template-site-1-bahoz.netlify.app/"
            className="hover-img"
          >
            <Link className="icon-header" />
          </a>
          <img
            className="img-project"
            src={HydraImg}
            alt="Image projet Hydra"
          />
        </div>
      </div>
      <a href="#portfolio">
        <CaretDown color="#fcfcfc" weight="bold" />
      </a>
    </div>
  );
};

export default Header;
