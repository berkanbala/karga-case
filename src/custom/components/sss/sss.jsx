import styles from "./sss.module.scss";
import classNames from "classnames";
import { sss } from "@/common/shared/sss/sss";
import { useState } from "react";

export default function SSS() {
  const [isActive, setIsActive] = useState(-1);

  const handleActive = (id) => {
    if (isActive == id) {
      setIsActive(-1);
    } else {
      setIsActive(id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.eclipse}></div>
      <div className={styles.caption}>FAQ</div>
      <div className={styles.content}>
        {sss.map((item, i) => (
          <div
            className={styles.card}
            key={i}
            onClick={() => handleActive(item.id)}
          >
            <div className={styles.top}>
              <div>{item.title} </div>
              <span>{isActive === item.id ? "-" : "+"} </span>
            </div>
            <div
              className={classNames(
                styles.bottom,
                isActive === item.id && styles.active
              )}
            >
              {item.text}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
