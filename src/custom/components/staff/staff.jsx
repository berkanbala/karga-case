import styles from "@/styles/staff.module.scss";
import Image from "next/image";
import Man1 from "@/common/media/images/Man1.png";
import Man2 from "@/common/media/images/Man2.png";
import Woman1 from "@/common/media/images/Woman1.png";
import Woman2 from "@/common/media/images/Woman2.png";

export default function Staff() {
  return (
    <div className={styles.container}>
      <div className={styles.eclipse}></div>
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
          <Image alt="" src={Man1} width={200} height={200} />
          <span className={styles.span}>Mykhailo Kulyk</span>
          <span className={styles.span}>Founder. Designer</span>
        </div>
        <div className={styles.work}>
          <Image alt="" src={Man2} width={200} height={200} />
          <span className={styles.span}>Nikita Borishchenko</span>
          <span className={styles.span}>Chief Ux/Ui designer</span>
        </div>
        <div className={styles.work}>
          <Image alt="" src={Woman1} width={200} height={200} />
          <span className={styles.span}>Valeria Lozitskaya</span>
          <span className={styles.span}>Art director of the 3D department</span>
        </div>
        <div className={styles.work}>
          <Image alt="" src={Woman2} width={200} height={200} />
          <span className={styles.span}>Khrystyna Pechen</span>
          <span className={styles.span}>Art director of the 2D department</span>
        </div>
      </div>
    </div>
  );
}
