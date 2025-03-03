import { useEffect, useState } from "react";
import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";


import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";
import Project4 from "./Project/Project4";
import Project5 from "./Project/Project5";
import Project8 from "./Project/Project8";
import Project9 from "./Project/Project9";

export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component

const ConsoleApplication = () => {
    const { theme } = useTheme();

    const [selected, setSelected] = useState("none");
    const updateNone = (e: eventType) => {
        e.stopPropagation();
        setSelected("none");
      };
      useEffect(() => {
        if (selected !== "none") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [selected]);
  return (
    <div>
        
        <div className={Styles.header}>Console Applications</div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project5");
            }}
          >
            <div className={Styles.title}>
              Relational Algebra Implementation
            </div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Java 21</li>
            </ul>
            {selected === "project5" ? (
              <Project5 updateNone={updateNone}></Project5>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project3");
            }}
          >
            <div className={Styles.title}>TCP Traceroute Implementation</div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Python</li>
            </ul>

            {selected === "project3" ? (
              <Project3 updateNone={updateNone}></Project3>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project2");
            }}
          >
            <div className={Styles.title}>HTTPS Download Accelerator</div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>C Programming</li>
            </ul>
            {selected === "project2" ? (
              <Project2 updateNone={updateNone}></Project2>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project8");
            }}
          >
            <div className={Styles.title}>Traceroute Latency Analysis Tool</div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Python</li>
            </ul>

            {selected === "project8" ? (
              <Project8 updateNone={updateNone}></Project8>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project9");
            }}
          >
            <div className={Styles.title}>DoH-capable DNS Forwarder</div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Python</li>
            </ul>

            {selected === "project9" ? (
              <Project9 updateNone={updateNone}></Project9>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project4");
            }}
          >
            <div className={Styles.title}>
              Animal Geo-Movement Monitoring System
            </div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>C++</li>
              <li>IoT</li>
            </ul>

            {selected === "project4" ? (
              <Project4 updateNone={updateNone}></Project4>
            ) : (
              <></>
            )}
          </div>
        </div>
    </div>
  )
}

export default ConsoleApplication