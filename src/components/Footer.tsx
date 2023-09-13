import { Link } from "react-router-dom";
import NewsletterForm from "./Form";
import MapPic from "../images/MapPic.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <NewsletterForm />
          <div className="socials">
            <h2>SOCIAL MEDIA</h2>
            <div>
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
        </div>
        <div className="quick-link-head">
          <div>QUICK LINKS</div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none", color: " #251C46" }}>
              About
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none", color: " #251C46" }}>
              Events
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none", color: " #251C46" }}>
              Ministies{" "}
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none", color: " #251C46" }}>
              Gallery
            </Link>
          </div>
        </div>
        <div className="Map">
          <img src={MapPic} alt="Map of RCCG House of Mercy" />
          <div className="map-icons">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: " #251C46" }}
            />
            {""}
            <span>6 Alfall Rd, Coventry CV2 3GB</span>
          </div>
          <div className="map-icons">
            <i className="fa-solid fa-phone" style={{ color: " #251C46" }}></i>
            {""}
            <span>07421369153</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
