import Styles from "./Wipro.module.css";
import migration from "../../images/career/migration.png";
import googleanalytics from "../../images/career/googleanalytics.jpeg";

const Wipro = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.minicontainer1}>
        <h2 className={Styles.maintext}>
          Migration of Mortgage Trading System for Enhanced Server Performance
        </h2>
        <img
          src={migration}
          alt="migration image"
          className={Styles.migrationimage}
        ></img>
        <ul>
          <li>
            Spearheaded a migration project at Wipro, focusing on relocating C
            and Bash code from a Solaris server to a Red Hat Enterprise Linux
            server.
          </li>
          <li>
            Aimed at improving server performance, reliability, and speed for a
            banking client.
          </li>
          <li>
            Key responsibilities included compiling C code using makefiles and
            resolving compatibility issues arising from the migration between
            Solaris and Linux environments.
          </li>
          <li>
            Fixed numerous bugs caused by the migration and wrote fixes for
            non-working functions.
          </li>
          <li>
            The migrated C code binaries played a crucial role in establishing
            database connections, performing mathematical operations on data,
            and storing the resulting data.
          </li>
        </ul>
      </div>

      <div className={Styles.minicontainer2}>
        <h2 className={Styles.maintext}>
          Integration of Google Tags and Data Analytics in Website Development
        </h2>
        <img
          src={googleanalytics}
          alt="googleanalytics image"
          className={Styles.googleanalyticsimage}
        ></img>
        <ul>
          <li>
            Developed a website using HTML, CSS, and JavaScript as the primary
            project at Wipro Technologies.
          </li>
          <li>
            Integrated Tags from Google Tag Manager into the website for
            enhanced data collection.
          </li>
          <li>
            Utilized Google Tag Manager to create variables, tags, and triggers
            for effective user data gathering.
          </li>
          <li>
            Transferred acquired data from tags and triggers to Google Analytics
            for comprehensive visual analysis.
          </li>
          <li>
            Employed Tags and triggers to capture crucial information, including
            page views, product views, the number of products purchased, and the
            total amount spent in a single session.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wipro;
