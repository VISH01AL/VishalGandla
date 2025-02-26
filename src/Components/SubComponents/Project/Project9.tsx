import Styles from '../AllProject.module.css'
;
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"

const Project9 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>DoH-capable DNS Forwarder</div>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Built a DNS forwarder in Python that supports DNS over HTTPS (DoH) and domain blocking.
          </li>
          <li className={Styles.description}>
            Implemented a mechanism to block specific domains while forwarding allowed queries to standard or DoH DNS resolvers.
          </li>
          <li className={Styles.description}>
            Enhanced the forwarder to handle both standard DNS requests and DoH requests, ensuring secure DNS resolution.
          </li>
          <li className={Styles.description}>
            The forwarder can be easily configured through command-line parameters to specify blocking rules and resolver settings.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}>
          <li>Python</li>
          <li>requests</li>
          <li>dnslib</li>
          <li>argparse</li>
        </ul>
        <a href="https://github.com/Projects-AT-UGA/ComputerNetworks-3" className={Styles.projectLinkATag} target="_blank">
          <button className={Styles.projectLink}>
            GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project9;
