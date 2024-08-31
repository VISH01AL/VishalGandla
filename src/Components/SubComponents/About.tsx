import Navbar from "../Core/Navbar";
import Footer from "../Core/Footer";
import useTheme from "../hooks/theme/useTheme";
import Styles from "./About.module.css";

const About = () => {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />

      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        
        <div className={Styles.minicontainer1}>
          <h2 className={Styles.mainText1}>Contact Info</h2>
          <ul className={Styles.list}>
            <li>
              Email:{" "}
              <span >
                 &nbsp;g.vish1al@gmail.com
              </span>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/vish1al/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/vish1al/
              </a>
            </li>
          </ul>
        </div>
        <h2 className={Styles.mainText2}>Activities and Interests</h2>
        <div className={Styles.activities}>
          <ul>
          <li>
              <h3 className={Styles.subText}>Interests</h3>
              <ul className={Styles.list}>
                <li>Passionate about playing badminton.</li>
                <li>Enthusiastic chess player.</li>
                <li>Dedicated to fitness and working out.</li>
                <li>Active participant in cricket.</li>
              </ul>
            </li>
            <li>
              <h3 className={Styles.subText}>SPIE Club & Cricket Club</h3>
              <ul className={Styles.list}>
                <li>Attended workshops on optics and photonics.</li>
                <li>Collaborated in discussions about related topics.</li>
                <li>
                  Participated in drone creation workshops as part of a team.
                </li>
                <li>Part of Cricket Club at VIT.</li>
              </ul>
            </li>
           
            <li>
              <h3 className={Styles.subText}>Student Clerical</h3>
              <ul className={Styles.list}>
                <li>
                  Currently working as a student clerical at Bolton Dining Hall
                  at UGA, collaborating with managers to provide excellent
                  customer service.
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
