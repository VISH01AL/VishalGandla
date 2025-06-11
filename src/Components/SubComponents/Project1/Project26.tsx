import Styles from "../AllProject.module.css";
import useTheme from "../../hooks/theme/useTheme";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project26 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>
          Full-Stack Car Rental System with Multi-Location Support and Cloud Deployment
        </div>
        <iframe width="560" height="315" className={Styles.iframe} src="https://www.youtube.com/embed/msGYCoFcH8g?si=GEnHPOtqydPjCtrW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Built a full-featured car rental system supporting creation and deletion of rental locations and cars by renters.
          </li>
          <li className={Styles.description}>
            Enabled customers to search for the nearest rental locations and select cars based on availability and booking dates.
          </li>
          <li className={Styles.description}>
            Integrated secure order placement and payment processing for a smooth user experience.
          </li>
          <li className={Styles.description}>
            Designed RESTful APIs with Express.js and tested endpoints using Postman for robust backend functionality.
          </li>
          <li className={Styles.description}>
            Managed and queried relational data with PostgreSQL for renters, locations, cars, and bookings.
          </li>
          <li className={Styles.description}>
            Deployed the application on Google Kubernetes Engine (GKE) using containerized services and managed via Google Container Registry.
          </li>
          <li className={Styles.description}>
            Configured custom domains using AWS Route 53 and implemented HTTPS with Amazon-managed certificates.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul
          className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}
        >
          <li>ReactJS</li>
          <li>Springboot</li>
          <li>PostgreSQL</li>
          <li>Postman</li>
          <li>Google Kubernetes service</li>
          <li>Google Container Registry</li>
          <li>Amazon Route 53</li>
          <li>Managed SSL Certificates</li>
          <li>REST APIs</li>
        </ul>

        <a
          href="https://github.com/JavaKotlinRepositories/carRental"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub{" "}
            <img
              src={externalLink}
              alt="GitHub Link"
              className={Styles.projectLinkExternal}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project26;
