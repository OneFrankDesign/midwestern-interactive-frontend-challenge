import React from "react";
import styles from "./ContactForm.module.css";
import CustomButton from "../CustomButton/CustomButton.component";

const ContactForm = () => {
  return (
    <div className={styles.formSection}>
      <h2 className={styles.subheading}>Heading Two</h2>
      <form>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="first_name">
              First Name
            </label>
            <input className={styles.input} type="text" id="first_name" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="last_name">
              Last Name
            </label>
            <input className={styles.input} type="text" id="last_name" />
          </div>
        </div>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="title">
              Title
            </label>
            <input className={styles.input} type="text" id="title" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="email">
              email
            </label>
            <input className={styles.input} type="text" id="email" />
          </div>
        </div>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="message">
              Message
            </label>
            <textarea className={styles.textArea} id="message" />
          </div>
        </div>

        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;
