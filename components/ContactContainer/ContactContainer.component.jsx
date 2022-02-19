import React from "react";
import ContactHero from "../ContactHero/ContactHero.component";
import ContactForm from "../ContactForm/ContactForm.component";
import styles from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.container}>
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
