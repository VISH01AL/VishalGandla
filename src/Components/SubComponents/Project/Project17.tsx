import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project17 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Dining App Development and Deployment to Kubernetes</div>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YOioJLySzPk?si=zpX7QxPDhZZ9e2Nv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Deployed a full-stack CRUD application using Spring Boot for the backend, AngularJS for the frontend, and MySQL as the database.
          </li>
          <li className={Styles.description}>
            Dockerized all three components (Spring Boot application, AngularJS frontend, and MySQL database) to ensure consistent environments across development and production.
          </li>
          <li className={Styles.description}>
            Pushed Docker images to Azure Container Registry for centralized storage and easy access during deployment.
          </li>
          <li className={Styles.description}>
            Deployed the application to Azure Kubernetes Service (AKS), organizing each component into separate namespaces to isolate environments and manage resources efficiently.
          </li>
          <li className={Styles.description}>
            Configured DNS services to connect the MySQL StatefulSet to the Spring Boot application, ensuring reliable and scalable database connectivity.
          </li>
          <li className={Styles.description}>
            Utilized NGINX Ingress Operator for path-based routing, directing traffic to either the AngularJS frontend or the Spring Boot backend based on URL paths.
          </li>
          <li className={Styles.description}>
            Implemented Amazon Route 53 for DNS management, enabling efficient routing of user requests to the deployed services.
          </li>
          <li className={Styles.description}>
            Integrated Cert-Manager Operator to automate the issuance and renewal of SSL certificates, ensuring secure HTTPS communication for all services.
          </li>
        </ul>
        
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
          <li>Spring Boot</li>
          <li>AngularJS</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Azure Container Registry</li>
          <li>Azure Kubernetes Service (AKS)</li>
          <li>Kubernetes Namespaces</li>
          <li>NGINX Ingress Controller</li>
          <li>Amazon Route 53</li>
          <li>Cert-Manager</li>
          <li>Kubernetes PersistentVolume</li>
        </ul>
        
        <a 
          href="https://github.com/cloud-everything/FullStackApp_On_Azure_Kubernetes_Service" 
          className={Styles.projectLinkATag} 
          target="_blank" 
          rel="noopener noreferrer">
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="GitHub Link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project17;
