import React from "react";
import styles from "@/styles/staff.module.scss";

export default function Staff() {
  return (
    <div className={styles.container}>
      <div className={styles.staff}>
        <h2 className={styles.title}>
          MANCO ART — Ukrainian Game Art Outsourcing Studio
        </h2>
        <p className={styles.text}>
          What does it mean? It's simple: we take over the implementation of
          your project in part or in full - from concepts to the finished art
          product. Our company employs a staff of qualified specialists in the
          field of digital drawing.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.work}>
          <img
            alt=""
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcayvEge6giapQISIplcc3kl94IT4H6g6zmA&usqp=CAU`}
          />
          <p>Mykhailo Kulyk</p>
          <p>Founder. Designer</p>
        </div>
        <div className={styles.work}>
          <img
            alt=""
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGzVsQNbxHPfzVv2Is0w1zhaC7zR3SWR5Fw&usqp=CAU`}
          />
          <p>Nikita Borishchenko</p>
          <p>Chief Ux/Ui designer</p>
        </div>
        <div className={styles.work}>
          <img
            alt=""
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcayvEge6giapQISIplcc3kl94IT4H6g6zmA&usqp=CAU`}
          />
          <p>Valeria Lozitskaya</p>
          <p>Art director of the 3D department</p>
        </div>
        <div className={styles.work}>
          <img
            alt=""
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGzVsQNbxHPfzVv2Is0w1zhaC7zR3SWR5Fw&usqp=CAU`}
          />
          <p>Khrystyna Pechen</p>
          <p>Art director of the 2D department</p>
        </div>
      </div>
    </div>
  );
}
