// import style from './styles/style.scss'
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import snap from "./assets/snap.svg";
import line from "./assets/line.png";
import sendIcon from "./assets/sendIcon.svg";
import visa1 from "./assets/mastercard.svg";
import visa2 from "./assets/pay-pass.svg";
import visa3 from "./assets/paypal.svg";
import visa4 from "./assets/qiwi.svg";
import visa5 from "./assets/discover.svg";
const Footer = () => {
  return (
    <div>
      <div className={`bg-[#FFF6ED] w-full p-12`}>
        <div
          dir="rtl"
          className="container mx-auto border-b border-b-[#9E9E9E] "
        >
          <div className="w-[80%] mx-auto mb-10">
            <div className="w-full d-flex flex-col justify-center items-center gap-3">
              <div className="logo-cont flex justify-center w-full">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <div className="social-icons w-full flex justify-center items-center gap-3">
                  <a href="#">
                    <img src={snap} alt="snapchat" />
                  </a>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
              </div>
              {/* start columns section */}
              <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div>
                  <h3 className="text-[22px] text-[#2b3543] mb-3  ">مساعده</h3>
                  <img src={line} alt="line icon" className="mb-5" />
                  <ul className=" pl-6">
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      تسجيل عميل جديد
                    </li>
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      متابعه سير عملك
                    </li>
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      {" "}
                      الدعم والمساعده ؟{" "}
                    </li>
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      {" "}
                      طرق الدفع{" "}
                    </li>
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      القوانين والسياسات
                    </li>
                    <li className="text-[16px] text-[#2b3543] font-light mb-2">
                      {" "}
                      تقييم الخدمه{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#2b3543] mb-3  ">
                    تواصل معنا فى ...
                  </h3>
                  <img src={line} alt="line icon" className="mb-5" />
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-start  gap-16">
                      <div>
                        <h2 className="text-[#2b3543] text-[16px] font-semibold mb-2">
                          عنوان المقر
                        </h2>
                        <h6 className="text-[16px] text-[#2b3543] font-light mb-2">
                          مركز سلمى التجارى
                        </h6>
                      </div>
                      <div>
                        <h2 className="text-[#2b3543] text-[16px] font-semibold mb-2">
                          الهاتف
                        </h2>
                        <h6 className="text-[16px] text-[#2b3543] font-light mb-2">
                          01095652781
                        </h6>
                        <h6 className="text-[16px] text-[#2b3543] font-light mb-2">
                          01095652781
                        </h6>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[#2b3543] text-[16px] font-semibold mb-2">
                        البريد الالكترونى
                      </h2>
                      <h6 className="text-[16px] text-[#2b3543] font-light mb-2">
                        info@gmail.com
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[22px] text-[#2b3543] mb-3">
                    القائمة البريدية...
                  </h3>
                  <img src={line} alt="line icon" className="mb-5" />
                  <div className="relative mb-10">
                    <input
                      placeholder="اكتب بريدك الالكترونى"
                      className="w-full py-6 border-b border-b-[#9E9E9E] outline-none bg-transparent"
                    />
                    <img
                      src={sendIcon}
                      alt="send icon"
                      className="absolute left-2 bottom-4"
                    />
                  </div>
                  <div className="social-icons w-full flex justify-start items-center gap-3">
                    <a href="#">
                      <img src={visa1} alt="snapchat" className="w-10 h-10" />
                    </a>
                    <a href="#">
                      <img src={visa2} alt="instagram" className="w-10 h-10" />
                    </a>
                    <a href="#">
                      <img src={visa3} alt="twitter" className="w-10 h-10" />
                    </a>
                    <a href="#">
                      <img src={visa4} alt="facebook" className="w-10 h-10" />
                    </a>
                    <a href="#">
                      <img src={visa5} alt="facebook" className="w-10 h-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end-footer w-full flex justify-center pt-8">
          <div className="w-1/2 flex justify-between">
            <span className="text-[#2b3543] text-[16px] font-light">
              Development By{" "}
            </span>
            <span className="text-[#2b3543] text-[16px] font-light">
              {" "}
              All Rights Reserved. | Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
