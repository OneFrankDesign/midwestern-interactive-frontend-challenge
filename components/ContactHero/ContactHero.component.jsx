import React, { useEffect, useState } from "react";
import Axios from "axios";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const apiUrl = "https://api.mwi.dev/content/contact";
    Axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>
        {data && data.data[0].title}
        <div className={styles.headingUnderline}></div>
      </h1>
      <p className={styles.paragraph}>{data && data.data[0].content}</p>
    </div>
  );
};

export default ContactHero;
