import "./contact.css"

const Contact = () => {
  return (
    <>
        <div id="form-container">
          <h3>Contact</h3>
          {/* <!-- action="https://formsubmit.co/9cdaed5c231f8ae874e106206942674d" -->
          <!-- method="POST" --> */}
          <form
            id="contact-form"
            action="https://formsubmit.co/9cdaed5c231f8ae874e106206942674d"
            method="POST"
          >
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              />


            <label htmlFor="first-name">Förnamn</label>
            <input 
              type="text" 
              name="first-name" 
              id="first-name" 
              />


            <label htmlFor="last-name">Efternamn</label>
            <input 
              type="text" 
              name="last-name" 
              id="last-name"
              />


            <label htmlFor="message">Meddelande</label>
            <textarea 
              name="message" 
              id="message" 
              rows={10}
              ></textarea>


            <input
              type="submit"
              value="Skicka"
              id="send"
            />
          </form>
        </div>
    </>
  )
}

export default Contact