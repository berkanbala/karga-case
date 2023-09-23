"use client";
import Services from "@/custom/components/duty/services";
import Staff from "@/custom/components/staff/staff";
// import TheProject from "@/common/components/theProject/theProject";
// import Questions from "@/common/components/questions/questions";
import Fast from "@/custom/components/questions/faq";
import Form from "@/custom/components/form/form";
import Footer from "@/common/components/ui/footer/footer";
import Header from "@/common/components/ui/header/header";
import ImagePageAd from "@/common/media/images/image5.png";
import Image from "next/image";
import styles from "./dashboard.module.scss";
import ImageSlider from "@/custom/components/imageSlider/imageSlider";

export default function Dashboard() {
  const stylesImageAd = {
    width: "100%",
    height: "550px",
  };

  return (
    <main className={styles.container}>
      <Header />
      <ImageSlider />
      <div className={styles.content}>
        <div className={styles.cookies}>cookies</div>
        <div className={styles.services}>
          <Services />
        </div>
        <div>
          <Staff />
        </div>
        <div>feedback-slider</div>
        {/* <TheProject /> */}
        {/* <div className={styles.imageAd}> */}
        <Image alt="icon" src={ImagePageAd} style={stylesImageAd} />
        {/* </div> */}
        {/* <Questions /> */}
        <Fast />
        <div>
          <Form />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
