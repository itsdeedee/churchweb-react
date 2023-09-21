import Header from "../components/Header.tsx";
import "../Gallery.css";
import photo1 from "../images/Gallery1.jpg";
import photo2 from "../images/Gal1.jpg";
import photo4 from "../images/Gal2.jpg";
import photo5 from "../images/Gallery2.jpg";
import photo6 from "../images/Gallery4.jpg";
import photo7 from "../images/Gallery5.jpg";
import photo8 from "../images/Gal3.jpg";
import photo9 from "../images/Gallery7.jpg";
import photo10 from "../images/Gallery8.jpg";
import photo11 from "../images/Gal4.jpg";
import photo13 from "../images/Gal5.jpg";
import photo14 from "../images/Gal6.jpg";
import Footer from "../components/Footer.tsx";

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="Head About-head">
        <h2>GALLERY</h2>
        <p></p>
      </div>
      <div className="gallery-container">
        <div className="column">
          <div className="photo">
            <img src={photo1} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo2} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo10} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo13} alt="photo" />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={photo4} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo5} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo11} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo6} alt="photo" />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={photo7} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo8} alt="photo" />
          </div>
          <div className="photo">
            <img src={photo9} alt="photo" />
          </div>

          <div className="photo">
            <img src={photo14} alt="photo" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
