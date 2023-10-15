import "../Events.css";
import Calendar1 from "../images/Calendar1.png";
import Calendar2 from "../images/Calendar2.png";
import Calendar3 from "../images/Calendar3.png";
import Wevent1 from "../images/eventsPic1.jpg";
import Wevent2 from "../images/eventsPic2.jpg";
import Wevent3 from "../images/eventsPic3.jpg";
import Wevent4 from "../images/Gallery6.jpg";
import Footer from "../components/Footer.tsx";
import Herocomponent from "../components/Herocomponent2.tsx";

export default function Events() {
  return (
    <>
      <Herocomponent header="Events" />
      <div className="U-head">
        <h2>UPCOMING EVENTS</h2>
      </div>
      <div
        className="Upcoming-events"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <div className="Uevents1">
          <h4>SEPT</h4>
          <p></p>
          <img src={Calendar1} alt="Calendar" />
          <h4>WORD AND PRAYER DINNER</h4>
          <div className="Time d-flex">
            <i className="fa-regular fa-clock" />
            <p>19:00 - 20:00</p>
          </div>
        </div>
        <div className="Uevents2">
          <h4>SEPT</h4>
          <p></p>
          <img src={Calendar2} alt="Calendar" />
          <h4>YOUTH FELLOWSHIP</h4>
          <div className="Time d-flex">
            <i className="fa-regular fa-clock" />
            <p>14:00 - 16:00</p>
          </div>
        </div>
        <div className="Uevents3">
          <h4>SEPT</h4>
          <p></p>
          <img src={Calendar3} alt="Calendar" />
          <h4>SOLUTION SUNDAY</h4>
          <div className="Time d-flex">
            <i className="fa-regular fa-clock" />
            <p>11:30 - 13:00</p>
          </div>
        </div>
      </div>
      <div className="Weekly-events">
        <h2>WEEKLY EVENTS</h2>
        <div
          className="W-Events1"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="Events-img">
            <img src={Wevent1} alt="Event" />
          </div>
          <div className="Events-content1">
            <h2>SOLUTION SUNDAY</h2>
            <p>
              Join us for our spiritually enriching Sunday services every 2nd,
              4th, and 5th Sunday of the month from 11:30am to 1:00pm. Come to
              learn the Word and engage in prayer.
            </p>
          </div>
        </div>
        <div
          className="W-Events2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="Events-img">
            <img src={Wevent2} alt="Event" />
          </div>
          <div className="Events-content2">
            <h2>THANKSGIVING SUNDAY</h2>
            <p>
              Celebrate the 1st Sunday of every month with us at our church's
              monthly service from 11:30am to 1:30pm. Join us for a joyful time
              of dance, praise, and testimonies as we give thanks to the Lord
              for the blessings of the month.
            </p>
          </div>
        </div>
        <div
          className="W-Events3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="Events-img">
            <img src={Wevent3} alt="Event" />
          </div>
          <div className="Events-content3">
            <h2>WORD AND PRAYER DINNER</h2>
            <p>
              Join us every Wednesday from 7pm to 8pm for our enriching weekday
              service at our church. Delve into the profound teachings of the
              Word of God and engage in heartfelt prayer. It's a spiritual
              journey you won't want to miss!
            </p>
          </div>
        </div>
        <div
          className="W-Events4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div className="Events-img">
            <img src={Wevent4} alt="Event" />
          </div>
          <div className="Events-content1">
            <h2>YOUTH SUNDAYS</h2>
            <p>
              Energize your Sundays with our Youth Sunday service on the 3rd
              Sunday of each month from 11:30am to 1:00pm. Join our dynamic
              youths as they anchor the church service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
