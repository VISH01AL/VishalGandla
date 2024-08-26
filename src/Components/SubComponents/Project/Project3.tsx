import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project3 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>TCP Traceroute Implementation</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PmX3GIhep-k?si=HiwB1BrHYQoFNGFw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I developed a custom TCP traceroute program in Python, utilizing raw
            sockets for packet manipulation.
          </li>
          <li className={Styles.description}>
            Implemented TCP SYN packets for probing each hop's latency, adhering
            to the traceroute output format.
          </li>
          <li className={Styles.description}>
            Executed latency measurements three times for each hop, providing
            accurate results akin to standard traceroute.
          </li>
          <li className={Styles.description}>
            Enhanced program flexibility with command-line options, supporting
            custom maximum hops, TCP destination port, and target specification.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
              <li>Python</li>
              <li>Raw Sockets (L3)</li>
              <li>TCP SYN Packets</li>
            </ul>
        <a href="https://github.com/Projects-AT-UGA/ComputerNetworks-4" className={Styles.projectLinkATag} target="_blank"><button className={Styles.projectLink}>GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img></button></a>

      </div>
    </div>
  );
};

export default Project3;
