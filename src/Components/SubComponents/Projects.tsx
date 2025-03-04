import Footer from "../Core/Footer";
import Navbar from "../Core/Navbar";
import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useState } from "react";

// import WebDevelopment from "./WebDevelopment";
// import MachineLearning from "./MachineLearning";

import webdev from "../../images/project/webdev.jpeg";
import console from "../../images/project/console.jpeg";
import artificialIntelligence from "../../images/project/artificalintelligence.jpeg";
import WebDevelopment from "./WebDevelopment";
import MachineLearning from "./MachineLearning";
import ConsoleApplication from "./ConsoleApplication";

export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component
const Projects = () => {
  const { theme } = useTheme();

  const [selectedProjectType, setSelectedProjectType] = useState("webdev");

  return (
    <>
      <Navbar />



      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.selectionContainer}>
          
        <div
            onClick={() => {
              setSelectedProjectType("consoleapplications");
            }}
            className={`${Styles.selection} ${
              selectedProjectType === "consoleapplications"
                ? `${Styles.selected_projectType}`
                : ""
            }`}
          >
            <img
              src={console}
              alt="console development logo"
              className={Styles.selectionlogo}
            ></img>
            6 Console applications
          </div>
          
          
          <div
            onClick={() => {
              setSelectedProjectType("webdev");
            }}
            className={`${Styles.selection} ${
              selectedProjectType === "webdev"
                ? `${Styles.selected_projectType}`
                : ""
            }`}
          >
            <img
              src={webdev}
              alt="web development logo"
              className={Styles.selectionlogo}
            ></img>
            14 Web development projects
          </div>
          





          <div
            onClick={() => {
              setSelectedProjectType("machinelearning");
            }}
            className={`${Styles.selection} ${
              selectedProjectType === "machinelearning"
                ? `${Styles.selected_projectType}`
                : ""
            }`}
          >
            <img
              src={artificialIntelligence}
              alt="artificialIntelligence development logo"
              className={Styles.selectionlogo}
            ></img>
            2 Machine Learning projects
          </div>
        </div>

        <div>
          {selectedProjectType === "webdev" ? (
            <WebDevelopment></WebDevelopment>
          ) : (
            <></>
          )}
          {selectedProjectType === "machinelearning" ? (
            <MachineLearning></MachineLearning>
          ) : (
            <></>
          )}
          {selectedProjectType === "consoleapplications" ? (
            <ConsoleApplication></ConsoleApplication>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
