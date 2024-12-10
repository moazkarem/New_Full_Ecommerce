import Divider from "./../../../Shared/Divider";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <Divider title={"المدونات"} />
      </div>
      <div className="w-[80%] mx-auto parent grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="div1 rounded-md  col-span-1 row-span-1 bg-cardbg">
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
            <div className="text-right mb-6">
              <h4 className="text-darkprim text-[clamp(16px,_2vw,_18px)] font-semibold">
                قراءة المزيد
              </h4>
            </div>
          </div>
        </div>
        <div className="div2 col-span-1 row-span-1 bg-cardbg">
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
            <div className="text-right mb-6">
              <h4 className="text-darkprim text-[clamp(16px,_2vw,_18px)] font-semibold">
                قراءة المزيد
              </h4>
            </div>
          </div>
        </div>
        <div className="div3 col-span-1 row-span-1 bg-cardbg">
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
            <div className="text-right mb-6">
              <h4 className="text-darkprim text-[clamp(16px,_2vw,_18px)] font-semibold">
                قراءة المزيد
              </h4>
            </div>
          </div>
        </div>
        <div className="div4 col-span-1 row-span-1 bg-cardbg">
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
            <div className="text-right mb-6">
              <h4 className="text-darkprim text-[clamp(16px,_2vw,_18px)] font-semibold">
                قراءة المزيد
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
