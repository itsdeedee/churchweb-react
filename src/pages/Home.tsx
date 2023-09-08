import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";
import aboutPic from "../images/home-about.png";
import eventPic from "../images/Eventspic .png";
import eventPic1 from "../images/eventsPic1.jpg";
import eventPic2 from "../images/eventsPic2.jpg";
import eventPic3 from "../images/eventsPic3.jpg";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />

      <div className="Head">
        <h2>WELCOME TO, RCCG HOUSE OF MERCY</h2>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          accusantium delectus nihil maxime, placeat porro inventore tempora
          quisquam nostrum ipsam quis.
        </h5>
      </div>
      <Button />

      <div className="Home-about">
        <div className="pic">
          <img src={aboutPic} alt="about pic" />
        </div>
        <div className="about-content">
          <h3 className="about-content1">RCCG HOUSE OF MERCY</h3>
          <p className="about-content2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quas accusantium delectus nihil maxime, placeat porro inventore
            tempora quisquam nostrum ipsam quis.
          </p>
          <Link
            to="/"
            className="about-content-link"
            style={{ textDecoration: "none" }}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="home-events">
        <img
          src={eventPic}
          alt="events-header-pic"
          style={{
            display: "block",
            margin: "0 auto",
            width: "300px",
            height: "250px",
            marginTop: "60px",
          }}
        />
        <div className="home-events-content">
          <div className="eventsPic1">
            <img src={eventPic1} alt="Bible" />
            <h4>SOLUTION SUNDAY</h4>
            <p></p>
          </div>
          <div className="eventsPic2">
            <img src={eventPic2} alt="Church Choir" />
            <h4>THANKSGIVING SUNDAY</h4>
            <p></p>
          </div>
          <div className="eventsPic3">
            <img src={eventPic3} alt="Woman worshipping" />
            <h4>WORD AND PRAYER DINNER</h4>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
