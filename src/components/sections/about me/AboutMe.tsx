import "./aboute-me.css";
import CV from "../../../../images/CV - Miguel Garcia Dev.pdf"
import selfie from "../../../../images/b07dc84f-4b9d-4a60-89ef-bd6bd8614ebe.jpeg"

const AboutMe = () => {
  return (
    <div id="about-me-container">
      <h1>Hej, jag heter Miguel</h1>
      <div id="buttons">
        {/* <a
              href="/CV - Miguel Garay  - Webbutvecklare.pdf"
              id="något-annat"
              download
            >
              Något annat
            </a> */}
        <a href={CV} id="CV" download>
          Ladda ner CV
        </a>
      </div>
      <img
        id="selfie"
        src={selfie}
        alt="Foto på Miguel Garay"
      />
      <p>
        Fullstack-utvecklare med fokus på att bygga moderna webbapplikationer med ren kod, skalbara system och solid backend-arkitektur.
      </p>
    </div>
  )
}

export default AboutMe