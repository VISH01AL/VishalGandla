import useTheme from '../../hooks/theme/useTheme';
import Styles from '../AllProject.module.css';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project14 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Frontend Mentor Challenges - Responsive Web Pages</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/65brONTH8dw?si=x8qqN_KZKM7OXXts" 
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
            I developed several responsive web pages using React.js, tackling challenges from the Frontend Mentor website. These projects allowed me to refine my skills in creating pixel-perfect, responsive layouts.
          </li>
          <li className={Styles.description}>
            The web pages are designed to look great on different screen sizes, ensuring a consistent user experience across desktops, tablets, and mobile devices.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>ReactJs</li>
          <li>CSS Modules</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
        </ul>
        <a
          href="https://github.com/ReactJs-Library/Frontend-Mentor"
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

export default Project14;
