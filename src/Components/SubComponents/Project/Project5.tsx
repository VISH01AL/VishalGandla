import useTheme from "../../hooks/theme/useTheme";
import Styles from '../AllProject.module.css'
;
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project5 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.transparentemptyspace}
        onClick={(e) => {
          updateNone(e);
        }}
      ></div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
        <div
          onClick={(e) => {
            updateNone(e);
          }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>Relational Algebra Implementation</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XRCJp0FWOIs?si=tTIkFnyZw1y9QUWi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I implemented Relational Algebra operations in Java, including
            Project, Select, Minus, Union, and Join.
          </li>
          <li className={Styles.description}>
            I implemented custom Linear Hashing and B+ trees classes in Java to
            facilitate efficient indexing of Relational Algebra operations.
          </li>
          <li className={Styles.description}>
            I incorporated these data structures into the Database Management
            System to enable rapid access and manipulation of large datasets.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>Java 21</li>
              <li>Relational Algebra</li>
              <li>Linear Hashing</li>
              <li>B+ Trees</li>
              <li>Database Management System (DBMS)</li>
            </ul>
        <a href="https://github.com/Projects-AT-UGA/Database-Management-project-3" className={Styles.projectLinkATag} target="_blank"><button className={Styles.projectLink}>GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img></button></a>

      </div>
    </div>
  );
};

export default Project5;
