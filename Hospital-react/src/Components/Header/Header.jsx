import React, {useState} from 'react';;
import { Link } from "react-scroll";
import styles from'./Header.module.css'

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <span>Hospital</span>
      </div>
      <button className={styles.menu_toggle} onClick={() => toggleMenu()}>
        ☰
      </button>
      <div className={styles.mobile}>
        <span>Hospital</span>
      </div>
      <nav className={`${styles.header_right} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link to="home" spy={true} smooth={true} onClick={()=> toggleMenu()}>Inicio</Link></li>
          <li><Link to="offer" spy={true} smooth={true} onClick={()=> toggleMenu()}>Que ofrecemos</Link></li>
          <li><Link to="about" smooth={true} spy={true} onClick={()=> toggleMenu()}>Acerca de Nosotros</Link></li>
          <li><Link to="services" spy={true} smooth={true} onClick={()=> toggleMenu()}>Servicios</Link></li>
          <li className={styles.contact_button} ><Link to="contact" spy={true} smooth={true} onClick={()=> toggleMenu()}>Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;