import React from 'react'
import mainlogo from '../../../public/mainlogo.jpeg'
import Styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.home}>
            <img src={mainlogo} alt="Main Logo" className={Styles.mainlogo} width="73px" height="73px" />
            <div className={Styles.homeheader}>Vishal Gandla</div>
        </div>
        
        <div className={Styles.list}>
            <div>Academic Life</div>
            <div>Career</div>
            <div>Projects</div>

            
            <div>Contact</div>
            <div>about</div>
        </div>
        
    </div>
  )
}

export default Navbar