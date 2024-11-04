import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project18 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>
          Full-Stack Application Development and Local Deployment on Minikube
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BXaB0uxwLrg?si=mVcKYA9NxRwclNOT"
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
            Developed and deployed a full-stack CRUD application using Spring Boot for the backend, Angular for the frontend, and MySQL for data storage.
          </li>
          <li className={Styles.description}>
            Dockerized the Spring Boot backend, Angular frontend, and MySQL database, ensuring consistent local development and testing environments.
          </li>
          <li className={Styles.description}>
            Set up a local Kubernetes environment using Minikube to deploy the application. Managed the cluster and local resources using Docker Desktop as the container runtime.
          </li>
          <li className={Styles.description}>
            Created Kubernetes Deployment and Service manifests for the Spring Boot backend, Angular frontend, and MySQL, ensuring all components could communicate within the Minikube cluster.
          </li>
          <li className={Styles.description}>
            Exposed the services using MiniKube tunnels, allowing access to the application on localhost via specific ports for frontend, backend, and database connections.
          </li>
          <li className={Styles.description}>
            Configured Kubernetes PersistentVolume and PersistentVolumeClaim for MySQL to persist data even after pod restarts.
          </li>
          <li className={Styles.description}>
            Applied local testing and debugging through port-forwarding and Kubernetes dashboard to monitor pod health, resource usage, and logs in real-time.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
          <li>Spring Boot</li>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Minikube</li>
          <li>Kubernetes</li>
          <li>Docker Desktop</li>
          <li>Kubernetes PersistentVolume</li>
          <li>Kubernetes ConfigMap</li>
        </ul>

        <a
          href="https://github.com/cloud-everything/FullStackApp_On_mini_kube"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to GitHub repository"
        >
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="GitHub Link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project18;
