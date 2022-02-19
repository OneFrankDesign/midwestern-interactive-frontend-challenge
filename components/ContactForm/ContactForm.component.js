import React, { useState } from "react";
import Axios from "axios";
import styles from "./ContactForm.module.css";
import CustomButton from "../CustomButton/CustomButton.component";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    title: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    const apiUrl = "https://api.mwi.dev/contact";
    e.preventDefault();
    Axios.post(apiUrl, {
      first_name: formData.first_name,
      last_name: formData.last_name,
      title: formData.title,
      email: formData.email,
      message: formData.message,
    }).then((res) => {
      console.log(res);
    });

    setFormData({
      first_name: "",
      last_name: "",
      title: "",
      email: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.subheading}>Heading Two</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="first_name">
              First Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="first_name"
              value={formData.first_name}
              placeholder={"First Name"}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="last_name">
              Last Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="last_name"
              placeholder={"Last Name"}
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="title">
              Title
            </label>
            <input
              className={styles.input}
              type="text"
              id="title"
              value={formData.title}
              placeholder={"Title"}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={formData.email}
              placeholder={"Email"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textArea}
              id="message"
              value={formData.message}
              placeholder={"Message"}
              onChange={handleChange}
            />
          </div>
        </div>
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default ContactForm;
