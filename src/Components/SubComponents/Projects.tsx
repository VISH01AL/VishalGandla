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
import Project6 from "./Project/Project6";
import Project7 from "./Project/Project7";
import Project8 from "./Project/Project8";
import Project9 from "./Project/Project9";
import Project10 from "./Project/Project10";
import Project11 from "./Project/Project11";
import Project12 from "./Project/Project12";


export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component
const Projects = () => {
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
    <>
      <Navbar />
      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.header}>Web Development Projects</div>
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
              <li>JavaScript</li>
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
              setSelected("project6");
            }}
          >
            <div className={Styles.title}>
              Portfolio Website Deployment on AWS EC2
            </div>
            <ul className={Styles.technologies}>
              <li>ReactJs</li>
              <li>TypeScript</li>
              <li>Amazon AWS EC2</li>
              <li>Amazon Route 53</li>
              <li>Nginx</li>
            </ul>
            {selected === "project6" ? (
              <Project6 updateNone={updateNone}></Project6>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project7");
            }}
          >
            <div className={Styles.title}>
              Portfolio Website Deployment on AWS CloudFront
            </div>
            <ul className={Styles.technologies}>
              <li>ReactJs</li>
              <li>TypeScript</li>
              <li>Amazon S3</li>
              <li>Amazon CloudFront</li>
              <li>Amazon Route 53</li>
            </ul>

            {selected === "project7" ? (
              <Project7 updateNone={updateNone}></Project7>
            ) : (
              <></>
            )}
          </div>


          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project10");
            }}
          >
            <div className={Styles.title}>Cafe Management System</div>
            <ul className={Styles.technologies}>
              <li>Python</li>
              <li>Django</li>
              <li>PostgreSQL</li>
            </ul>

            {selected === "project10" ? (
              <Project10 updateNone={updateNone}></Project10>
            ) : (
              <></>
            )}
          </div>
        </div>


        <div className={Styles.projectContainer}>
          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project11");
            }}
          >
            <div className={Styles.title}>
              The Nature of Code
            </div>
            <ul className={Styles.technologies}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Canvas</li>
            </ul>

            {selected === "project11" ? (
              <Project11 updateNone={updateNone}></Project11>
            ) : (
              <></>
            )}
          </div>


          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project12");
            }}
          >
            <div className={Styles.title}>Front-End Foundations</div>
            <ul className={Styles.technologies}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

            {selected === "project12" ? (
              <Project12 updateNone={updateNone}></Project12>
            ) : (
              <></>
            )}
          </div>
        </div>














        

        <div className={Styles.header}>Console Applications</div>

        <div className={Styles.projectContainer}>
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
        </div>

        <div className={Styles.projectContainer}>
          

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

          <div
            className={Styles.project}
            onClick={() => {
              setSelected("project8");
            }}
          >
            <div className={Styles.title}>Traceroute Latency Analysis Tool</div>
            <ul className={Styles.technologies}>
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
            className={Styles.project}
            onClick={() => {
              setSelected("project9");
            }}
          >
            <div className={Styles.title}>DoH-capable DNS Forwarder</div>
            <ul className={Styles.technologies}>
              <li>Python</li>
            </ul>

            {selected === "project9" ? (
              <Project9 updateNone={updateNone}></Project9>
            ) : (
              <></>
            )}
          </div>
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
      <Footer />
    </>
  );
};

export default Projects;
