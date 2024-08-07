import HomeLeft from '../SubComponents/HomeLeft'
import HomeRight from '../SubComponents/HomeRight'
import Styles from './Home.module.css'
const Home = () => {
  return (
    <div className={Styles.container}>
      <HomeLeft></HomeLeft>
      <HomeRight></HomeRight>
    </div>
  )
}

export default Home