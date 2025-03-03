import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useEffect, useState } from "react";



export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component

import Project1 from "./Project/Project1";

import Project6 from "./Project/Project6";
import Project7 from "./Project/Project7";

import Project10 from "./Project/Project10";
import Project11 from "./Project/Project11";
import Project12 from "./Project/Project12";
import Project13 from "./Project/Project13";
import Project14 from "./Project/Project14";
import Project15 from "./Project/Project15";
import Project16 from "./Project/Project16";
import Project17 from "./Project/Project17";
import Project18 from "./Project1/Project18";
import Project19 from "./Project1/Project19";
import Project21 from "./Project1/Project21";


const WebDevelopment = () => {
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
      <div className={Styles.header}>Web Applications</div>


      <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project21");
            }}
          >
            <div className={Styles.title}>Recipe Sharing App</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>Google Artifact Registry</li>
              <li>Google Kubernetes service</li>
              <li>amazon Route 53</li>
            </ul>
            {selected === "project21" ? (
              <Project21 updateNone={updateNone}></Project21>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project1");
            }}
          >
            <div className={Styles.title}>Movie Booking System</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>JavaScript</li>
              <li>PostgreSQL</li>
              <li>REST API</li>
            </ul>
            {selected === "project1" ? (
              <Project1 updateNone={updateNone}></Project1>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project10");
            }}
          >
            <div className={Styles.title}>Cafe Management System</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
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
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project17");
            }}
          >
            <div className={Styles.title}>Dining App </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>Spring Boot</li>
              <li>AngularJS</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Azure Kubernetes Service</li>
              <li>Amazon Route 53</li>
            </ul>
            {selected === "project17" ? (
              <Project17 updateNone={updateNone}></Project17>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project16");
            }}
          >
            <div className={Styles.title}>Todo List App </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>AWS EC2</li>
              <li>Amazon Route 53</li>
            </ul>
            {selected === "project16" ? (
              <Project16 updateNone={updateNone}></Project16>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project7");
            }}
          >
            <div className={Styles.title}>Portfolio Website</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>TypeScript</li>
              <li>Amazon S3</li>
              <li>Amazon CloudFront</li>
              <li>Amazon Route 53</li>
              <li>Amazon IAM</li>
            </ul>

            {selected === "project7" ? (
              <Project7 updateNone={updateNone}></Project7>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project19");
            }}
          >
            <div className={Styles.title}>Gratitude Message Generator</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJS</li>
              <li>TypeScript</li>
              <li>Azure Kubernetes Service</li>
              <li>Amazon Route 53</li>
            </ul>

            {selected === "project19" ? (
              <Project19 updateNone={updateNone}></Project19>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project18");
            }}
          >
            <div className={Styles.title}>
              Dining App Development and Local Deployment on Minikube
            </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>Spring Boot</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Minikube</li>
            </ul>

            {selected === "project18" ? (
              <Project18 updateNone={updateNone}></Project18>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project6");
            }}
          >
            <div className={Styles.title}>
              Portfolio Website Deployment on AWS EC2
            </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>TypeScript</li>
              <li>Amazon EC2</li>
              <li>Amazon Route 53</li>
              <li>Nginx</li>
            </ul>
            {selected === "project6" ? (
              <Project6 updateNone={updateNone}></Project6>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project15");
            }}
          >
            <div className={Styles.title}>
              Containerized React App on AWS EC2
            </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>Docker</li>
              <li>Amazon Elastic Container Registry</li>
              <li>Amazon IAM</li>
            </ul>

            {selected === "project15" ? (
              <Project15 updateNone={updateNone}></Project15>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project13");
            }}
          >
            <div className={Styles.title}>Todo List App</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>REST API</li>
            </ul>

            {selected === "project13" ? (
              <Project13 updateNone={updateNone}></Project13>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project11");
            }}
          >
            <div className={Styles.title}>The Nature of Code</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
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
        </div>

        <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project14");
            }}
          >
            <div className={Styles.title}>
              Frontend Mentor Challenges - Responsive Web Pages
            </div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
              <li>ReactJs</li>
              <li>CSS Modules</li>
              <li>Responsive Design</li>
            </ul>

            {selected === "project14" ? (
              <Project14 updateNone={updateNone}></Project14>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project12");
            }}
          >
            <div className={Styles.title}>Front-End Foundations</div>
            <ul
              className={`${Styles.technologies} ${
                Styles[`technologies_${theme}`]
              }`}
            >
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

     
        




    </>
  )
}

export default WebDevelopment