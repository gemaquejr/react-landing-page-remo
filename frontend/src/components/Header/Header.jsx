import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="Remo" />
      </div>
      <nav className={styles.nav}>
        <a href="#home">
          <span>HOME</span>
        </a>
        <a href="#about">
          <span>ABOUT</span>
        </a>
        <a href="#contact">
          <span>CONTACT</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
