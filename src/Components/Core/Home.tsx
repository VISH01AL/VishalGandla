import myphoto from '../../images/myphoto.jpg'

import Styles from './Home.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import useTheme from '../hooks/theme/useTheme'
const Home = () => {
  const { theme } = useTheme();
  return (
    <>
    <Navbar></Navbar>
    <div className={`${`${Styles.container} ${Styles[`container_${theme}`]}`}`}>
          <div className={Styles.minicontainer1}>Hello, I am Vishal</div>
          
          <div className={Styles.minicontainer2}>
              <div className={Styles.microcontainer2}>
                <div className={Styles.maintextcontainer}>
                  <div className={Styles.maintext}>Computer Science Grad Student | Software Developer </div>
                </div>
                
                <div className={Styles.sidetext}>
                I specialize in crafting and optimizing code with a focus on client needs.I am actively seeking opportunities as a Full-Stack Developer, DevOps Engineer,
                 or Cloud Native Engineer to build scalable, secure, and high-performance applications.
                  my goal is to deliver tailored products and solutions that drive Company success.
                 In my free time, I love working on personal projects, constantly exploring 
                  new technologies and challenges just for fun. You can find many of these projects on my GitHub.
                Let’s create impactful technology and products together. I would love to connect regarding any job opportunities.


 
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