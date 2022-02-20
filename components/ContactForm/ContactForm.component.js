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
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const apiUrl = "https://api.mwi.dev/contact";
    e.preventDefault();

    setFormErrors(validateForm(formData));
    setFormSubmitted(true);

    if (Object.keys(formErrors).length === 0 && formSubmitted) {
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

      setFormSubmitted(false);
    }
  };

  const validateForm = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.first_name) {
      errors.first_name = "First Name required";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name required";
    }
    if (!values.title) {
      errors.title = "Title required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.message) {
      errors.message = "Message required";
    }

    if (errors.length > 0) {
      this.setState({
        inputClass: "invalid",
      });
    }
    return errors;
  };

  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <div className={styles.formSection}>
      <h2 className={styles.subheading}>Heading Two</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="first_name">
              First Name
            </label>
            <input
              className={
                formErrors.first_name && formSubmitted
                  ? styles.invalid
                  : styles.input
              }
              type="text"
              id="first_name"
              value={formData.first_name}
              placeholder={"First Name"}
              onChange={handleChange}
            />

            <small
              className={
                formErrors.first_name && formSubmitted
                  ? styles.error
                  : styles.hidden
              }
            >
              Required
            </small>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="last_name">
              Last Name
            </label>
            <input
              className={
                formErrors.first_name && formSubmitted
                  ? styles.invalid
                  : styles.input
              }
              type="text"
              id="last_name"
              placeholder={"Last Name"}
              value={formData.last_name}
              onChange={handleChange}
            />
            <small
              className={
                formErrors.last_name && formSubmitted
                  ? styles.error
                  : styles.hidden
              }
            >
              Required
            </small>
          </div>
        </div>
        <div className={styles.formrow}>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="title">
              Title
            </label>
            <input
              className={
                formErrors.first_name && formSubmitted
                  ? styles.invalid
                  : styles.input
              }
              type="text"
              id="title"
              value={formData.title}
              placeholder={"Title"}
              onChange={handleChange}
            />
            <small
              className={
                formErrors.title && formSubmitted ? styles.error : styles.hidden
              }
            >
              Required
            </small>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.hidden} htmlFor="email">
              Email
            </label>
            <input
              className={
                formErrors.first_name && formSubmitted
                  ? styles.invalid
                  : styles.input
              }
              type="email"
              id="email"
              value={formData.email}
              placeholder={"Email"}
              onChange={handleChange}
            />
            <small
              className={
                formErrors.email && formSubmitted ? styles.error : styles.hidden
              }
            >
              Required
            </small>
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
