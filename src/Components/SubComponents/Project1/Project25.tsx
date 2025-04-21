import Styles from "../AllProject.module.css";
import useTheme from "../../hooks/theme/useTheme";
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg";

const Project25 = ({ updateNone }: functionType) => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
      <div
        className={Styles.transparentemptyspace}
        onClick={(e) => {
          updateNone(e);
        }}
      ></div>
      <div
        className={`${Styles.minicontainer} ${Styles[`container_${theme}`]}`}
      >
        <div
          onClick={(e) => {
            updateNone(e);
          }}
          className={Styles.backToProject}
        >
          Back to Projects
        </div>
        <div className={Styles.title}>
          Grafana Dashboard for PCAP Traffic Metrics with MySQL & Python
        </div>
        <iframe width="560" height="315" className={Styles.iframe} src="https://www.youtube.com/embed/oTGkT0pg1Ew?si=EjTOKgW1Pa_lhEtj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <ul className={Styles.list}>
          <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            Processed PCAP files using Python scripts to extract TCP, UDP, ICMP, and DNS traffic metrics.
          </li>
          <li className={Styles.description}>
            Parsed data to calculate totals such as bytes sent/received, distinct DNS queries, and device communication stats.
          </li>
          <li className={Styles.description}>
            Stored processed data in a MySQL database for scalable querying and dashboard integration.
          </li>
          <li className={Styles.description}>
            Designed a Grafana dashboard to visualize:
            <ul className={Styles.description}>
              <li>Total TCP, UDP, and ICMP bytes sent/received</li>
              <li>DNS queries (total and distinct)</li>
              <li>Online devices and last seen time</li>
              <li>Traffic by destination IP</li>
              <li>Geo-based visualizations (focused on India)</li>
            </ul>
          </li>
          <li className={Styles.description}>
            Enabled real-time visibility into network activity using Grafana with auto-refreshing visual panels.
          </li>
        </ul>

        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul
          className={`${Styles.technologies} ${Styles[`technologies_${theme}`]}`}
        >
          <li>Python</li>
          <li>MySQL</li>
          <li>Grafana</li>
          <li>Wireshark / PCAP</li>
          <li>Network Traffic Analysis</li>
          <li>Data Visualization</li>
          <li>TCP/UDP/ICMP/DNS Metrics</li>
        <li>DNS Analytics</li>
        </ul>

        <a
          href="https://github.com/Projects-AT-UGA/Final-Year-Project"
          className={Styles.projectLinkATag}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Styles.projectLink}>
            GitHub{" "}
            <img
              src={externalLink}
              alt="GitHub Link"
              className={Styles.projectLinkExternal}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project25;
