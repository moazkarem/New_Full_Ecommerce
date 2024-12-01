import React from "react";
import Divider from "../../../Shared/Divider";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
const OurDepartments = () => {
  return (
    <div className="container mx-auto ">
      <div className="mb-5">
        <Divider title={"Our Departments"} />
      </div>
      <div class="w-[80%] mx-auto parent grid grid-cols-12 grid-rows-5 gap-x-2 gap-y-2.5">
        <div class="div1 col-start-1 col-end-7 row-start-1 row-end-5">
          <img src={img1} alt="img1" className="w-full" />
        </div>
        <div class="div2 col-start-7 col-end-10 row-start-1 row-end-3">
          <img src={img2} alt="img2" className="w-full" />
        </div>
        <div class="div3 col-start-7 col-end-10 row-start-3 row-end-5">
          <img src={img3} alt="img3" className="w-full" />
        </div>
        <div class="div4 col-start-10 col-end-13 row-start-1 row-end-3">
          <img src={img4} alt="img4" className="w-full" />
        </div>
        <div class="div5 col-start-10 col-end-13 row-start-3 row-end-5">
          <img src={img5} alt="img5" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;
