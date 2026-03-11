import "./contact.css";

const Contact = () => {
  return (
    <>
      <div id="form-container">
        <h3>Contact</h3>

        <form
          id="contact-form"
          action="https://formsubmit.co/9cdaed5c231f8ae874e106206942674d"
          method="POST"
        >
          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="field">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder=" "
              required
            />
            <label htmlFor="first-name">Förnamn</label>
          </div>

          <div className="field">
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder=" "
              required
            />
            <label htmlFor="last-name">Efternamn</label>
          </div>

          <div className="field">
            <textarea
              name="message"
              id="message"
              rows={10}
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="message">Meddelande</label>
          </div>

          <input type="submit" value="Skicka" id="send" />
        </form>
      </div>
    </>
  );
};

export default Contact;