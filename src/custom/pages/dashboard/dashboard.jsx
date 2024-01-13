"use client";
import Staff from "@/custom/components/staff/staff";
import Form from "@/custom/components/form/form";
import ImagePageAd from "@/common/media/images/image5.png";
import Image from "next/image";
import styles from "./dashboard.module.scss";
import ImageSlider from "@/custom/components/imageSlider/imageSlider";
import { useState } from "react";
import CookiesUI from "@/custom/components/cookiesUI/cookiesUI";
import SSS from "@/custom/components/sss/sss";
import Section2 from "@/custom/components/Section2/section2";
import Customer from "@/custom/components/customer/customer";

export default function Dashboard() {
  const [showCookie, setShowCookie] = useState(
    window.document.cookie.includes("didAgreePrivacy")
  );

  return (
    <main className={styles.container}>
      <ImageSlider />
      {!showCookie && <CookiesUI setShowCookie={setShowCookie} />}
      <div className={styles.content}>
        <Section2 />
        <Staff />
        <Customer />
        <div className={styles.stylesImageAd}>
          <Image alt="icon" src={ImagePageAd} fill />
        </div>
        <SSS />
        <Form />
      </div>
    </main>
  );
}
