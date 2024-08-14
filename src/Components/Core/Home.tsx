import myphoto from '../../images/myphoto.jpg'

import Styles from './Home.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import useTheme from '../hooks/theme/useTheme'
const Home = () => {
  const { theme } = useTheme();
  console.log(theme)
  return (
    <>
    <Navbar></Navbar>
    <div className={`${`${Styles.container} ${Styles[`container_${theme}`]}`}`}>
          <div className={Styles.minicontainer1}>Hello, I am Vishal</div>
          
          <div className={Styles.minicontainer2}>
              <div className={Styles.microcontainer2}>
                <div className={Styles.maintextcontainer}>
                  <div className={Styles.maintext}>Software Developer | Full-Stack Developer</div>
                  <div className={Styles.maintext}> Cloud Engineer  {/* | Software Architect */}</div> 
                </div>
                
                <div className={Styles.sidetext}>
                I specialize in crafting and optimizing code with a focus on client needs.
                Whether it’s web development, code migration, machine learning, testing,
                or architecting scalable and reliable software systems, my goal is to deliver
                tailored products and solutions that drive client success. Let’s create impactful technology and products 
                together
                </div>
              </div>  
              
              <div className={Styles.microcontainer1}>
                  <img src={myphoto} alt='myphoto' className={Styles.myphoto} width="300px" height="300px"></img>
              </div>
                 
            
          </div>
          
    </div>
<Footer></Footer>
    </>
    
  )
}

export default Home