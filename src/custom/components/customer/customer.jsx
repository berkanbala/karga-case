// import { customerList } from "@/common/shared/customerList/customerList";
import styles from "./customer.module.scss";
import Image from "next/image";
import c1 from "@/common/media/images/c1.png";
import c2 from "@/common/media/images/c2.png";
import c3 from "@/common/media/images/c3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

export default function Customer() {
  return (
    <div className={styles.container}>
      <div className={styles.eclipse} />
      <div className={styles.caption}>Customer feedback</div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
        className={styles.mySwiper}
        spaceBetween={50}
        slidesPerView={3}
        slideNextClass="swiper-slide-next"
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={styles.content}>
          <div className={styles.card}>
            <div className={styles.com}>
              <div className={styles.image}>
                <Image alt="item image" src={c1} />
              </div>
              <div className={styles.tom}>
                <span className={styles.title}>High voltage mayonnaise </span>
                <span className={styles.date}>March 11, 2020 at 23:03 </span>
              </div>
            </div>
            <span className={styles.details}>
              A long time ago I came across this wonderful artist and have never
              been disappointed with his work. He accurately conveys on paper
              everything you want him to depict, makes edits to the work without
              any problems and offers his ideas, which are often quite
              successful. However, I definitely and strongly recommend working
              with this creative person!
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.content}>
          <div className={styles.card}>
            <div className={styles.com}>
              <div className={styles.image}>
                <Image alt="item image" src={c2} />
              </div>
              <div className={styles.tom}>
                <span className={styles.title}>Bohdan Dubina </span>
                <span className={styles.date}>Apr 20, 2020 at 23:07 </span>
              </div>
            </div>
            <span className={styles.details}>
              He is a wonderful artist, a master of his craft, and he completed
              the work on time, in just a couple of days, and at the highest
              level. He implements all ideas exactly. Communicates with clients
              politely. The best!
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.content}>
          <div className={styles.card}>
            <div className={styles.com}>
              <div className={styles.image}>
                <Image alt="item image" src={c3} />
              </div>
              <div className={styles.tom}>
                <span className={styles.title}>Albert Schmel </span>
                <span className={styles.date}>Apr 20, 2020 at 23:07 </span>
              </div>
            </div>
            <span className={styles.details}>
              It's not the first time I've ordered art and I can say one thing:
              this person's work is done with a conscience. Thank you very much
              for the work done and I will continue to order only from you
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.content}>
          <div className={styles.card}>
            <div className={styles.com}>
              <div className={styles.image}>
                <Image alt="item image" src={c1} />
              </div>
              <div className={styles.tom}>
                <span className={styles.title}>High voltage mayonnaise </span>
                <span className={styles.date}>March 11, 2020 at 23:03 </span>
              </div>
            </div>
            <span className={styles.details}>
              A long time ago I came across this wonderful artist and have never
              been disappointed with his work. He accurately conveys on paper
              everything you want him to depict, makes edits to the work without
              any problems and offers his ideas, which are often quite
              successful. However, I definitely and strongly recommend working
              with this creative person!
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
