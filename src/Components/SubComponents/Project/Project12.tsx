import useTheme from '../../hooks/theme/useTheme';
import Styles from './AllProject.module.css';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project12 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div className={Styles.transparentemptyspace} onClick={(e) => { updateNone(e); }}></div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
        <div
          onClick={(e) => { updateNone(e); }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>Basic Front-End Foundations</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MX5cM-wHANI?si=KrpqRdXvkszCL5AO"
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
            This project covers the fundamentals of front-end development using HTML, CSS, and JavaScript. It includes building responsive web pages, applying modern styling techniques, and implementing interactive features with JavaScript.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Concepts</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <a
          href="https://github.com/Creating-HTML-CSS-JAVASCRIPT/pure-html-css-javascript"
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

export default Project12;
