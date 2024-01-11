"use client";
import Services from "@/custom/components/duty/services";
import Staff from "@/custom/components/staff/staff";
import Fast from "@/custom/components/questions/faq";
import Form from "@/custom/components/form/form";
import ImagePageAd from "@/common/media/images/image5.png";
import Image from "next/image";
import styles from "./dashboard.module.scss";
import ImageSlider from "@/custom/components/imageSlider/imageSlider";
import "dotenv/config";

require("dotenv").config();

export default function Dashboard() {
  return (
    <main className={styles.container}>
      <ImageSlider />
      <div className={styles.content}>
        {/* <div className={styles.cookies}>cookies</div> */}
        <Services />
        <Staff />
        {/* <div>feedback-slider</div> */}
        <div className={styles.stylesImageAd}>
          <Image alt="icon" src={ImagePageAd} fill />
        </div>
        <Fast />
        <Form />
      </div>
    </main>
  );
}
