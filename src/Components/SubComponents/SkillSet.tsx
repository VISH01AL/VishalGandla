import Navbar from "../Core/Navbar";
import Footer from "../Core/Footer";
import Styles from "./SkillSet.module.css";
import useTheme from "../hooks/theme/useTheme";
import ScrollCard from "./SkillSet/ScrollCard";
import ScrollCardReverse from "./SkillSet/ScrollCardReverse";

import htmlIcon from "../../images/skillset/html5.svg";
import cssIcon from "../../images/skillset/css.svg";
import jsIcon from "../../images/skillset/javascript.svg";
import tsIcon from "../../images/skillset/typescript.svg";
import javaIcon from "../../images/skillset/java.svg";
import pythonIcon from "../../images/skillset/python.svg";
import shellIcon from "../../images/skillset/Shell Script.svg"; // Update to SVG if available
import cIcon from "../../images/skillset/c.svg";
import cppIcon from "../../images/skillset/c++.svg";
import rIcon from "../../images/skillset/R.svg";
import cmakeIcon from "../../images/skillset/cmake.svg";
import perlIcon from "../../images/skillset/Perl.svg";

// Importing Icons
import reactIcon from "../../images/skillset/react.svg";
import angularIcon from "../../images/skillset/angular.svg";
import rxjsIcon from "../../images/skillset/rxjs.svg";
import expressIcon from "../../images/skillset/express.svg";
import djangoIcon from "../../images/skillset/django.svg";
import springBootIcon from "../../images/skillset/spring.svg";
import sequelizeIcon from "../../images/skillset/sequelize.svg";

import gitIcon from "../../images/skillset/git.svg";
import gitlabIcon from "../../images/skillset/gitlab.svg";
import githubIcon from "../../images/skillset/github.svg";
import postmanIcon from "../../images/skillset/postman.svg";
import nginxIcon from "../../images/skillset/nginx.svg";
import chromeIcon from "../../images/skillset/google-chrome.svg";
import puttyIcon from "../../images/skillset/putty.svg";
import vimIcon from "../../images/skillset/vim.svg";
import vscodeIcon from "../../images/skillset/vscode.svg";
import excelIcon from "../../images/skillset/excel.svg";
import wordIcon from "../../images/skillset/word.svg";
import tagManagerIcon from "../../images/skillset/google-tag-manager.svg";
import dataAnalyticsIcon from "../../images/skillset/Google_Analytics.svg";

import mysqlIcon from "../../images/skillset/mysql.svg";
import postgresIcon from "../../images/skillset/postgresql.svg";
import sybaseIcon from "../../images/skillset/Sybase.svg";
import mongodbIcon from "../../images/skillset/mongodb.svg";

import windowsIcon from "../../images/skillset/windows.svg";
import ubuntuIcon from "../../images/skillset/ubuntu.svg";
import redhatIcon from "../../images/skillset/Red_Hat.svg";
import solarisIcon from "../../images/skillset/solaris.svg";

import awsIcon from "../../images/skillset/aws.svg";
import azureIcon from "../../images/skillset/azure.svg";

const SkillSet = () => {
  const { theme } = useTheme();
  const programmingLanguages = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Shell scripting", icon: shellIcon },
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "R", icon: rIcon },
    { name: "CMake", icon: cmakeIcon },
    { name: "Perl", icon: perlIcon }, // Update to SVG if available
  ];
  // Frameworks/Libraries Array
  const frameworksLibraries = [
    { name: "ReactJS", icon: reactIcon },
    { name: "AngularJS", icon: angularIcon },
    { name: "RxJS", icon: rxjsIcon },
    { name: "ExpressJS", icon: expressIcon },
    { name: "Django", icon: djangoIcon },
    { name: "Spring Boot", icon: springBootIcon },
    { name: "Sequelize ORM", icon: sequelizeIcon },
  ];

  // Software/Developer Platforms Array
  const softwarePlatforms = [
    { name: "Git", icon: gitIcon },
    { name: "GitLab", icon: gitlabIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Nginx", icon: nginxIcon },
    { name: "Google Chrome", icon: chromeIcon },
    { name: "Putty", icon: puttyIcon },
    { name: "Vim", icon: vimIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "MS Excel", icon: excelIcon },
    { name: "MS Word", icon: wordIcon },
    { name: "Google Tag Manager", icon: tagManagerIcon },
    { name: "Google Data Analytics", icon: dataAnalyticsIcon },
  ];
  // Database Array
  const databases = [
    { name: "MySQL", icon: mysqlIcon },
    { name: "PostgreSQL", icon: postgresIcon },
    { name: "Sybase SQL Server", icon: sybaseIcon },
    { name: "MongoDB", icon: mongodbIcon },
  ];

  // Operating Systems Array
  const operatingSystems = [
    { name: "Windows 10", icon: windowsIcon },
    { name: "Ubuntu", icon: ubuntuIcon },
    { name: "Red Hat Enterprise Linux", icon: redhatIcon },
    { name: "Solaris", icon: solarisIcon },
  ];

  // Cloud Array
  const cloudPlatforms = [
    { name: "AWS Cloud", icon: awsIcon },
    { name: "Azure Cloud (AZ-900 certified)", icon: azureIcon },
  ];
  return (
    <>
      <Navbar />
      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.pageheader}>Skills and Tools</div>

        <div className={Styles.minicontainer1}>
          <div className={Styles.section}>
            <div className={Styles.header}>Proficient In</div>
            <ScrollCard
              programmingLanguages={programmingLanguages}
              height={"20rem"}
              animationDuration="15s"
            ></ScrollCard>
          </div>
          <div className={Styles.section}>
            <div className={Styles.header}>Frameworks/Libraries</div>
            <ScrollCard
              programmingLanguages={frameworksLibraries}
              height={"20rem"}
              animationDuration="10s"

            ></ScrollCard>
          </div>
          <div className={Styles.section}>
            <div className={Styles.header}>Software/Developer Platforms</div>
            <ScrollCard programmingLanguages={softwarePlatforms}
            height={"20rem"}
            animationDuration="15s"

            ></ScrollCard>
          </div>
        </div>

        <div className={Styles.minicontainer2}>
          <div className={Styles.section}>
            <div className={Styles.header}>Database</div>
            <ScrollCardReverse programmingLanguages={databases}
            height={"8rem"}
            animationDuration="3s"

            ></ScrollCardReverse>

          </div>
          <div className={Styles.section}>
            <div className={Styles.header}>Cloud</div>
            <ScrollCardReverse programmingLanguages={cloudPlatforms}
            height={"8rem"}
            animationDuration="1.5s"
            ></ScrollCardReverse>
          </div>
          <div className={Styles.section}>
            <div className={Styles.header}>Operating Systems</div>
            <ScrollCardReverse programmingLanguages={operatingSystems}
            height={"8rem"}
            animationDuration="3s"
            ></ScrollCardReverse>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillSet;
