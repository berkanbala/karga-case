import styles from "./section2.module.scss";
import Image from "next/image";
import { section2List } from "@/common/shared/section2/section2";

export default function Section2() {
  return (
    <div className={styles.services}>
      <div className={styles.eclipse}></div>
      <div className={styles.caption}>Our Services</div>
      <div className={styles.content}>
        {section2List.map((item) => (
          <div className={styles.card} key={item.id}>
            <span className={styles.title}>{item.title}</span>
            <div className={styles.images}>
              <Image alt="item image" src={item.image} />
            </div>
            <span className={styles.details}>{item.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
