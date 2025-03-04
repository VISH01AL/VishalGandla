import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useEffect, useState } from "react";



export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component


import Project20 from "./Project1/Project20";
import Project23 from "./Project1/Project23";


const MachineLearning = () => {
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
          <div className={Styles.header}>Machine Learning Projects</div>

     <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project20");
            }}
          >
            <div className={Styles.title}>
              CIFAR-10 Image Classification using Convolutional Neural Networks
              (CNN)
            </div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Python</li>
              <li>PyTorch</li>
              <li>Image Classification</li>
              <li>CIFAR-10 Dataset</li>
            </ul>

            {selected === "project20" ? (
              <Project20 updateNone={updateNone} />
            ) : (
              <></>
            )}
          </div>



          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project23");
            }}
          >
            <div className={Styles.title}>
            Oneshot and Iterative Magnitude Pruning of VGG neural network
            </div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Python</li>
              <li>PyTorch</li>
              <li>Neural Networks</li>
              <li>Magnitude Pruning</li>
            </ul>

            {selected === "project23" ? (
              <Project23 updateNone={updateNone} />
            ) : (
              <></>
            )}
          </div>
    
        </div>
    
    </>
  )
}

export default MachineLearning