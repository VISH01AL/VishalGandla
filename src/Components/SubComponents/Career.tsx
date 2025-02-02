import Navbar from "../Core/Navbar";
import Footer from "../Core/Footer";
import WiproLogo from "../../images/career/Wipro Logo.png";
import AmarajaLogo from "../../images/career/Amara raja Logo.png";
import Styles from "./Career.module.css";
import useTheme from "../hooks/theme/useTheme";
import { useState } from "react";
import AmaraRaja from "./Career/AmaraRaja";
import Wipro from "./Career/Wipro";
const Career = () => {
  const { theme } = useTheme();
  const [showCompany, setShowCompany] = useState("company1");
  return (
    <>
      <Navbar></Navbar>

      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.top}>
          <div
            className={Styles.experience1}
            onClick={() => {
              setShowCompany("company1");
            }}
          >
            <div className={`${Styles.minicontainer1} ${Styles[`minicontainer1_${theme}`]}`}>
              <img
                src={WiproLogo}
                alt="Wipro Logo"
                className={Styles.wiprologo}
              ></img>
            </div>

            <div
              className={`${Styles.each_experience} ${
                showCompany === "company1"
                  ? `${Styles.selected_experience}`
                  : ``
              }`}
            >
              <h2>Wipro Limited, Bangalore, India</h2>
              <h3>Software Engineer L3 (September 2020 – May 2023)</h3>
              <a href="https://www.wipro.com/" target="_blank" className={Styles.outlinkATags}>
                <button className={`${Styles.outlinks} ${Styles[`button_${theme}`]}`}>Visit Wipro </button>
              </a>
            </div>
          </div>

          <div
            className={Styles.experience2}
            onClick={() => {
              setShowCompany("company2");
            }}
          >
            <div className={Styles.minicontainer2}>
              <img
                src={AmarajaLogo}
                alt="Wipro Logo"
                className={Styles.amarajalogo}
              ></img>
            </div>
            <div
              className={`${Styles.each_experience} ${
                showCompany === "company2"
                  ? `${Styles.selected_experience}`
                  : ``
              }`}
            >
              <h2>Amara Raja Batteries, Tirupati, India</h2>
              <h3>Intern (May 2019 – June 2019)</h3>
              <a href="https://www.amararaja.com/" target="_blank" className={Styles.outlinkATags}>
                <button  className={`${Styles.outlinks} ${Styles[`button_${theme}`]}`}>Visit Amaraja</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.bottom}>
          {showCompany === "company1" ? <Wipro></Wipro> : <></>}
          {showCompany === "company2" ? <AmaraRaja></AmaraRaja> : <></>}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Career;
