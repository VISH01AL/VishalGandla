import HomeLeft from '../SubComponents/HomeLeft'
import HomeRight from '../SubComponents/HomeRight'
import Styles from './Home.module.css'
import Navbar from './Navbar'
const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className={Styles.container}>
      
      <HomeLeft></HomeLeft>
      <HomeRight></HomeRight>
    </div>
    </>
    
  )
}

export default Home