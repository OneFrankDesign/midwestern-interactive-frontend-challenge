import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = (props) => {
  const { routerUrl } = props;
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="/images/Logo.png" />{" "}
      {routerUrl === "/" ? (
        <Link href="/contact">
          <a className={styles.contact}>Contact</a>
        </Link>
      ) : (
        <Link href="/">
          <a className={styles.contact}>Home</a>
        </Link>
      )}
    </div>
  );
};

export default Header;
