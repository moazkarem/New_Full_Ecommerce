import React from "react";
import Button from "../../../Shared/Button";
import heroImage from "./assets/heroleft.png";
import heroRight from "./assets/heroright.png";
import midImage from "./assets/mid-img.png";
import arrowIcon from './assets/arrowIcon.svg'
import styles from './style/styles.module.scss'
const Hero = () => {
  return (
    <div className={`${styles['hero-sec']} mx-auto container`}>
      <div className=" flex gap-7 justify-center pt-10 pb-28 ">
        <div className="left-side relative  max-w-[178px]  hidden md:block">
         <div>
         <img
            src={heroImage}
            alt="left-image-hero"
            className="object-cover h-]"
          />
         </div>
         <img src={arrowIcon} alt='icon arrow' className="absolute object-cover bottom-8 left-1/2 transform -translate-x-1/2"/>
        </div>
        
        <div className="mid-side relative w-[1411px] max-sm:w-[95%] ">
          <div className="hero-text absolute z-20 top-1/2 max-sm:mt-28 transform -translate-y-1/2 max-w-[400px] ms-16 font-bold capitalize text-right max-sm:text-center ">
            <h1 className="text-[#130F0F] text-[clamp(18px,_2vw,_36px)] mb-6 font-bold">
              بإمكانك اختيار ما يناسب ذوقك من شغلنا اليدوي ليزيد من أناقة بيتك
            </h1>
            <p className="text-describtion text-[clamp(14px,_2vw,_18px)] font-light capitalize mb-6 ">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد .
            </p>
            <Button styles="bg-btnbg rounded-full text-[clamp(14px,_2vw,_16px)] w-52 h-[59px]  text-white max-sm:w-36 max-sm:h-[40px] ">
              تعرف على المزيد
            </Button>
          </div>
          <img
            src={midImage}
            alt="main-image-hero"
            className="absolute top-0 left-0 right-0 bottom-0 object-cover -z-1 "
          />
        </div>
        <div className="right-side relative max-w-[178px]   hidden md:block">
         <div>
         <img
            src={heroRight}
            alt="right-image-hero"
            className="object-cover "
          />
         </div>
         <img src={arrowIcon} alt='icon arrow' className="absolute object-cover bottom-8 left-1/2 transform -translate-x-1/2 "/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
