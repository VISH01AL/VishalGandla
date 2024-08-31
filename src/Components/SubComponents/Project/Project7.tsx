import useTheme from "../../hooks/theme/useTheme";
import Styles from "./AllProject.module.css";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project7 = ({ updateNone }: functionType) => {
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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AC9kztyGn4M?si=Q81GlwiUjrc4Ajlx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
      <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
        <li className={Styles.description}>
        I migrated my React.js portfolio website from an EC2 instance to AWS CloudFront to enhance load times and achieve greater efficiency.
        </li>
        
        <li className={Styles.description}>
          The site is cross-platform and was deployed on AWS CloudFront, enabling global content caching and faster load times.
        </li>
        <li className={Styles.description}>
            Route 53 is used for efficient traffic routing traffic to CloudFront
        </li>
        <li className={Styles.description}>
          The static website is stored in an S3 bucket, which is accessed by CloudFront privately using an S3 bucket policy. .
        </li>
        
      </ul>
      <div className={Styles.projectHighlights}>Technologies & Libraries</div>
      <ul className={Styles.technologies}>
        <li>ReactJs</li>
        <li>React Context API</li>
        <li>Amazon S3</li>
        <li>Amazon CloudFront</li>
        <li>Amazon Route 53</li>
        <li>Cross-platform Development</li>
      </ul>
      <a
        href="https://github.com/VISH01AL/VishalGandla"
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

export default Project7;