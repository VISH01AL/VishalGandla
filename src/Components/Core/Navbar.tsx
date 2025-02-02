import mainlogo from '../../images/mylogo.jpeg'
import useTheme from '../hooks/theme/useTheme'
import Styles from './Navbar.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {  useState } from 'react'
const Navbar = () => {
  const navigate=useNavigate();
  const location=useLocation()
  const {theme,setTheme}=useTheme()
  const [showmobilemenu,setShowMobileMenu]=useState(true)
  
  return (
    <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
        <div className={Styles.home} onClick={()=>{navigate("/")}}>
            <img src={mainlogo} alt="Main Logo" className={Styles.mainlogo} width="73px" height="73px" />
            <div className={`${Styles.homeheader} ${location.pathname==="/" ? `${Styles.selectedhome}`: ""}`}>Home</div>
        </div>


        <div className={Styles.mobile}>
            <div className={Styles.hamburger} onClick={()=>{setShowMobileMenu(!showmobilemenu)}}>
              <div className={Styles.hamburgerLine}></div>
              <div className={Styles.hamburgerLine}></div>
              <div className={Styles.hamburgerLine}></div>
              <div className={Styles.hamburgerLine}></div>
            </div>

            <div className={ `${ showmobilemenu ? `${Styles.mobilecontainershow} ${Styles[`mobilecontainershow_${theme}`]}` : `${Styles.mobilecontainernone} ${Styles[`mobilecontainernone_${theme}`]}` } `}>
            <div onClick={()=>{navigate("/career")}}        className={`${Styles.navitems} ${Styles.career}  ${location.pathname==="/career" ? `${Styles.selectednav}`: ""}`}>Career</div>
            <div onClick={()=>{navigate("/projects")}}      className={`${Styles.navitems} ${Styles.projects}  ${location.pathname==="/projects" ? `${Styles.selectednav}`: ""}`}>Projects</div>
            <div onClick={()=>{navigate("/skillset")}}         className={`${Styles.navitems} ${Styles.about}  ${location.pathname==="/skillset" ? `${Styles.selectednav}`: ""}`}>Skillset</div>

              <div onClick={()=>{navigate("/academiclife")}}  className={`${Styles.navitems} ${Styles.academiclife}  ${location.pathname==="/academiclife" ? `${Styles.selectednav}`: ""}`}>Academic Life</div>
                <div onClick={()=>{navigate("/about")}}       className={`${Styles.navitems} ${Styles.contact}  ${location.pathname==="/about" ? `${Styles.selectednav}`: ""}`}>About</div>
                <div className={Styles.theme}>
                    <div onClick={()=>{setTheme("theme1")}} className={`${Styles.theme1} ${theme==="theme1" ? `${Styles.selectedtheme}` : ""} `}></div>
                    <div onClick={()=>{setTheme("theme2")}} className={`${Styles.theme2} ${theme==="theme2" ? `${Styles.selectedtheme}` : ""}`}></div>
                    <div onClick={()=>{setTheme("theme3")}} className={`${Styles.theme3}  ${theme==="theme3" ? `${Styles.selectedtheme}` : ""}`}></div>
                </div>  
            </div>
            
        </div>
        
        <div className={Styles.list}>
            <div onClick={()=>{navigate("/career")}}        className={`${Styles.navitems} ${Styles.career}  ${location.pathname==="/career" ? `${Styles.selectednav}`: ""}`}>Career</div>
            <div onClick={()=>{navigate("/projects")}}      className={`${Styles.navitems} ${Styles.projects}  ${location.pathname==="/projects" ? `${Styles.selectednav}`: ""}`}>Projects</div>
            <div onClick={()=>{navigate("/skillset")}}         className={`${Styles.navitems} ${Styles.about}  ${location.pathname==="/skillset" ? `${Styles.selectednav}`: ""}`}>Skillset</div>

            <div onClick={()=>{navigate("/academiclife")}}  className={`${Styles.navitems} ${Styles.academiclife}  ${location.pathname==="/academiclife" ? `${Styles.selectednav}`: ""}`}>Academic Life</div>
            <div onClick={()=>{navigate("/about")}}       className={`${Styles.navitems} ${Styles.contact}  ${location.pathname==="/about" ? `${Styles.selectednav}`: ""}`}>About</div>
            <div className={Styles.theme}>
                <div onClick={()=>{setTheme("theme1")}} className={`${Styles.theme1} ${theme==="theme1" ? `${Styles.selectedtheme}` : ""} `}></div>
                <div onClick={()=>{setTheme("theme2")}} className={`${Styles.theme2} ${theme==="theme2" ? `${Styles.selectedtheme}` : ""}`}></div>
                <div onClick={()=>{setTheme("theme3")}} className={`${Styles.theme3}  ${theme==="theme3" ? `${Styles.selectedtheme}` : ""}`}></div>
            </div>        
        </div>
        
    </div>
  )
}

export default Navbar