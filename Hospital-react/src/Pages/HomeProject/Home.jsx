import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Card from '../../Components/Card/Card';
import CardServices from '../../Components/Card/CardServices';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.container_home} id="home">
        <div className={styles.container_left}>
          <span className="title">Bienvenido a Hospital XYZ</span>
          <h3 className="subtitle_with_bar">
            Somos un hospital líder en atención médica de alta calidad, comprometido con tu bienestar y el de tu familia.
            No lo dudes más, ven con nosotros.
          </h3>
          <Link to="/" className={styles.contact_button}>Programar Cita</Link>
        </div>
        <div className={styles.container_right}>
          <img src="https://img.freepik.com/foto-gratis/retrato-sonriente-joven-medicos-posicion-juntos-retrato-personal-medico-dentro-moderno-hospital-sonriente-camara_657921-885.jpg?t=st=1739694333~exp=1739697933~hmac=d7919915c53449f1b88fbc435d9d8ab405f14a2dc549ff0b5ab334e63ea8173e&w=996" alt="doctores img" />
        </div>
      </section>

      <section className={styles.offer} id="offer">
        <div className={styles.presentation}>
        <span className="title">¿Qué Ofrecemos?</span>
          <h3>
            En Hospital XYZ, ofrecemos una amplia gama de servicios diseñados para mejorar la atención médica y la experiencia del paciente.
          </h3>
        </div>
        <div className={styles.container_cards}>
          <Card 
            url = "https://cdn-icons-png.flaticon.com/512/8089/8089662.png"
            titulo = "Simplificación de procesos administrativos como facturación, admisión y gestión de citas"
            subtitulo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium "
          />
          <Card 
            url = "https://cdn-icons-png.flaticon.com/512/504/504276.png"
            titulo = "Apoyo dedicado para garantizar operaciones suaves y mejora continua en la calidad de la atención médica."
            subtitulo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium "
          />
          <Card 
            url = "https://cdn-icons-png.flaticon.com/512/564/564276.png"
            titulo = "Atencion personalizada."
            subtitulo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium "
          />
          <Card 
            url = "https://cdn-icons-png.flaticon.com/512/127/127627.png"
            titulo = "Calidad de productos"
            subtitulo= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex nisi quas voluptatem! Praesentium "
          />
        </div>
      </section>

      <section className={styles.about_us} id="about">
        <div className={styles.grid_us}>
          <div className={styles.grid_item}>
            <img src="https://omatlantis.com/wp-content/uploads/2024/07/Personal-del-hospital_-roles-y-funciones-clave.jpg" alt="Image 1" />
          </div>
          <div className={styles.grid_item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-r8D8QRb9jlmKAduRi977VXa-OF3CYaNRg&s" alt="Image 2" />
          </div>
          <div className={styles.grid_item}>
            <img src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" alt="Image 4" />
          </div>
          <div className={styles.grid_item}>
            <img src="https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=" alt="Image 5" />
          </div>
          <div className={styles.grid_item}>
            <img src="https://www.restauracioncolectiva.com/storage/FotoNota/sds-menaje-hospital.jpg_1.webp" alt="Image 6" />
            <img src="https://images.stockcake.com/public/e/5/9/e59ff54c-378f-4297-8a4f-4e43f632aad7_large/patient-in-hospital-stockcake.jpg" alt="Image 7" />
          </div>
        </div>
        <div className={styles.about_info}>
          <div className={styles.about_info_presentation}>
            <span className="title">Acerca de nosotros</span>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolores odio eum necessitatibus ex 
              provident repellendus cum ab reprehenderit esse vel quis totam corrupti asperiores, accusamus excepturi maxime eius reiciendis!
            </h3>
            <span className="subtittle">Nuestra mision</span>
          </div>
          <div className={styles.bar_container}>
            <h3 className="subtitle_with_bar">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam esse soluta praesentium, maiores explicabo in debitis, 
              repellat eum voluptas eos voluptatem nam, ex delectus voluptatum dignissimos nesciunt perspiciatis dolor aliquid!
            </h3>
          </div>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.presentation}>
          <span className="title">Nuestros servicios</span>
          <h3>
            Descubre la amplia gama de servicios médicos que ofrecemos para cuidar de tu salud y bienestar.
          </h3>
        </div>
        <div className={styles.container_cards}>
          <CardServices
            urlMainPhoto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Hnc4ERIT7DQFVA5PEcxfQkqXNXYCAW8uwA&s"}
            altPhoto={"terapias img"}
            urlIconPhoto={"https://cdn-icons-png.flaticon.com/512/8638/8638228.png"}
            nombreServicio={"Terapias"}
            descripcionServicio={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit neque enim atque repellat voluptates, aperiam delectus similique, cum ipsa sunt voluptatem, ipsam amet nisi soluta vitae ea repellendus explicabo."}
          />
          <CardServices
            urlMainPhoto={"https://plus.unsplash.com/premium_photo-1667516609710-d430c1fed703?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            altPhoto={"Cirugia"}
            urlIconPhoto={"https://cdn-icons-png.freepik.com/512/12489/12489158.png"}
            nombreServicio={"Cirugia"}
            descripcionServicio={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit neque enim atque repellat voluptates, aperiam delectus similique"}
          />
          <CardServices
            urlMainPhoto={"https://irp.cdn-website.com/dcf2cd5d/MOBILE/jpg/7345.jpg"}
            altPhoto={"Cardiologia"}
            urlIconPhoto={"https://cdn-icons-png.flaticon.com/512/387/387577.png"}
            nombreServicio={"Cardiologia"}
            descripcionServicio={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit neque enim atque repellat voluptates, aperiam delectus similique"}
          />
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Home;