import Header from "../components/Header.tsx";
import "../Contact.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import ContactForm from "../components/ContactForm.tsx";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="Head About-head">
        <h2>CONTACT US</h2>
        <p></p>
      </div>
      <div className="Contact1">
        <div className="Contact-content1">
          <h2>Write Us a Message</h2>
          <ContactForm />
        </div>
        <div className="contact-us">
          {" "}
          <div className="socials2">
            <h2>
              <i className="fa-solid fa-share-nodes" />
              <span>SOCIAL MEDIA</span>
            </h2>
            <div className="c-icon">
              <Link to="/">
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: " #251C46", fontSize: "28px" }}
                ></i>
              </Link>
              <Link to="/">
                <i
                  className="fa-brands fa-twitter"
                  style={{
                    color: " #251C46",
                    fontSize: "28px",
                    marginLeft: "30px",
                  }}
                ></i>
              </Link>
            </div>
          </div>
          <div className="mail">
            <h2>
              <i className="fa-regular fa-envelope" /> <span>EMAIL</span>
            </h2>
            <Link to="mailto:admin@rccghom.org" className="mail-link">
              admin@rccghom.org
            </Link>
          </div>
          <div className="phone">
            <h2>
              {" "}
              <i className="fa-solid fa-phone" />
              {"     "}
              <span>PHONE</span>
            </h2>
            <p>07421369153</p>
          </div>
        </div>
      </div>
      <div className="Contact2">
        <h2>JOIN US FOR SERVICE</h2>
        <p>SUNDAYS- 10:30 -1:00</p>
        <div className="contact-banner"></div>
        <p>
          {" "}
          <i className="fa-solid fa-location-dot" /> 6 Alfall Rd, Coventry CV2
          3GB
        </p>
      </div>
      <Footer />
    </>
  );
}
