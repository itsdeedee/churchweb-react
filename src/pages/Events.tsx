import Header from "../components/Header.tsx";
import "../Events.css";
import Calendar1 from "../images/Calendar1.png";
import Calendar2 from "../images/Calendar2.png";
import Calendar3 from "../images/Calendar3.png";

export default function Events() {
  return (
    <>
      <div className="Events-head">
        <Header />
        <div className="Head About-head">
          <h2>EVENTS</h2>
          <p></p>
        </div>
      </div>
      <div className="U-head">
        <h2>UPCOMING EVENTS</h2>
      </div>
      <div className="Upcoming-events">
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
    </>
  );
}
