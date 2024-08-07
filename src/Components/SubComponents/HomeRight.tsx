import React from 'react'
import myphoto from '../../../public/myphoto.jpg'
import Styles from './HomeRight.module.css'
const HomeRight = () => {
  return (
    <div className={Styles.container}>
        <img src={myphoto} alt='myphoto' className={Styles.myphoto} width="300px" height="300px"></img>
    </div>
  )
}

export default HomeRight