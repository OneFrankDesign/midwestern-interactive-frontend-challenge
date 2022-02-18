import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/images/Logo.png" />{" "}
      <Link href="/contact">
        <a className={styles.contact}>Contact</a>
      </Link>
    </div>
  );
};

export default Header;
