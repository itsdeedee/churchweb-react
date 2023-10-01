import Herocomponent from "../components/Herocomponent2.tsx";
import Footer from "../components/Footer.tsx";
import pastor from "../images/pastor.jpg";
import pastor2 from "../images/pastor2.jpg";
import "../Home.css";
import "../About.css";

export default function About() {
  type HeaderProps = {
    header: string;
  };
  return (
    <>
      <Herocomponent header="About" />
      <div className="About-content">
        <div className="About-RCCG">
          <div className="About-RCCG-content">
            <h2>ABOUT REEDEEMED CHRISTIAN CHURCH OF GOOD (RCCG)</h2>
            <p>
              The Redeemed Christian Church of God (RCCG) was founded in Nigeria
              in 1952 by Reverend Josiah Olufemi Akindayomi, who sought a
              personal encounter with the Supreme Being in a predominantly
              nature-worshiping environment. Akindayomi's spiritual journey
              began with his baptism in the Church Missionary Society in 1927,
              but it wasn't until he humbled himself and sought divine
              confirmation of his call to ministry that he left the Cherubim and
              Seraphim Church in 1952. Akindayomi's House Fellowship in Lagos
              became a center of spiritual conversion and growth, leading him to
              receive a divine vision that revealed the name "The Redeemed
              Christian Church of God" and promised its global spread. Despite
              his lack of formal education, Akindayomi faithfully pursued this
              vision. In the early 1970s, Akindayomi received a message from God
              about his spiritual successor, Dr. Enoch Adejare Adeboye, who
              later joined the church and became its General Overseer in 1981.
              Under Adeboye's leadership, RCCG experienced remarkable growth
              worldwide, driven by fervent prayer and an emphasis on holy
              living.
            </p>
          </div>

          <div className="About-RCCG-pic">
            {" "}
            <img
              src={pastor}
              alt="Daddy Go and Wife"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
        <p className="RCCG-P">
          Today, RCCG is active on several continents, boasting thousands of
          parishes, including over 850 in the United Kingdom. Despite its global
          influence, Adeboye remains known for his humility, making him a role
          model for many. In 2008, Newsweek recognized him as one of the 50 most
          influential people on the planet. The RCCG's foundation is rooted in a
          covenant between its members and God, promising divine provision as
          long as they remain obedient to His Word.
        </p>
        <div className="About-HOM">
          <div className="About-HOM-pic">
            <img
              src={pastor2}
              alt="Pastor Tunde and Wife"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div className="About-HOM-content">
            <h2>ABOUT (RCCG) HOUSE OF MERCY PARISH</h2>
            <p>
              Pastor Tunde Emmanuel Madariola is an Administrator and a Pastor
              in the Redeemed Christian Church of God. He started his journey as
              a Pastor in 2005 and has served in Six RCCG Parishes. He has also
              served in three RCCG Provinces as an Administrator. Pastor & Mrs.
              Tunde Madariola are currently serving as Pastors in the RCCG House
              of Mercy, Coventry. United Kingdom.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
