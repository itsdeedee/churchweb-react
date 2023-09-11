import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";
import aboutPic from "../images/home-about.png";
import eventPic from "../images/Eventspic .png";
import eventPic1 from "../images/eventsPic1.jpg";
import eventPic2 from "../images/eventsPic2.jpg";
import eventPic3 from "../images/eventsPic3.jpg";
import Gallerypic from "../images/Gallerypic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_2 from "../images/Gallery2.jpg";
import slide_image_3 from "../images/Gallery3.jpg";
import slide_image_4 from "../images/Gallery4.jpg";
import slide_image_5 from "../images/Gallery5.jpg";

import slide_image_7 from "../images/Gallery7.jpg";
import slide_image_8 from "../images/Gallery8.jpg";
import slide_image_9 from "../images/eventsPic1.jpg";
import slide_image_10 from "../images/eventsPic2.jpg";
import slide_image_11 from "../images/eventsPic3.jpg";
import testimonyPic from "../images/home-testimonies.png";
import Footer from "../components/Footer.tsx";

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
      <div className="home-gallery">
        <div className="home-gallery2">
          <img
            src={Gallerypic}
            alt="Gallery Head"
            className="home-gallery-img"
          />
          <div className="home-swiper">
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                850: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slide_image_11} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_2} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_4} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_5} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_7} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_8} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_9} alt="slide_image" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_10} alt="slide_image" />{" "}
              </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="Testimonies">
        <img src={testimonyPic} alt="Testimony header" />
        <div className="testimony-content">
          <div>
            <i className="fa-solid fa-quote-left fa-beat-fade icon1" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quas accusantium delectus nihil maxime, placeat porro inventore
            tempora quisquam nostrum ipsam quis.
          </p>
          <div>
            <i className="fa-solid fa-quote-right fa-beat-fade icon2" />
          </div>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="testimony-link"
          >
            See More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
