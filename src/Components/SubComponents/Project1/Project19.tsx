import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project19 = ({ updateNone }: functionType) => {
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
          ReactJS Application Deployment on Azure Kubernetes Service (AKS)
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_y2l5zEDZSk?si=7swLs1Tk6DKYR6Dp"
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
            Developed a ReactJS application for real-time data processing and user interaction, leveraging functional components and hooks.
          </li>
          <li className={Styles.description}>
            Deployed the application to Azure Kubernetes Service (AKS) with multiple replicas to ensure high availability and scalability.
          </li>
          <li className={Styles.description}>
            Integrated NGINX Ingress Controller for path-based routing, directing traffic to the appropriate application services based on the URL path.
          </li>
          <li className={Styles.description}>
            Utilized Cert Manager Operator to automate SSL/TLS certificate provisioning for securing the application with Let's Encrypt certificates.
          </li>
          <li className={Styles.description}>
            Configured Amazon Route 53 for DNS management, routing traffic to the Azure-based application with reliable domain name resolution.
          </li>
          <li className={Styles.description}>
            Used Azure Container Registry (ACR) to store and manage Docker images for the application, enabling seamless integration with AKS during deployments.
          </li>
          <li className={Styles.description}>
            Created Kubernetes Deployment, Service, and Ingress manifests, ensuring robust load balancing and automatic TLS termination using Cert Manager.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
          <li>ReactJS</li>
          <li>TypeScript</li>
          <li>Azure Kubernetes Service (AKS)</li>
          <li>Azure Container Registry (ACR)</li>
          <li>NGINX Ingress Controller</li>
          <li>Cert Manager Operator</li>
          <li>Amazon Route 53</li>
          <li>Kubernetes</li>
        </ul>

        <a
          href="https://github.com/cloud-everything/Deploying-React-app-using-Kubernetes"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="GitHub Link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project19;
