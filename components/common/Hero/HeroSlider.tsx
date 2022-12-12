import React, { FC, Children, isValidElement, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import image from "next/image";
import cn from "classnames";

const HeroSlider: FC = ({ children }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
        <div
          ref={sliderRef as React.RefObject<HTMLDivElement>}
          className="keen-slider transition-opacity h-full w-full"
        >
          <div className="keen-slider__slide number-slide1 bg-yellow-500">
            <img
              src="https://res.cloudinary.com/dg7vdpqgu/image/upload/v1670285353/Ste_201215_mn0uac.png"
              alt="logo"
            />
          </div>
          <div className="keen-slider__slide number-slide2 bg-purple-500">
            2
          </div>
          <div className="keen-slider__slide number-slide3 bg-gradient-to-r bg-black">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
    </>
  );
};
export default HeroSlider;
