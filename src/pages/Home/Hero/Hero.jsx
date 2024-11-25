import React from "react";
import heroImage from "./assets/heroleft.png";
import midImage from './assets/mid-img.png';

const Hero = () => {
  return (
    <div className="flex gap-7 justify-center mt-5">
      <div className="left-side">
        <img src={heroImage} alt="left-image-hero" />
      </div>
      <div className="mid-side relative w-full max-w-[1411px]"> 
        <div className="absolute z-20 top-1/2  transform -translate-y-1/2 max-w-[500px] ms-5 font-bold capitalize ">
          <h1 className="text-black text-[32px] mb-5">
            You can choose what suits your taste from our handmade work to enhance the elegance of your home.
          </h1>
          <p className="text-describtion text-[14px] capitalize mb-5">
          You can choose what suits your taste from our handmade work to enhance the elegance of your home.
          You can choose what suits your taste from our handmade work to enhance the elegance of your home.
          </p>
          <button>read more</button>
        </div>
        <img 
          src={midImage} 
          alt="main-image-hero" 
          className="absolute top-0 left-0 right-0 bottom-0 object-cover -z-1" 
        />
      </div>
      <div className="right-side">
        <img src={heroImage} alt="right-image-hero" />
      </div>
    </div>
  );
};

export default Hero;
