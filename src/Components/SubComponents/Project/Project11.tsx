import useTheme from "../../hooks/theme/useTheme";
import Styles from "./AllProject.module.css";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project11 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.transparentemptyspace}
        onClick={(e) => {
          updateNone(e);
        }}
      ></div>
      <div
        className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}
      >
        <div
          onClick={(e) => {
            updateNone(e);
          }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>Nature of Code Series Implementation</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/R0aWd1opyHs?si=OzOKF3SriMjwn3Vw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I implemented various concepts from the "Nature of Code" series by
            Daniel Shiffman using JavaScript Canvas.
          </li>
          <li className={Styles.description}>
            This project explores concepts such as steering forces,
            gravitational forces, drag forces, vectors, cellular automata, and
            fractals, showcasing the power and versatility of the Canvas API for
            creating complex visual simulations.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Concepts</div>
        <ul className={Styles.technologies}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JavaScript Canvas</li>
          <li>Steering Forces</li>
          <li>Gravitational Forces</li>
          <li>Drag Forces</li>
          <li>Vectors</li>
          <li>Cellular Automata</li>
        </ul>
        <a
          href="https://github.com/Canvas-JavaScript/the-nature-of-code"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub{" "}
            <img
              src={externalLink}
              alt="link"
              className={Styles.projectLinkExternal}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project11;
