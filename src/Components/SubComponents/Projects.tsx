import Footer from "../Core/Footer";
import Navbar from "../Core/Navbar";
import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useEffect, useState } from "react";

import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";

import Project3 from "./Project/Project3";
import Project4 from "./Project/Project4";
import Project5 from "./Project/Project5";
export type eventType=React.MouseEvent<HTMLDivElement, MouseEvent>
export type functionType={updateNone:(e: eventType) => void}// Add to the Projects component
const Projects = () => {
  const { theme } = useTheme();

  const [selected, setSelected] = useState("none");
  const updateNone = (e:eventType) => {
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
    <>
      <Navbar />
      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.header}>My Projects</div>
        <div className={Styles.projectContainer}>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project1");
            }}
          >
            <div className={Styles.title}>Movie Booking System</div>
            <ul className={Styles.technologies}>
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>PostgreSQL</li>
            </ul>
            {selected === "project1" ? (
              <Project1 updateNone={updateNone}></Project1>
            ) : (
              <></>
            )}
          </div>

          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project2");
            }}
          >
            <div className={Styles.title}>HTTPS Download Accelerator</div>
            <ul className={Styles.technologies}>
              <li>C Programming</li>
              
            </ul>
            {selected === "project2" ? (
              <Project2 updateNone={updateNone}></Project2>
            ) : (
              <></>
            )}
          </div>
            </div>
            <div className={Styles.projectContainer}>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project3");
            }}
          >
            <div className={Styles.title}>TCP Traceroute Implementation</div>
            <ul className={Styles.technologies}>
              <li>Python</li>
              
            </ul>

            {selected === "project3" ? (
              <Project3 updateNone={updateNone}></Project3>
            ) : (
              <></>
            )}
          </div>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project5");
            }}
          >
            <div className={Styles.title}>
              Relational Algebra Implementation
            </div>
            <ul className={Styles.technologies}>
              <li>Java 21</li>
            </ul>
            {selected === "project5" ? (
              <Project5 updateNone={updateNone}></Project5>
            ) : (
              <></>
            )}
          </div>
          </div>
          <div className={Styles.projectContainer}>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project4");
            }}
          >
            <div className={Styles.title}>
              Animal Geo-Movement Monitoring System
            </div>
            <ul className={Styles.technologies}>
              <li>C++</li>
             
            </ul>

            {selected === "project4" ? (
              <Project4 updateNone={updateNone}></Project4>
            ) : (
              <></>
            )}
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
