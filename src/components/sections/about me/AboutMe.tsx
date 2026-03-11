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
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Placerat in
            id cursus mi pretium tellus duis. Urna tempor pulvinar vivamus
            fringilla lacus nec metus. Integer nunc posuere ut hendrerit semper
            vel class. Conubia nostra inceptos himenaeos orci varius natoque
            penatibus. Mus donec rhoncus eros lobortis nulla molestie mattis.
            Purus est efficitur laoreet mauris pharetra vestibulum fusce.
            Sodales consequat magna ante condimentum neque at luctus. Ligula
            congue sollicitudin erat viverra ac tincidunt nam. Lectus commodo
            augue arcu dignissim velit aliquam imperdiet. Cras eleifend turpis
            fames primis vulputate ornare sagittis. Libero feugiat tristique
            accumsan maecenas potenti ultricies habitant. Cubilia curae hac
            habitasse platea dictumst lorem ipsum. Faucibus ex sapien vitae
            pellentesque sem placerat in. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>
  )
}

export default AboutMe