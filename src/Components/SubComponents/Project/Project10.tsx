import useTheme from "../../hooks/theme/useTheme";
import Styles from "./AllProject.module.css";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project10 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Cafe Management System</div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mAjIGB1FJq4?si=6SpfnajhGkgL4KIM"
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
          Engineered a feature-rich Cafe Management system for supporting clerks to process orders.
          </li>
          <li className={Styles.description}>
            We designed Schema 1 using a UML Class Diagram that included 7
            tables, capturing the essential entities and relationships for the
            Cafe Management System.
          </li>
          <li className={Styles.description}>
            We translated the UML Class Diagram into a relational model,
            ensuring that each entity and relationship was correctly mapped to
            database tables and foreign keys.
          </li>
          <li className={Styles.description}>
            We applied the Boyce-Codd Normal Form (BCNF) Decomposition Algorithm
            to Schema 2, ensuring that our design eliminated redundancy and
            prevented update anomalies.
          </li>
          <li className={Styles.description}>
            We further refined our design by using the Third Normal Form (3NF)
            Synthesis Algorithm on Schema 3, balancing normalization with
            practical performance considerations.
          </li>
          <li className={Styles.description}>
            We compared the three schemas, evaluating them based on redundancy,
            ease of querying, and data integrity. Our final schema in SQL
            included carefully defined constraints to maintain data consistency.
          </li>
          <li className={Styles.description}>
            The software architecture was designed to be modular, using Django
            as the web framework and PostgreSQL as the database, with a clear
            separation of concerns between the web and data layers.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>UML Class Diagram</li>
          <li>3NF Normalization</li>
          <li>BCNF Decomposition</li>
        </ul>
        <a
          href="https://github.com/Projects-AT-UGA/Database-project-4/"
          className={Styles.projectLinkATag}
          target="_blank"
        >
          <button className={Styles.projectLink}>
            GitHub{" "}
            <img
              src={externalLink}
              alt="link"
              className={Styles.projectLinkExternal}
            ></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project10;
