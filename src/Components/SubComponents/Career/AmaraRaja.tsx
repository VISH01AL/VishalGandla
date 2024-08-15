import amarajaproject from '../../../images/career/amarajaproject.jpeg'
import Styles from './Wipro.module.css'
const AmaraRaja = () => {
  return (
    <div className={Styles.minicontainer1}>
      <h2  className={Styles.maintext}>Internship Experience</h2>
      <img src={amarajaproject} alt="text" className={Styles.migrationimage}/>
      <ul className={Styles.list}>
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