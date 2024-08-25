import useTheme from "../../hooks/theme/useTheme";
import Styles from "./AllProject.module.css";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project6 = ({ updateNone }: functionType) => {
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
      <div className={Styles.title}>Portfolio Website</div>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/AC9kztyGn4M?si=Q81GlwiUjrc4Ajlx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
        <li className={Styles.description}>
          I created a portfolio website using React.js, featuring a dynamic and interactive user experience.
        </li>
        <li className={Styles.description}>
          The website utilizes the React.js Context library for efficient theme management, ensuring a consistent user experience across the platform.
        </li>
        <li className={Styles.description}>
          The site is cross-platform and was hosted on an EC2 instance, connected with Route 53's Hostend zone to route traffic efficiently.
        </li>
        <li className={Styles.description}>
          The EC2 instance is running Nginx, which serves the static content. I used Let's Encrypt's Certbot to install SSL certificates, enabling secure connections via TLS.
        </li>
      </ul>
      <div className={Styles.projectHighlights}>Technologies & Libraries</div>
      <ul className={Styles.technologies}>
        <li>React.js</li>
        <li>React Context API</li>
        <li>Amazon EC2</li>
        <li>Amazon Route 53</li>
        <li>Nginx</li>
        <li>Certbot For SSL certificate</li>
        <li>Cross-platform Development</li>
      </ul>
      <a
        href="https://github.com/YourGitHubUsername/YourPortfolioRepo"
        className={Styles.projectLinkATag}
        target="_blank"
      >
        <button className={Styles.projectLink}>
          GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img>
        </button>
      </a>
    </div>
  </div>
  
  );
};

export default Project6;