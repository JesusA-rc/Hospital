import React from 'react'
import styles from './Card.module.css'

const Card = ({url,titulo,subtitulo}) => {
  return (
    <div className={styles.card}>
        <img src={url} alt="" />
        <span className={styles.card_title}>{titulo}</span>
        <span className="subtitle_with_bar">{subtitulo}</span>
    </div>
  )
}

export default Card