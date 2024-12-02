import React from "react";
import Divider from "./../../../Shared/Divider";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import cartIcon from "./assets/cartIcon.svg";
const Department = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <Divider title={"الأقسام / التصنيفات"} />
      </div>
      <div class="w-[80%] mx-auto parent grid grid-cols-12 grid-rows-5 gap-x-5 gap-y-0">
        <div class="div1 rounded-md col-start-1 col-end-4 row-start-1 row-end-5 bg-cardbg ">
          <div className="w-full h-[300px]">
            <img
              src={img1}
              alt="product img"
              className="w-full max-h-full object-cover"
            />
          </div>
          <div className="text-card px-4 pb- text-right flex flex-col gap-4">
            <span className="text-darkprim   text-[clamp(16px,_2vw,_18px)] font-bold">
              رس 200{" "}
            </span>
            <h3 className="text-[clamp(16px,_2vw,_20px)] font-bold text-descdark">
              أطباق فخارية يدوية الصنع
            </h3>
            <p className="text-descdark text-[clamp(14px,_2vw,_18px)] font-light">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </p>
            <div className="icons flex justify-center items-center gap-2 mb-6">
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
            </div>
          </div>
        </div>
        <div class="div2 col-start-4 col-end-7 row-start-1 row-end-5 bg-cardbg">
          <div className="w-full h-[300px]">
            <img
              src={img2}
              alt="product img"
              className="w-full max-h-full object-cover"
            />
          </div>
          <div className="text-card px-4 pb- text-right flex flex-col gap-4">
            <span className="text-darkprim   text-[clamp(16px,_2vw,_18px)] font-bold">
              رس 200{" "}
            </span>
            <h3 className="text-[clamp(16px,_2vw,_20px)] font-bold text-descdark">
              أطباق فخارية يدوية الصنع
            </h3>
            <p className="text-descdark text-[clamp(14px,_2vw,_18px)] font-light">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </p>
            <div className="icons flex justify-center items-center gap-2 mb-6">
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
            </div>
          </div>
        </div>
        <div class="div3 col-start-7 col-end-10 row-start-1 row-end-5 bg-cardbg">
          <div className="w-full h-[300px]">
            <img
              src={img3}
              alt="product img"
              className="w-full max-h-full object-cover"
            />
          </div>
          <div className="text-card px-4 pb- text-right flex flex-col gap-4">
            <span className="text-darkprim   text-[clamp(16px,_2vw,_18px)] font-bold">
              رس 200{" "}
            </span>
            <h3 className="text-[clamp(16px,_2vw,_20px)] font-bold text-descdark">
              أطباق فخارية يدوية الصنع
            </h3>
            <p className="text-descdark text-[clamp(14px,_2vw,_18px)] font-light">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </p>
            <div className="icons flex justify-center items-center gap-2 mb-6">
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
            </div>
          </div>
        </div>
        <div class="div4 col-start-10 col-end-13 row-start-1 row-end-5 bg-cardbg">
          <div className="w-full h-[300px]">
            <img
              src={img4}
              alt="product img"
              className="w-full max-h-full object-cover"
            />
          </div>
          <div className="text-card px-4 pb- text-right flex flex-col gap-4">
            <span className="text-darkprim   text-[clamp(16px,_2vw,_18px)] font-bold">
              رس 200{" "}
            </span>
            <h3 className="text-[clamp(16px,_2vw,_20px)] font-bold text-descdark">
              أطباق فخارية يدوية الصنع
            </h3>
            <p className="text-descdark text-[clamp(14px,_2vw,_18px)] font-light">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى.
            </p>
            <div className="icons flex justify-center items-center gap-2 mb-6">
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
              <img src={cartIcon} alt="cart icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
