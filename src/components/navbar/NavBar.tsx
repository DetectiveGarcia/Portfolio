import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = () => {
  return (
    <header>
      <nav id="side-nav">
        <ul id="nav-links">
          <li className="nav-link link-hovered">
            <a href="#about-me">
              <FontAwesomeIcon icon={faUser} />
            </a>
            {/* <p className="hovered-text">About me</p> */}
            <p className="hovered-text">Om mig</p>
          </li>
          <li className="nav-link link-hovered">
            <a href="#skills">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </a>
            <p className="hovered-text">Skills</p>
          </li>
          <li className="nav-link link-hovered">
            <a href="#project">
              <FontAwesomeIcon icon={faDiagramProject} />
            </a>
            {/* <p className="hovered-text">Projects</p> */}
            <p className="hovered-text">Projekts</p>
          </li>
          <li className="nav-link link-hovered">
            <a href="#testimonials">
              <FontAwesomeIcon icon={faCommentDots} />
            </a>
            {/* <p className="hovered-text">Testimonials</p> */}
            <p className="hovered-text">Referenser</p>
          </li>
          <li className="nav-link link-hovered">
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            {/* <p className="hovered-text">Contact</p> */}
            <p className="hovered-text">Kontakt</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
