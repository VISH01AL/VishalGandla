import useTheme from '../../hooks/theme/useTheme';
import Styles from '../AllProject.module.css';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project15 = ({updateNone}:functionType) => {
  const {theme}=useTheme()

  return (
    <div className={Styles.container}>
      <div className={Styles.transparentemptyspace} onClick={(e)=>{updateNone(e)}}>

      </div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
      <div onClick={(e) => {
          updateNone(e);
        }}
        className={Styles.backToProject}
        >Back to Projects</div>
        <div className={Styles.title}>Containerized React App Deployment to AWS Elastic Compute Cloud</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VUZK2wzfRNA?si=Gk6YKD-K3lK0S7JR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I successfully deployed a containerized React application to the Cloud. The application was first built locally and pushed to Amazon Elastic Container Registry (ECR), where it was securely stored and managed.
          </li>
          <li className={Styles.description}>
            I set up an EC2 instance within a Virtual Private Cloud (VPC) and configured it with an Internet Gateway to allow external access. Using Docker, I deployed the containerized application onto the EC2 instance.
          </li>
          <li className={Styles.description}>
            I utilized NGINX to manage SSL certificates, ensuring secure communication, and configured Amazon Route 53 to route 'A' record traffic to the EC2 instance, enabling seamless access to the application through Internet.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Tools</div>

        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
              <li>ReactJs</li>
              <li>Docker</li>
              <li>Amazon Elastic Container Registry</li>
              <li>Amazon EC2</li>
              <li>VPC & Internet Gateway</li>
              <li>NGINX</li>
              <li>Route 53</li>
              <li>Amazon Identity and Access Management (IAM)</li>
            </ul>
        <a href="https://github.com/cloud-everything/Docker-ReactApp-Deploy-To-Cloud" className={Styles.projectLinkATag} target="_blank"><button className={Styles.projectLink}>GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img></button></a>

      </div>
    </div>
  );
};

export default Project15;
