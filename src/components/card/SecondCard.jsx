import React from "react";
import styles from "./Card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

const SecondCard = ({
  img,
  title = "Category Name",
  altText = "Category Image",
}) => {
  return (
    <div className={styles.card}>
      <a href="#!" className={styles.card_link}></a>

      <img className={styles.card_img} src={img} alt={altText} />

      <div className={styles.card_body}>
        <div className={styles.card_text}>
          <div className={styles.card_title}>{title}</div>
          <div className={styles.card_muted}>Explore Now!</div>
        </div>

        <div className={styles.card_icon} />
        <img src={arrowImg} alt="Open" />
      </div>
    </div>
  );
};

export default SecondCard;
