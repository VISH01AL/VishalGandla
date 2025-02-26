import Styles from '../AllProject.module.css'
import useTheme from "../../hooks/theme/useTheme";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project21 = ({ updateNone }: functionType) => {
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
          Recipe Sharing App with Authentication and Cloud Deployment
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GPr2aEZEBfM?si=K75obGZ7Pt6m0ga-"
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
            Developed a full-stack recipe-sharing platform where users can sign
            up, log in, and share their favorite recipes.
          </li>
          <li className={Styles.description}>
            Implemented authentication using JWT for secure user login and
            registration.
          </li>
          <li className={Styles.description}>
            Allowed users to like, create, and delete recipes with real-time
            updates.
          </li>
          <li className={Styles.description}>
            Deployed the backend and frontend on Google Kubernetes Engine (GKE)
            using PostgreSQL as the database.
          </li>
          <li className={Styles.description}>
            Configured backend services with Kubernetes, including stateful
            sets, secrets, and persistent volumes.
          </li>
          <li className={Styles.description}>
            Built and pushed Docker images for both frontend and backend to
            Google Cloud Artifact Registry.
          </li>
          <li className={Styles.description}>
            Set up a managed certificate and ingress controller for secure HTTPS
            access.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>

          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>PostgreSQL</li>
          <li>Google Container Registry</li>
          <li>amazon Route 53</li>
          <li>Google Kubernetes service</li>
          <li>Docker</li>
        </ul>

        <a
          href="https://github.com/nodejs-express-js/recipeWiz"
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
            ></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project21;
