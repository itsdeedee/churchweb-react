import Header from "./Header";
import Button from "./Button";
import "../Herocomponent.css";

const Herocomponent = () => {
  return (
    <div className="Head">
      <Header />
      <div>
        <h2>WELCOME TO, RCCG HOUSE OF MERCY</h2>
        <h5>
          We are glad to have you here. Join us for Sunday Worship in chutch
          venue or online at 11:15am-12:30pm.
        </h5>
        <Button />
        <div>
          <i
            className="fa-solid fa-angle-down fa-bounce"
            style={{
              color: "#ffffff",
              marginTop: "110px",
              fontSize: "40px",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Herocomponent;
