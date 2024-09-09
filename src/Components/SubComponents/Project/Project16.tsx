import useTheme from '../../hooks/theme/useTheme';
import Styles from './AllProject.module.css';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project16 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div className={Styles.transparentemptyspace} onClick={(e) => { updateNone(e) }}></div>
      <div className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}>
        <div
          onClick={(e) => { updateNone(e); }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>Deploying Full-Stack Todo List Application on AWS Cloud</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KUEOWEUFJeA?si=P_zPJWs-PUGfn7K1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I developed a full-stack Todo List application with a ReactJs frontend and an ExpressJs backend,
            delivering a seamless and interactive user experience.
          </li>
          <li className={Styles.description}>
            I deployed the application on an Amazon EC2 instance, configuring Nginx to route traffic to the
            appropriate frontend or backend based on the requested route. 
          </li>
          <li className={Styles.description}>
            Integrated the backend with a cloud-hosted
            MongoDB database for robust data management and storage. Installed SSL certificates using Let's Encrypt's
            Certbot for secure TLS connections.
          </li>
          <li className={Styles.description}>
            I configured Route 53's Hosted Zone for effective traffic routing to the EC2 instance, optimizing
            performance and accessibility.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
          <li>ReactJs</li>
          <li>ExpressJs</li>
          <li>MongoDB</li>
          <li>AWS EC2</li>
          <li>Nginx</li>
          <li>Let's Encrypt</li>
          <li>Route 53</li>
        </ul>
        <a
          href="https://github.com/nodejs-express-js/TodoList"
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

export default Project16;
