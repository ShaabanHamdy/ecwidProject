import React, { useEffect, useState } from "react";
import style from "./sell.module.css";
import sellImage1 from "../images/Slider_Website_1.png";
import sellImage2 from "../images/Slider_Website_2.png";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
const SellEverywhere = () => {
  let [valueW, setValueW] = useState(0);
  window.addEventListener("scroll", () => {
    setValueW(window.scrollY);
  });
  const { scrollYProgress } = useScroll();
  const [hideAnimationTag, setHideAnimationTag] = useState(false);

  // useEffect(() => {
  //   setInterval(()=>{
  //     setHideAnimationTag(true)
  //   },7000)
  //   setInterval(()=>{
  //     setHideAnimationTag(false)
  //   },5000)
  // }, [])
const hide =()=>{
  // opacity = {
    // opacity=0
  // }
}
  return (
    <>
      <div className={` container ${style.selContainer}`}>
        <div className="row  align-items-center">
          <div className={`col-md-6  ${style.imgDiv} `}>
            <div className={` ${style.sellImages} position-relative`}>
              <motion.div
                 onAnimationComplete={()=>hide}
                 
                 transition={{ duration: 0.5 }}
                 initial={{
                   x: 300,
                  }}
                  animate={valueW > 750 ? { x: 0  } : { x: 300 }}
                  >
                {!hideAnimationTag && (
                  <img className="w-100" src={sellImage2} alt="" />
                  )}
              </motion.div>

              {/* ================================================== */}
              <motion.div
                  // onAnimationComplete={()=>setHideAnimationTag(true)}
                transition={{ duration: 1 }}
                initial={{
                  position: "absolute",
                  top: 0,
                  x: -300,
                }}
                animate={
                  valueW > 750
                    ? {
                        x: 0,
                      }
                    : { x: -300 }
                }
              >
                {!hideAnimationTag && (
                  <img className="w-100" src={sellImage1} alt="" />
                )}
              </motion.div>
              {/* =========       image  2 =========================================================== */}
              <motion.div
                //  onAnimationComplete={()=>setHideAnimationTag(false)}

                transition={{ duration: 0.5 }}
                initial={{
                  y: 300,
                }}
                animate={{ y: 0 }}
              >
                {hideAnimationTag && (
                  <img className="w-75" src={slider1} alt="" />
                )}
              </motion.div>

              {/* ================================================== */}
              <motion.div
                className=""
                transition={{ duration: 1 }}
                initial={{
                  // position: "absolute",
                  // top: 50,
                  y: 200,
                }}
                animate={{
                  y: -300,
                }}
              >
                {hideAnimationTag && (
                  <img className="w-50 d-none" src={slider2} alt="" />
                )}
              </motion.div>
            </div>
          </div>

          <div className="col-md-6   ">
            <div className={`${style.selContent}`}>
              <h2 className={style.sellH2}>Sell everywhere</h2>
              <p className="fs-4">
                Bring your products and services to the world. Get started with
                selling <br /> on one channel and expand everywhere online and
                in person.
              </p>
              <ul className="fs-5">
                <li>
                  Build a new online store or connect to any website in seconds
                </li>
                <li>
                  Sell across social media platforms like Facebook, Instagram
                </li>
                <li>
                  {" "}
                  Integrate with online marketplaces like Amazon, eBay, Walmart
                  and Google Shopping{" "}
                </li>
                <li> Connect with Point-of-Sale in your physical store </li>
                <li> Sell on the go with our app for iOS and Android </li>
              </ul>

              <div>
                <p className={`p-3  ${style.sellBtn}`}>
                  Learn more
                  <BsArrowRight className={`mx-2 ${style.BsArrowRight}`} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellEverywhere;
