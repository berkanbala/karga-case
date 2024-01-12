"use client";
import Image from "next/image";
import styles from "./imageSlider.module.scss";
import classNames from "classnames";
import { slider } from "@/common/shared/slider/slider";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, [5000]);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    <div className={styles.container}>
      <Image
        className={styles.sliderImages}
        alt="karga slider background"
        src={slider[currentIndex].url}
        fill
        quality={100}
        priority
        loading="eager"
      />
      <div className={styles.arrowLeft} onClick={goToPrevious}>
        <Image
          src="/media/icons/arrow-left.svg"
          alt="karga-arrow-left"
          width={32}
          height={32}
        />
      </div>
      <div className={styles.arrowRight} onClick={goToNext}>
        <Image
          src="/media/icons/arrow-right.svg"
          alt="karga-arrow-rihgt"
          width={32}
          height={32}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.slider}>
          {slider.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={classNames(
                styles.dots,
                currentIndex === slideIndex && styles.active
              )}
            >
              {/* ● */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
