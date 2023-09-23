// "use client";
import { useState } from "react";
import styles from "@/styles/slider.module.css";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function ImageSlider() {
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "aqua",
  };
  const styleDot = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const slider = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    // console.log(slider[currentIndex].url);
    // console.log("prev");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    // console.log("next");
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   // backgroundImage: `url(${slider[currentIndex].url})`,
  //   backgroundImage:
  //     "url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)",
  // };
  return (
    // <div className={styles.sliderStyles}>
    //   <button onClick={goToPrevious} className={styles.back}>
    //     <svg
    //       className={styles.imagegallerysvgback}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="6 0 12 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="1"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <polyline points="15 18 9 12 15 6"></polyline>
    //     </svg>
    //   </button>
    //   <div className={styles.slideImage}>
    //     <Image
    //       alt="img"
    //       width={500}
    //       height={500}
    //       src={slider[currentIndex].url}
    //     />
    //   </div>
    //   <button onClick={goToNext} className={styles.next}>
    //     <svg
    //       className={styles.imagegallerysvgnext}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="6 0 12 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="1"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <polyline points="9 18 15 12 9 6"></polyline>
    //     </svg>
    //   </button>

    //   <div className={styles.dotsContainerStyles}>
    //     {slider.map((slide, slideIndex) => (
    //       <div
    //         style={styleDot}
    //         key={slideIndex}
    //         onClick={() => goToSlide(slideIndex)}
    //       >
    //         ●
    //       </div>
    //     ))}
    //   </div>
    //   {/* <button>
    //     <svg
    //       className="image-gallery-svg"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <polygon points="5 3 19 12 5 21 5 3"></polygon>
    //     </svg>
    //   </button> */}
    // </div>
    <div className={styles.apo}>
      <div
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
        className={styles.apo1}
      ></div>
      {/* Left Arrow */}
      <div className={styles.apo2}>
        <BsChevronCompactLeft onClick={goToPrevious} size={80} />
      </div>
      {/* Right Arrow */}
      <div className={styles.apo3}>
        <BsChevronCompactRight onClick={goToNext} size={80} />
      </div>
      <div className={styles.apo4}>
        {slider.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={styles.apo5}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
