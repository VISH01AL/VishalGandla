import Navbar from '../Core/Navbar'
import Footer from '../Core/Footer'
import Styles from './Contact.module.css'
import useTheme from '../hooks/theme/useTheme'
const Contact = () => {
  const { theme } = useTheme(); 
  return (
    <div>
        
        <Navbar></Navbar>
        <div className={`${Styles.container} ${Styles[`container_${theme}`]}`}>
            conatct
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact