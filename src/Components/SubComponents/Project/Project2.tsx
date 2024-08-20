import useTheme from '../../hooks/theme/useTheme';
import Styles from './AllProject.module.css'
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project2 = ({updateNone}:functionType) => {
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
        <div className={Styles.title}>HTTPS Download Accelerator</div>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I engineered a robust HTTPS download accelerator in C, leveraging
            the "Range" option in HTTP v1.1. I implemented TLS connections using
            the OpenSSL library for secure and efficient data retrieval. 
          </li>
          <li className={Styles.description}>
             I also
            orchestrated multithreading for parallel connections to Download, optimizing
            download speed, and conducted rigorous testing on diverse URLs to
            validate the accurate reassembly of downloaded parts.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>

        <ul className={Styles.technologies}>
              <li>C</li>
              <li>HTTP (Range Option)</li>
              <li>Sockets</li>
              <li>Multithreading</li>
              <li>SSL Sockets</li>
              <li>Manual Testing</li>
            </ul>
        <a href="https://github.com/Projects-AT-UGA/ComputerNetworkProjects-2" className={Styles.projectLinkATag} target="_blank"><button className={Styles.projectLink}>GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img></button></a>

      </div>
    </div>
  );
};

export default Project2;
