import Styles from "./Wipro.module.css";
import migration from "../../../images/career/migration.png";
import googleanalytics from "../../../images/career/googleanalytics.png";
import useTheme from "../../hooks/theme/useTheme";

const Wipro = () => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>

<div className={Styles.minicontainer2}>
        <h2 className={Styles.maintext}>
        Huawei: Developed Shopping Website and Implemented Data Analytics 
        </h2>
        <img
          src={googleanalytics}
          alt="googleanalytics image"
          className={Styles.googleanalyticsimage}
        ></img>
        <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
          <li>
          Designed an interactive shopping prototype featuring 30 products for Huawei Technologies using ReactJS, HTML, CSS, JavaScript, and Java,
          delivering a seamless and user-friendly experience.
          </li>
          <li>
          Integrated Google Tag Manager into a Huawei website prototype with 50 tags, enabling accurate tracking of critical metrics such as page
          views, product engagement, and session spending.
          </li>
          <li>
          Configured data-tracking variables, tags, and triggers within Google Tag Manager, feeding data into three Google Analytics dashboards to
          provide actionable insights for optimizing the user experience.
          </li>
        </ul>
      </div>
      <div className={`${Styles.minicontainer1} ${Styles[`minicontainer1_${theme}`]}`}>
        <h2 className={Styles.maintext}>
        Union Bank of Switzerland: Migration of Mortgage Trading System to Azure Cloud
        </h2>
        <img
          src={migration}
          alt="migration image"
          className={Styles.migrationimage}
        ></img>
        <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
          <li>
          Directed the migration of 130+ C binaries, 600+ shell scripts, and Java jar files for a GUI Mortgage Trading system from Solaris Unix servers
          to Microsoft Azure Red Hat Enterprise Linux, covering 1,800 jobs in development, QA, and production for UBS, Europe’s 5th largest bank
          </li>
          <li>
          Leveraged the Software Development Life Cycle to refactor code and resolve over 2,000 migration issues, significantly improving system
stability, performance, and reliability, while utilizing version control and ensuring consistent GitLab CI/CD automated deployments
          </li>
          <li>
          Trained three team members on project architecture, JIL, C, and shell scripting, embedding Agile practices, and incorporating unit and
integration testing to ensure timely completion of project milestones.

          </li>

        </ul>
      </div>

      
    </div>
  );
};

export default Wipro;
