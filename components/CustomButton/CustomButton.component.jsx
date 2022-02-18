import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default CustomButton;
