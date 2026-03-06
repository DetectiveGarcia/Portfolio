import "./testimonials.css"
import placeHolderPic from "../../../../public/images/user-placeholder.png"

const Testimonials = () => {
  return (
    <>
        <h3>Testimonials</h3>

        <ul id="terminonials-container">
          <li className="testimonial">
            <img
              className="placeholder-user"
              src={placeHolderPic}
              alt="Profilbild för Agron Muça"
            />
            <p className="quote">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus
              mi."
            </p>
            <em>Agron Muça</em>
          </li>
          <li className="testimonial">
            <img
              className="placeholder-user"
              src={placeHolderPic}
              alt="Profilbild för Amina Okonkwo"
            />
            <p className="quote">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien."
            </p>
            <em>Amina Okonkwo</em>
          </li>
          <li className="testimonial">
            <img
              className="placeholder-user"
              src={placeHolderPic}
              alt="Profilbild för Elin Markström"
            />
            <p className="quote">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis."
            </p>
            <em>Elin Markström</em>
          </li>
          <li className="testimonial">
            <img
              className="placeholder-user"
              src={placeHolderPic}
              alt="Profilbild för Vjosa Meta"
            />
            <p className="quote">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus."
            </p>
            <em>Vjosa Meta</em>
          </li>
        </ul>
    </>
  )
}

export default Testimonials