import React from 'react'
import styles from './CardServices.module.css'

const CardServices = ({urlMainPhoto,urlIconPhoto,nombreServicio,descripcionServicio,altPhoto}) => {
  return (
    <div className={styles.card_services}>
        <div className={styles.card_services_img}>
            <img src={urlMainPhoto} alt={altPhoto}/>
            <div className={styles.services_name}>
                <img src={urlIconPhoto}  alt={altPhoto} />
                <span>{nombreServicio}</span>
            </div>
        </div>
        <div className={styles.description}>
            <span>
                {descripcionServicio}
            </span>
        </div>
    </div>
  )
}

export default CardServices