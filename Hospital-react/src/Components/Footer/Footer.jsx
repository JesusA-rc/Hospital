import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}  id="contact">
      <div className={styles.footer_left}>
        <span className="title">Encuentranos</span>
        <div className={styles.contact}>
          <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/78-512.png" alt="" />
          <span>60 land St. where City, down 777</span>
        </div>
        <div className={styles.contact}>
          <img src="https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-icono-de-auricular-de-telefono-azul.png" alt="" />
          <span>+000 000 000 000</span>
        </div>
        <div className={styles.contact}>
          <img src="https://cdn-icons-png.freepik.com/512/10505/10505896.png" alt="" />
          <span>undefined@undefined.com</span>
        </div>
        <div className={styles.contact}>
          <img src="https://cdn-icons-png.flaticon.com/512/5339/5339181.png" alt="" />
          <span>www.undefined.com</span>
        </div>
      </div>

      <div className={styles.footer_right}>
        <span className="title">Contactanos</span>
        <div className={styles.send_email}>
          <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Correo' />
            <input type="text" placeholder='Asunto' />
            <textarea placeholder="Mensaje"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer