import React from "react";
import styles from "./BoxContainer.module.css";
import CustomButton from "../CustomButton/CustomButton.component";

const BoxContainer = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Talkie.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>Heading Two</h2>
          <p class={styles.boxParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Rabbit.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>Heading Two</h2>
          <p class={styles.boxParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Shield.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>Heading Two</h2>
          <p className={styles.boxParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
