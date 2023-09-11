import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div></div>
        <div className="quick-link-head">
          <div>QUICK LINKS</div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              About
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              Events
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              Ministies{" "}
            </Link>
          </div>
          <div className="quick-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              Gallery
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
