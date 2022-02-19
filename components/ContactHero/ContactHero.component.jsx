import React from "react";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>
        <span>Heading</span> One
      </h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos
        eiusmod tempor incididunt ut labore et trace dolore magna aliqua
      </p>
      <p className={styles.paragraph}>
        Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum
        varius duis at consectetur lorem.
      </p>
    </div>
  );
};

export default ContactHero;
