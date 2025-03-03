import Footer from "../Core/Footer";
import Navbar from "../Core/Navbar";
import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import {  useState } from "react";

// import WebDevelopment from "./WebDevelopment";
// import MachineLearning from "./MachineLearning";


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

      {/* <WebDevelopment></WebDevelopment>
      <MachineLearning></MachineLearning> */}

      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.selectionContainer}>
          <div
            onClick={() => {
              setSelectedProjectType("webdev");
            }}
          >
            Web development
          </div>
          <div
            onClick={() => {
              setSelectedProjectType("consoleapplications");
            }}
          >
            Console applications
          </div>
          <div
            onClick={() => {
              setSelectedProjectType("machinelearning");
            }}
          >
            Machine Learning
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
