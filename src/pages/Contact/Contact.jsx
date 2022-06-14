import React from "react";
import "./contact.css"
import clicksLogo from "../../assets/logos/clicks-logo.png";

function Contact() {
  return (
    <main className="hero">
      <div className="container">
        <aside className="left-col text-center">
          <img
            src={clicksLogo}
            className="banner"
            alt="Clicks gadget logo"
            width="200"
            height="200"
          />
        </aside>
        <div className="form px-5">
          <form action="mailto:brian.favour@gmail.com?subject=Gadget%20purchase%20enquiry">
            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div>
                <label htmlor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="col-12 text-center mb-5">
              <button type="submit" className="btn rounded-pill btn-form-custom">
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="map">
          <iframe
            className="col-12 mb-4 well "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4255135160015!2d3.337527514094337!3d6.59391822417172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922055555555%3A0xa444f42bea9528c5!2sClicks%20gadget%20Hub!5e0!3m2!1sen!2sng!4v1622039029473!5m2!1sen!2sng"
            height="300"
            title="google map to clicksgadgethub"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contact;
