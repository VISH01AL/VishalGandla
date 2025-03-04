import Styles from "../AllProject.module.css";
import useTheme from "../../hooks/theme/useTheme";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project22 = ({ updateNone }: functionType) => {
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
          Spring Boot Recipe App with JWT Authentication and Cloud Deployment
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DtVtk5tkric?si=vQoVdVQhkISQHVdq"
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
            Developed a full-stack recipe-sharing platform using Spring Boot,
            React, and PostgreSQL.
          </li>
          <li className={Styles.description}>
            Implemented authentication using Spring Security with JWT for secure
            user login and access control.
          </li>
          <li className={Styles.description}>
            Configured AWS S3 for image storage, allowing users to upload and
            retrieve recipe images securely.
          </li>
          <li className={Styles.description}>
            Deployed the backend and frontend on Google Kubernetes Engine (GKE)
            with managed certificates and ingress.
          </li>
          <li className={Styles.description}>
            Built and pushed Docker images for both backend and frontend to
            Google Cloud Artifact Registry.
          </li>
          <li className={Styles.description}>
            Configured backend services with Kubernetes, including stateful
            sets, secrets, and persistent volumes.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul
          className={`${Styles.technologies} ${
            Styles[`technologies_${theme}`]
          }`}
        >
          <li>Spring Boot</li>
          <li>Spring Security</li>
          <li>JWT Authentication</li>
          <li>ReactJS</li>
          <li>PostgreSQL</li>
          <li>Amazon S3</li>
          <li>Docker</li>
          <li>Google Kubernetes Engine</li>
          <li>Google Cloud Artifact Registry</li>
        </ul>

        <a
          href="https://github.com/JavaKotlinRepositories/recipeSharingApp"
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

export default Project22;
