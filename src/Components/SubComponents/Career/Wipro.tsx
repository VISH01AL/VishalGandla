import Styles from "./Wipro.module.css";
import migration from "../../../images/career/migration.png";
import googleanalytics from "../../../images/career/googleanalytics.jpeg";
import useTheme from "../../hooks/theme/useTheme";

const Wipro = () => {
  const { theme } = useTheme();

  return (
    <div className={Styles.container}>
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
          Led a migration project to move C, Bash, and Perl code from an on-premises 
          Solaris server to Azure Cloud Red Hat Enterprise Linux for UBS (Union Bank of Switzerland), 
          one of the largest investment banks. The project aimed to enhance server performance,
          reliability, and speed for the banking client.
          </li>
          <li>
            Compiled and optimized C code using make files, resolving
            compatibility issues and ensuring smooth operation in the new Linux
            environment.
          </li>
          <li>
            Identified and fixed bugs introduced by the migration, including
            rewriting non-functional code segments to ensure reliability and
            functionality.
          </li>
          <li>
            Managed CA Workload Automation using JIL (Job Information Language)
            to execute UNIX scripts containing the migrated binaries,
            effectively automating job scheduling and monitoring.
          </li>
          <li>
            Trained the team on the project structure, JIL, C code, shell
            scripting, and overall project workflow, which improved team
            proficiency and accelerated project completion.
          </li>
        </ul>
      </div>

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
            Developed a website using ReactJS, HTML, CSS, and JavaScript as the primary
            project at Wipro Technologies.
          </li>
          <li>
          I integrated Google Tag Manager tags into a test mock-up for Huawei's future website to enhance data 
          collection for their information and communications technology services.
        </li>
          <li>
            Utilized Google Tag Manager to create variables, tags, and triggers
            for effective user data gathering.
          </li>
          <li>
            Employed Tags and triggers to capture crucial information, including
            page views, product views, the number of products purchased, and the
            total amount spent in a single session.
          </li>
          <li>
            Transferred acquired data from tags and triggers to Google Analytics
            for comprehensive visual analysis.
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Wipro;
