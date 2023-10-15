import "../Ministries.css";
import Ministry2 from "../images/Gallery8.jpg";
import Ministry1 from "../images/eventsPic2.jpg";
import Ministry3 from "../images/Gallery5.jpg";
import Ministry4 from "../images/eventsPic1.jpg";
import Footer from "../components/Footer.tsx";
import Herocomponent from "../components/Herocomponent2.tsx";

export default function Ministries() {
  return (
    <>
      <Herocomponent header="Ministries" />
      <div className="ministry-content">
        <h2>MEET OUR MINISTRIES AND DEPARTMENTS</h2>
        <div className="ministry-grid">
          <div
            className="ministry-grid1"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="ministry1-content">
              <h2>CHOIR DEPARTMENT</h2>
              <p>
                {" "}
                Our church's choir department leads the congregation in hymns,
                praise and worship. Through music and song, they enhance our
                worship experience, uplifting hearts and souls. Join us in
                praise!
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
            <div>
              <img src={Ministry1} alt="choir" />
            </div>
          </div>
          <div
            className="ministry-grid2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div>
              <img src={Ministry2} alt="children learning" />
            </div>
            <div className="ministry2-content">
              <h2>CHILDREN DEPARTMENT</h2>
              <p>
                {" "}
                In our church, the children's department is a place of joy and
                learning. We provide a nurturing environment where young hearts
                grow in faith through engaging activities and teachings.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
          </div>
          <div
            className="ministry-grid3"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="ministry1-content">
              <h2>USHER DEPARTMENT</h2>
              <p>
                {" "}
                Our dedicated usher department at the church ensures a warm
                welcome to all, guiding and assisting congregants during
                services. They embody hospitality, creating a comfortable and
                inviting atmosphere for all.
              </p>{" "}
              <p>To Get Involved</p>
              <p>Contact:</p>
            </div>
            <div>
              <img src={Ministry3} alt="choir" />
            </div>
          </div>
          <div
            className="ministry-grid4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div>
              <div>
                <img src={Ministry4} alt="children learning" />
              </div>
            </div>
            <div className="ministry3-content">
              <h2>SUNDAY SCHOOL DEPARTMENT</h2>
              <p>
                {" "}
                Our Sunday school department is the heart of spiritual
                education. Dedicated teachers provide engaging lessons,
                fostering spiritual growth and a deep understanding of God's
                love.
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
