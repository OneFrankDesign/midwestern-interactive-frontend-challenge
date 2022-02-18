import { React, useState, useEffect } from "react";
import styles from "./FooterText.module.css";
const BuildUnorderedNameList = () => {
  const [listContent, setListContent] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  let object1 = {
    1: "Matt Johnson",
    2: "Bart Paden",
    3: "Ryan Doss",
    4: "Jared Malcom",
  };
  let object2 = {
    1: "Matt Johnson",
    2: "Bart Paden",
    3: "Jordan Heigle",
    4: "Tyler Viles",
  };
  let array1 = Object.values(object1);
  let array2 = Object.values(object2);

  let nameArray = [array1, array2];

  let allNames = nameArray.flat();
  let uniqueNames = [...new Set(allNames)];
  const [namesList, setNamesList] = useState([]);

  const handleClick = () => {
    setNamesList(uniqueNames);
    setIsClicked(true);

    if (isClicked) {
      alert("This has already been done!");
      removeEventListener("click", handleClick);
    }
  };

  useEffect(() => {
    setListContent(namesList);
  }, [namesList]);

  return (
    <div className={styles.footer}>
      <h1 className={styles.heading}>
        <span>Heading</span> One
      </h1>
      <p className={styles.paragraph}>
        Remove the duplicates in 2 javascript objects (found in readme), add the
        results to an array and output the list of distinct names in an
        unordered list below this paragraph when{" "}
        <a href="#list" className={styles.link} onClick={handleClick}>
          this link
        </a>{" "}
        is clicked. If the operation has been completed already, notify the user
        that this has already been done.
      </p>
      <ul id="list" className={styles.list}>
        {listContent.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
export default BuildUnorderedNameList;
