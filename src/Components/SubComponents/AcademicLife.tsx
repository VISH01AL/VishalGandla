import Navbar from "../Core/Navbar";
import Footer from "../Core/Footer";

import Styles from "./AcademicLife.module.css";
import useTheme from "../hooks/theme/useTheme";
import UGAlogo from "../../images/academic life/uga.png";
import VITlogo from "../../images/academic life/vit.png";
import NRIlogo from "../../images/academic life/nri.png";
const AcademicLife = () => {
  const { theme } = useTheme();
  return (
    <>
      <Navbar></Navbar>

      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.centering}>
          <div className={Styles.onebox}>
            <div className={Styles.timeline}>
              <div className={Styles.line0}></div>
              <div className={Styles.dot}></div>
              <div className={Styles.line1}></div>
            </div>

            <div className={Styles.institution}>
              <img src={UGAlogo} alt="uga logo" className={Styles.logo}></img>
              <div className={`${Styles.minicontainer1} ${Styles[`minicontainer_${theme}`]}`}>
                <div className={Styles.name}>
                  University of Georgia, Athens, USA
                </div>
                <div className={Styles.degree}>
                  Master of Science in Computer Science
                </div>
                <div className={Styles.gpa_duration}>
                  <div className={Styles.gpa}>GPA: 4.0/4.0</div>

                  <div className={Styles.duration}>
                    Aug 2023 - May 2025 (Expected Graduation)
                  </div>
                </div>

                <a href="https://www.uga.edu/" target="_blank">
                  <button
                    className={`${Styles.outlinks} ${
                      Styles[`button_${theme}`]
                    }`}
                  >
                    Visit UGA
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className={Styles.onebox}>
            <div className={Styles.timeline}>
              <div className={Styles.line2}></div>
              <div className={Styles.dot}></div>
              <div className={Styles.line3}></div>
            </div>

            <div className={Styles.institution}>
              <img src={VITlogo} alt="vit logo" className={Styles.logo}></img>
              <div className={`${Styles.minicontainer1} ${Styles[`minicontainer_${theme}`]}`}>
                <div className={Styles.name}>
                  Vellore Institute of Technology, Vellore, India
                </div>
                <div className={Styles.degree}>
                  Bachelor of Technology in Electronics and Computer Engineering
                </div>
                <div className={Styles.gpa_duration}>
                  <div className={Styles.cgpa}>CGPA: 3.37/4</div>
                  <div className={Styles.duration}>Jul 2016 - May 2020</div>
                </div>

                <a href="https://vit.ac.in/" target="_blank">
                  <button
                    className={`${Styles.outlinks} ${
                      Styles[`button_${theme}`]
                    }`}
                  >
                    Visit VIT
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className={Styles.onebox}>
            <div className={Styles.timeline}>
              <div className={Styles.line4}></div>
              <div className={Styles.dot}></div>
              <div className={Styles.lineend}></div>
            </div>

            <div className={Styles.institution}>
              <img src={NRIlogo} alt="nri logo" className={Styles.logo}></img>
              <div className={`${Styles.minicontainer1} ${Styles[`minicontainer_${theme}`]}`}>
                <div className={Styles.name}>
                  NRI Junior College, Tirupati, India
                </div>
                <div className={Styles.degree}>11th and 12th Grade</div>
                <div className={Styles.gpa_duration}>
                  <div className={Styles.marks}>percentage (97.6%)</div>
                  <div className={Styles.duration}>May 2014 - Mar 2016</div>
                </div>

                <a href="https://nrieducationalsociety.com/" target="_blank">
                  <button
                    className={`${Styles.outlinks} ${
                      Styles[`button_${theme}`]
                    }`}
                  >
                    Visit NRI
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AcademicLife;
