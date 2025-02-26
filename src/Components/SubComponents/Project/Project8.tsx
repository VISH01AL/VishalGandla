import Styles from '../AllProject.module.css'
;
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project8 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Traceroute Latency Analysis Tool</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/M9NzGsWpoKk?si=pVItaVXsQhL5whSw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={Styles.iframe}></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Developed a command-line tool in Python for automated execution of traceroute and analysis of latency statistics.
          </li>
          <li className={Styles.description}>
            Implemented support for running traceroute multiple times and computing average, median, minimum, and maximum latency per hop.
          </li>
          <li className={Styles.description}>
            Enhanced the tool with options for reading and analyzing pre-generated traceroute outputs from text files for repeatable tests.
          </li>
          <li className={Styles.description}>
            The tool outputs latency statistics in JSON format and generates boxplot graphs to visualize the latency distribution.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>Python</li>
          <li>subprocess</li>
          <li>matplotlib</li>
          <li>argparse</li>
        </ul>
        <a href="https://github.com/Projects-AT-UGA/ComputerNetworkProjects-1" className={Styles.projectLinkATag} target="_blank">
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project8;
