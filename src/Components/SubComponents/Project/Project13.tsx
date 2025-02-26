import useTheme from '../../hooks/theme/useTheme';
import Styles from '../AllProject.module.css';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project13 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div className={Styles.transparentemptyspace} onClick={(e) => { updateNone(e); }}></div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
        <div onClick={(e) => {
          updateNone(e);
        }} className={Styles.backToProject}>
          Back to Projects
        </div>
        <div className={Styles.title}>Todo List App</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WLX3_Jo9eeM?si=bXbyUcNpOHm_y_FK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={Styles.iframe}
        ></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I developed a Todo List application using Node.js and Express.js, which allows users to sign up, log in, and manage their tasks efficiently.
          </li>
          <li className={Styles.description}>
            The app supports features such as adding tasks, deleting tasks, and viewing tasks. It also implements secure user authentication and data management.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>React Js</li>
          <li>NodeJs</li>
          <li>ExpressJs</li>
          <li>MongoDB</li>
          <li>JWT Authentication</li>
          <li>REST API</li>
          <li>HTML/CSS</li>
        </ul>
        <a
          href="https://github.com/nodejs-express-js/TodoList"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project13;
