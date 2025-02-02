import amarajaproject from '../../../images/career/amarajaproject.jpeg'
import useTheme from '../../hooks/theme/useTheme';
import Styles from './Wipro.module.css'
const AmaraRaja = () => {
  const { theme } = useTheme();

  return (
    <div className={`${Styles.minicontainer1} ${Styles[`minicontainer1_${theme}`]}`}>
      <h2  className={Styles.maintext}>Internship Experience</h2>
      <img src={amarajaproject} alt="text" className={Styles.migrationimage}/>
      <ul className={`${Styles.list} ${Styles[`list_${theme}`]}`}>
        <li>
          On-site internship with a leading battery company in India where I learned and implemented various aspects of supervisory control and data acquisition systems.
        </li>
        <li>
          Collected data to Microsoft SQL Server regarding the manufactured batteries, focusing on various parameters for each battery.
        </li>
      </ul>
    </div>
  )
}

export default AmaraRaja