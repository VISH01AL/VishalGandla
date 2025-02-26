import useTheme from "../hooks/theme/useTheme";
import Styles from "./Projects.module.css";
import { useEffect, useState } from "react";



export type eventType = React.MouseEvent<HTMLDivElement, MouseEvent>;
export type functionType = { updateNone: (e: eventType) => void }; // Add to the Projects component


import Project21 from "./Project1/Project21";


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
    
    
    </>
  )
}

export default MachineLearning