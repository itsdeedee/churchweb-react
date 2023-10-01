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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          accusantium delectus nihil maxime, placeat porro inventore tempora
          quisquam nostrum ipsam quis.
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
