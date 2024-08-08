import myphoto from '../../../public/myphoto.jpg'

import Styles from './Home.module.css'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className={Styles.container}>
          <div className={Styles.minicontainer1}>Hello, I am Vishal</div>
          
          <div className={Styles.minicontainer2}>
              <div >
                <div className={Styles.maintext}> a Software Developer.</div>
                <div>
                I specialize in crafting and optimizing code with a focus on user needs.
                Whether it’s web development, machine learning, code migration, or testing, 
                my goal is to deliver tailored solutions that drive your success. 
                Let’s create impactful technology together! 💻🌐 #Code #UserFocused
                </div>
              </div>     
            <div className={Styles.minicontainer3}>
              <img src={myphoto} alt='myphoto' className={Styles.myphoto} width="300px" height="300px"></img>
            </div>
          </div>
          
    </div>
    </>
    
  )
}

export default Home