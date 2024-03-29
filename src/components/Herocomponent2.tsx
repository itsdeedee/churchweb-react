import Header from "./Header";
import "../Herocomponent.css";

type HeaderProps = {
  header: string;
};
const Herocomponent: React.FunctionComponent<HeaderProps> = ({ header }) => {
  return (
    <div className="Head About-head">
      <Header />
      <div>
        <h2 style={{ marginTop: "80px" }}>{header}</h2>
        <p></p>
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
  );
};

export default Herocomponent;
