"use client";
import ImageSlider from "src/common/components/slider/slider";
import styles from "@/styles/page.module.css";
import Services from "@/common/components/duty/services";
import Staff from "@/common/components/staff/staff";
import TheProject from "@/common/components/theProject/theProject";
import Questions from "@/common/components/questions/questions";
import Fast from "@/common/components/questions/faq";
import Form from "@/common/components/form/form";
import Footer from "@/common/components/footer/footer";
import Header from "@/common/components/header/header";
import ProfilePic from "@/custom/images/image5.png";
import Image from "next/image";

export default function Page() {
  const stylesImageAd = {
    width: "100%",
    height: "550px",
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <ImageSlider />
      </div>
      <br />
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
        <Image
          alt="icon"
          src={ProfilePic}
          // fill
          style={stylesImageAd}
          // width={1808} height={550}
        />
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
