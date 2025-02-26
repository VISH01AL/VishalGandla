import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useEffect, useState } from "react";



export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component


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
      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>

      <div className={Styles.projectContainer}>
          <div
            className={`${Styles.project} ${Styles[`project_${theme}`]}`}
            onClick={() => {
              setSelected("project21");
            }}
          >
            <div className={Styles.title}>Recipe Sharing App</div>
            <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
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
        




      </div>
    </>
  )
}

export default WebDevelopment