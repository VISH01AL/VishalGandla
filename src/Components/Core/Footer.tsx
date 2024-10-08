import Styles from './Footer.module.css'
import linkedinIcon from '../../images/linkedinicon.png'
import githubIcon from '../../images/githubicon.png'
import geeksforgeeksIcon from '../../images/geeksforgeeksicon.png'
import useTheme from '../hooks/theme/useTheme'
const Footer = () => {
  const {theme}=useTheme()
  return (
    <div className={`${Styles.container} ${Styles[`container_${theme}`]}`} >
      <a target="_blank" href='https://www.linkedin.com/in/vish1al/' className={Styles.mailtip}>   
         <img src={linkedinIcon} alt='linkedin icon' className={Styles.images} />    
         <a href='https://www.linkedin.com/in/vish1al/' target="_blank" className={Styles.mailtiptext}>Linkedin</a>
         <div className={Styles.mailtipText}>linkedin</div>
      </a>
      <a target="_blank" href='https://github.com/VISH01AL' className={Styles.mailtip}>
        <img src={githubIcon} alt='github icon' className={Styles.images}  />
        <a href='https://github.com/VISH01AL' target="_blank" className={Styles.mailtiptext}>github</a>
        <div className={Styles.mailtipText}>Github</div>
      </a>
      <a target="_blank" href='https://www.geeksforgeeks.org/user/vishalg1' className={Styles.mailtip}>
        <img src={geeksforgeeksIcon} alt='github icon' className={Styles.images}  />
        <a href='https://www.geeksforgeeks.org/user/vishalg1' target="_blank" className={Styles.mailtiptext}>geeks for geeks</a>
        <div className={Styles.mailtipText}>GeeksForGeeks</div>
      </a>
      
       
        
    </div>
  )
}

export default Footer