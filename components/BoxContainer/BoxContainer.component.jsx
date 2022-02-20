import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import styles from "./BoxContainer.module.css";
import CustomButton from "../CustomButton/CustomButton.component";

const BoxContainer = () => {
  const [data, setData] = useState();
  const fetchData = useCallback(() => {
    const apiUrl = "https://api.mwi.dev/content/home";
    Axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Talkie.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>{data && data.data[0].title}</h2>
          <p className={styles.boxParagraph}>{data && data.data[0].content}</p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Rabbit.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>{data && data.data[1].title}</h2>
          <p class={styles.boxParagraph}>{data && data.data[1].content}</p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
      <div className={styles.box}>
        <img className={styles.image} src="/images/Shield.png" alt="talkie" />
        <div className={styles.text}>
          <h2 className={styles.boxHeading}>{data && data.data[2].title}</h2>
          <p className={styles.boxParagraph}>{data && data.data[2].content}</p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
