import styles from "./Hero.module.css";

const Hero = () => (
  <div className={styles.main_container}>
    <div className={styles.title_container}>
      <h1 className={styles.title}>Nos casamos</h1>
      <h2 className={styles.subtitle}>Oriana y Marco</h2>
    </div>
  </div>
);

export default Hero;
