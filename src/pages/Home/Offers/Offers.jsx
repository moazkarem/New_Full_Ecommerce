import React from "react";
import Divider from "./../../../Shared/Divider";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
const Offers = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <Divider title={"العروض و الخصومات"} />
      </div>
      <div className="w-[80%] mx-auto parent grid grid-cols-12 grid-rows-5 gap-[18px]">
        <div className="div1 col-span-6 row-span-4 col-start-1 row-start-1">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="offer image"
          />
        </div>
        <div className="div2 col-span-6 row-span-2 col-start-7 row-start-1">
          <img
            src={img2}
            className="w-full h-full object-cover"
            alt="offer image"
          />
        </div>
        <div className="div3 col-span-6 row-span-2 col-start-7 row-start-3">
          <img
            src={img3}
            className="w-full h-full object-cover"
            alt="offer image"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
