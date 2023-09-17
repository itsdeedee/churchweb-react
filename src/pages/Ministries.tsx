import Header from "../components/Header.tsx";
import "../Ministries.css";
import Ministry2 from "../images/Gallery8.jpg";
import Ministry1 from "../images/eventsPic2.jpg";
import Ministry3 from "../images/Gallery5.jpg";
import Ministry4 from "../images/eventsPic1.jpg";
import Footer from "../components/Footer.tsx";

export default function Ministries() {
  return (
    <>
      <Header />
      <div className="Head About-head">
        <h2>MINISTRIES</h2>
        <p></p>
      </div>
      <div className="ministry-content">
        <h2>MEET OUR MINISTRIES AND DEPARTMENTS</h2>
        <div className="ministry-grid">
          <div className="ministry-grid1">
            <div className="ministry1-content">
              <h2>CHOIR DEPARTMENT</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quas accusantium delectus nihil maxime, placeat porro inventore
                tempora quisquam nostrum ipsam quis.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
            <div>
              <img src={Ministry1} alt="choir" />
            </div>
          </div>
          <div className="ministry-grid2">
            <div>
              <img src={Ministry2} alt="children learning" />
            </div>
            <div className="ministry2-content">
              <h2>CHOIR DEPARTMENT</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quas accusantium delectus nihil maxime, placeat porro inventore
                tempora quisquam nostrum ipsam quis.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
          </div>
          <div className="ministry-grid3">
            <div className="ministry1-content">
              <h2>CHOIR DEPARTMENT</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quas accusantium delectus nihil maxime, placeat porro inventore
                tempora quisquam nostrum ipsam quis.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
            <div>
              <img src={Ministry3} alt="choir" />
            </div>
          </div>
          <div className="ministry-grid4">
            <div>
              <div>
                <img src={Ministry4} alt="children learning" />
              </div>
            </div>
            <div className="ministry3-content">
              <h2>CHOIR DEPARTMENT</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                quas accusantium delectus nihil maxime, placeat porro inventore
                tempora quisquam nostrum ipsam quis.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
