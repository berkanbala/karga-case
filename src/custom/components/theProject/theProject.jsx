import React from "react";
import Image from "next/image";
import ProfilePic from "@/custom/images/image5.png";
export default function TheProject() {
  return (
    <div className={styles.container}>
      <Image alt="" src={ProfilePic} fill />
    </div>
  );
}
