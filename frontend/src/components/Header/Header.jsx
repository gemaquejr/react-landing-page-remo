import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="Remo" />
      </div>
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
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
