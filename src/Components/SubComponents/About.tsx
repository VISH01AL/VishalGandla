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
        
        <div className={`${Styles.minicontainer1} ${Styles[`minicontainer1_${theme}`]}`}>
          <h2 className={Styles.mainText1}>Contact Info</h2>
          <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
            <li>
              Email:{" "}
              <span >
                 &nbsp;g.vish1al@gmail.com
              </span>
            </li>
            <li>
              outlook:{" "}
              <span >
                 &nbsp;g.vish1al@outlook.com
              </span>
            </li>
          </ul>
        </div>
        <h2 className={Styles.mainText2}>Activities and Interests</h2>
        <div className={Styles.activities}>
          <ul>
          <li>
              <h3 className={Styles.subText}>Student supervisor</h3>
              <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
                <li>
                  Currently working as a student supervisor at Bolton Dining Hall
                  at UGA, collaborating with managers to provide excellent
                  customer service.
                </li>
              </ul>
            </li>
          <li>
              <h3 className={Styles.subText}>Interests</h3>
              <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
                <li>I love to dive in, whether it's a pool, river, or beach – if there's water, I'm there!</li>
                <li>I’m all about making memories with friends and family on vacation – nothing beats good vibes, great company, and a little adventure!</li>
                <li>I really enjoy listening to music.</li>
                <li>Passionate about playing badminton.</li>
                <li>Enthusiastic carrom, chess player.</li>
                <li>Dedicated to fitness and working out.</li>
                <li>love playing in cricket .</li>
              </ul>
            </li>
            <li>
              <h3 className={Styles.subText}>SPIE Club & Cricket Club</h3>
              <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
                <li>Attended workshops on optics and photonics.</li>
                <li>Collaborated in discussions about related topics.</li>
                <li>
                  Participated in drone creation workshops as part of a team.
                </li>
                <li>Part of Cricket Club at VIT.</li>
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
