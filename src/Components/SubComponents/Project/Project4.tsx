import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";

const Project4 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Animal Geo-Movement Monitoring System</div>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I designed a movement tracking device using wireless technology for
            tracking animal movement in C++.
          </li>
          <li className={Styles.description}>
            Stored the data in an IoT cloud and utilized Google Geo-location API
            to track latitude and longitude coordinates.
          </li>
          <li className={Styles.description}>
            Calculated the distance travelled on an ATmega328 microcontroller
            connected to a Wi-Fi module.
          </li>
        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
              <li>C++</li>
              <li>Wireless Technology</li>
              <li>IoT Cloud</li>
              <li>Google Geo-location API</li>
              <li>ATmega328 Microcontroller</li>
              <li>Wi-Fi Module</li>
            </ul>

      </div>
    </div>
  );
};

export default Project4;
