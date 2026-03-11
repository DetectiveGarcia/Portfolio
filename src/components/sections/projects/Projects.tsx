import "./projects.css"
import ScreeShot1 from "../../../../images/Screenshot 2025-12-10 195753.png"
import ScreeShot2 from "../../../../images/Screenshot 2025-12-10 200110.png"
import ScreeShot3 from "../../../../images/Screenshot 2025-12-10 200323.png"
import ScreeShot4 from "../../../../images/Screenshot 2025-12-10 203115.png"

const Projects = () => {

  return (
    <>
        <h3>Projects</h3>
        <ul id="projects-container">
          <li className="project">
            <img
              src={ScreeShot1}
              alt="Preview bild på artist projekt"
            />
            <div className="project-description">
              <p>Artist projekt</p>
              <a href="https://github.com/DetectiveGarcia/la-selva-website">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://la-selva-website.vercel.app/" target="_blank"   rel="noopener noreferrer"
                >Demo<i className="fa-solid fa-square-up-right"></i>
              </a>
            </div>
          </li>
          
          <li className="project">
            <img
              src={ScreeShot2}
              alt="Bild på CMS projekt"
            />
            <div className="project-description">
              <p>CMS w/ Storyblok & NextJS</p>
              {/* <a href="">
                <i className="fa-brands fa-github"></i>
              </a> */}
              <a href="https://cms-gruppuppgift.vercel.app/" target="_blank"   rel="noopener noreferrer"
                >Demo<i className="fa-solid fa-square-up-right"></i></a>
            </div>
          </li>
          <li className="project">
            <img
              src={ScreeShot3}
              alt="Bild på react projekt"
            />
            <div className="project-description">
              <p>React - Rick and Morty</p>
              <a href="https://github.com/DetectiveGarcia/Rick-and-Morty-React">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://rick-and-morty-react-sigma.vercel.app/"
                target="_blank"   rel="noopener noreferrer"
                >Demo<i className="fa-solid fa-square-up-right"></i></a>
            </div>
          </li>
          <li className="project">
            <img
              src={ScreeShot4}
              alt="Bild på Zoo projekt"
            />
            <div className="project-description">
              <p>Zoo</p>
              <a href="https://github.com/DetectiveGarcia/zoo">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://detectivegarcia.github.io/zoo/" target="_blank"   rel="noopener noreferrer"
                >Demo<i className="fa-solid fa-square-up-right"></i></a>
            </div>
          </li>
        </ul>
    </>
  );
};

export default Projects;