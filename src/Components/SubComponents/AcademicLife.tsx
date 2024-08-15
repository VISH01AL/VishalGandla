import Navbar from "../Core/Navbar";
import Footer from "../Core/Footer";

import Styles from "./AcademicLife.module.css";
import useTheme from "../hooks/theme/useTheme";
const AcademicLife = () => {
  const { theme } = useTheme();
  return (
    <>
      <Navbar></Navbar>
      <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.institution}>
          <div className={Styles.name}>University of Georgia, Athens, USA</div>
          <div className={Styles.degree}>
            Master of Science in Computer Science
          </div>
          <div className={Styles.duration}>
            Fall 2023 - May 2025 (Expected Graduation)
          </div>
          <div className={Styles.gpa}>GPA: 4.0</div>
        </div>

        <div className={Styles.institution}>
          <div className={Styles.name}>
            Vellore Institute of Technology, Vellore, India
          </div>
          <div className={Styles.degree}>
            Bachelor of Technology in Electronics and Computer Engineering
          </div>
          <div className={Styles.duration}>2016 - 2020</div>
          <div className={Styles.cgpa}>CGPA: 8.42</div>
        </div>

        <div className={Styles.institution}>
          <div className={Styles.name}>NRI Junior College, Tirupati, India</div>
          <div className={Styles.degree}>
            11th and 12th Grade - Mathematics, Physics, Chemistry, Languages
          </div>
          <div className={Styles.duration}>2014 - 2016</div>
          <div className={Styles.marks}>Marks: 976/1000 (97.6%)</div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AcademicLife;
