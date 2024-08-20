import Styles from "./AllProject.module.css";
import useTheme from '../../hooks/theme/useTheme';
import { functionType } from "../Projects";
import externalLink from "../../../images/external-link.svg"
const Project1 = ({ updateNone }: functionType) => {
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
        <div className={Styles.title}>Movie Booking System</div>
        <ul className={Styles.list}>
        <div className={Styles.projectHighlights}>Project Highlights</div>
          <li className={Styles.description}>
            I developed a movie booking system application using ReactJS,
            ExpressJS, Sequelize ORM, and PostgreSQL.
          </li>
          <li className={Styles.description}>
            I designed and implemented the booking system, including features for
            managing tickets, showing available tickets, and completing orders.
          </li>
          <li className={Styles.description}>
            The user interface for these features was written in ReactJS, and the
            backend APIs were created using ExpressJS, and Sequelize ORM was used
            to connect to the PostgreSQL database.
          </li>
          <li className={Styles.description}>
            I utilized APIs to dynamically retrieve movie data from the backend
            server, including details such as titles, descriptions, showtimes, and
            trailers, enhancing the application's real-time functionality and user
            experience.
          </li>
          <li className={Styles.description}>
            I leveraged React Context for efficient state management,
            enabling seamless data propagation and synchronization across
            components. I also worked with JWT authentication to authenticate
            users using JSON Web Tokens and the bcrypt library to store passwords
            safely.
          </li>


        </ul>
        <div className={Styles.projectHighlights}>Technologies & Libraries</div>
        <ul className={Styles.technologies}>
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>Sequelize ORM</li>
              <li>PostgreSQL</li>
              <li>React-Router-Dom</li>
              <li>JSON Web Tokens</li>
              <li>Bcrypt</li>
              <li>crypto-js</li>
              <li>React Context</li>
              <li>Node Mailer</li>
              <li>Validator</li>
            </ul>
        <a href="https://github.com/Projects-AT-UGA/MOVIE-BOOKING-SYSTEM_SOFTWARE_ENGINEERING" className={Styles.projectLinkATag} target="_blank"><button className={Styles.projectLink}>GitHub <img src={externalLink} alt="link" className={Styles.projectLinkExternal}></img></button></a>
      </div>
    </div>
  );
};

export default Project1;
