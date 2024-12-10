import React from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
const Partners = () => {
  return (
    <div className="container mx-auto pb-28">
      <div className=" flex gap-5 justify-center items-center w-[80%] mx-auto ">
        <div className="w-1/6">
          <img src={img1} alt="partner" className="w-full " />
        </div>
        <div className="w-1/6">
          <img src={img2} alt="partner" className="w-full " />
        </div>
        <div className="w-1/6">
          <img src={img3} alt="partner" className="w-full " />
        </div>
        <div className="w-1/6">
          <img src={img4} alt="partner" className="w-full " />
        </div>
        <div className="w-1/6">
          <img src={img5} alt="partner" className="w-full " />
        </div>
        <div className="w-1/6">
          <img src={img6} alt="partner" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
