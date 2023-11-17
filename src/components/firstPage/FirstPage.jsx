import React, {  useRef, useState } from "react";
import style from "./firstPage.module.css";
import glasses from "../images/glasses.png";
import iconDiv from "../images/iconDiv.svg";
import phone from "../images/phone.png";
import tablet from "../images/tablet.png";
import cSlid2 from "../images/phone-slide1_.jpg";
import cSlid3 from "../images/phone-slide6.jpg";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import RandomColor from "./CustomHock";
const FirstPage = () => {
  const colorDiv = useRef();
  let [valueW, setValueW] = useState(0);

  
  // =============================================================================
  window.addEventListener("scroll", () => {
    setValueW(window.scrollY);
  });
  
  const { boxColor } = RandomColor()

  return (
    <>
      <div className={`container-fluid overflow-hidden `}>
        <div className="row">
          <div className="col-md-12 position-relative  ">
            <div className={`${style.fluid}  ms-1 d-flex  align-items-center`}>
              <motion.div
                className={style.textContent}
                transition={{ duration: 1 }}
                initial={{
                  x: "50vw",
                  zIndex: 99,
                }}
                animate={{
                  x: "0vw",
                }}
              >
                <h1 className={`${style.homeH1}`}>
                  Start Selling
                  <br />
                  <span>
                    <TextAnimation />
                  </span>
                </h1>
                <div></div>
                <p className={style.homeParagraph}>
                  Become the next online success story sell anything, anywhere,
                  <br />
                  to anyone. Control everything from a single platform with
                  <br />
                  centralized inventory, order management, and pricing.
                </p>
                <div className="ms-5">
                  <button className={`btn m-5 ${style.btnDark}`}>
                    Get started for FREE
                  </button>
                </div>
              </motion.div>
              <div className="">
                {/* =========== glasses image ======== */}
                <motion.div
                  transition={{ delay: 4 }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className={style.glassesImg}
                    transition={{ duration: 0.5 }}
                    initial={{
                      width: 230,
                      rotate: 30,
                      zIndex: 1,
                      position: "absolute",
                    }}
                    animate={
                      valueW > 150
                        ? {
                            opacity: 0,
                          }
                        : {
                            right: 20,
                            top: 160,
                            opacity: 1,
                          }
                    }
                  >
                    <img className="w-100" src={glasses} alt="glasses" />
                  </motion.div>
                </motion.div>
                {/* ============================ */}

                {/* ==================phone carousel ================ */}

                <motion.div
                  transition={{ delay: 1 }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className={
                      valueW > 150
                        ? style.secondPhoneImgCarousel
                        : style.phoneImgCarousel
                    }
                    // className={style.phoneImgCarousel}
                    transition={{ duration: 0.5 }}
                    initial={{
                      width: 300,
                      position: "absolute",
                      zIndex: 99,
                    }}
                    animate={
                      valueW > 150
                        ? {
                            rotate: 0,
                            top: 675,
                            right: 322,
                          }
                        : {
                            rotate: 30,
                            right: 444,
                            top: 203,
                          }
                    }
                  >
                    <Carousel fade={"bool"} indicators={false} controls={false}>
                      <Carousel.Item interval={1000}>
                        <img src={cSlid2} className=" rounded-1 w-75" alt="" />
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <img src={cSlid2} className=" rounded-1 w-75" alt="" />
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <img src={cSlid3} className=" rounded-1 w-75" alt="" />
                      </Carousel.Item>
                    </Carousel>
                  </motion.div>
                </motion.div>

                {/* ================  phone image  ========================= */}

                <motion.div
                  transition={{ delay: 1 }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className={
                      valueW > 150 ? style.secondPhoneImg : style.phoneImg
                    }
                    transition={{ duration: 0.5 }}
                    initial={{
                      width: 400,
                      position: "absolute",
                      zIndex: 999,
                    }}
                    animate={
                      valueW > 150
                        ? {
                            rotate: 0,
                            top: 650,
                            right: 250,
                          }
                        : {
                            rotate: 30,
                            right: 400,
                            top: 180,
                          }
                    }
                  >
                    <img className="w-100" src={phone} alt="phone" />
                  </motion.div>
                </motion.div>

                {/* ============ tablet carousel   ===========*/}

                <motion.div
                  // className=" position-relative"
                  transition={{ duration: 1, delay: 2.5 }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className={
                      valueW > 150
                        ? style.secondTabletImgCarousel
                        : style.tabletImgCarousel
                    }
                    transition={{ duration: 0.5 }}
                    initial={{
                      position: "relative",
                      zIndex: 9,
                    }}
                    animate={
                      valueW > 150
                        ? {
                            width: 580,
                            rotate: 0,
                            top: 835,
                            left: 420,
                          }
                        : {
                            rotate: 30,
                            width: 645,
                            top: 625,
                            left: 300,
                          }
                    }
                  >
                    <Carousel fade={"bool"} indicators={false} controls={false}>
                      <Carousel.Item interval={1000}>
                        <img
                          src={cSlid2}
                          height={570}
                          className={`${style.carouselImg} rounded-5  w-100`}
                          alt=""
                        />
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <img
                          src={cSlid2}
                          height={570}
                          className={`${style.carouselImg} rounded-5  w-100`}
                          alt=""
                        />
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <img
                          src={cSlid3}
                          height={570}
                          className={`${style.carouselImg} rounded-5  w-100`}
                          alt=""
                        />
                      </Carousel.Item>
                    </Carousel>
                  </motion.div>
                </motion.div>

                {/* ============= tablet image ============================ */}

                <motion.div
                  // className=" position-relative"
                  transition={{ duration: 1, delay: 2.5 }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div
                    className={
                      valueW > 150 ? style.secondTabletImg : style.tabletImg
                    }
                    transition={{ duration: 0.5 }}
                    initial={{
                      position: "relative",
                      zIndex: 99999,
                    }}
                    animate={
                      valueW > 150
                        ? {
                            rotate: 0,
                            width: 700,
                            top: 280,
                            left: 400,
                          }
                        : {
                            rotate: 30,
                            width: 1000,
                            left: 220,
                            top: 100,
                          }
                    }
                  >
                    <img className="w-100 " src={tablet} alt="phone" />
                  </motion.div>
                </motion.div>
              </div>

              {/* ===============   color  div     ============================= */}

              <motion.div
                
                transition={{ duration: 1, delay: 2 }}
                initial={{
                  position: "absolute",
                  top: -30,
                  right: -1000,
                }}
                animate={{
                  position: "absolute",
                  top: -30,
                  right: 0,
                }}
              >
                <motion.div
                  className={
                    valueW > 150 ? style.secondColorDive : style.colorDive
                  }
                  style={{ background: boxColor }}
                  ref={colorDiv}
                  transition={{ duration: 0.5 }}
                  initial={{
                    width: 900,
                    height: 1500,
                    position: "absolute",
                    top: -30,
                    right: -100,
                    rotate: 30,
                  }}
                  animate={
                    valueW > 150
                      ? {
                          width: 200,
                          height: 1100,
                          position: "absolute",
                          top: 0,
                          right: 0,
                          rotate: 0,
                        }
                      : {
                          width: 900,
                          height: 1500,
                          position: "absolute",
                          top: -30,
                          right: -100,
                          rotate: 30,
                        }
                  }
                ></motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            transition={{ duration: 0.5 }}
            animate={
              valueW > 150
                ? {
                    rotate: 0,
                    x: -60,
                    y: -170,
                  }
                : {
                    rotate: 50,
                    x: -550,
                  }
            }
            // className={`col-md-5 w-50  ${style.secondDiv}`}
            className={
              valueW > 150
                ? `${style.secondSecondDiv}  `
                : `col-md-5 w-50  ${style.secondDiv}`
            }
          >
            <div className={`ms-5 ps-2  ${style.secondDivContent} w-50 `}>
              <h2 className="mb-4">
                Your first sale is only <br /> a few clicks away
              </h2>
              <p>
                The easiest way to sell anything — products, services, digital
                goods, subscriptions — without coding, developers, designers.
                Manage everything in one place — from your desk or on-the-go.
                Just sign up and start building your dream.
              </p>
              <div
                className={`d-flex  w-75 justify-content-center align-items-center ${style.smallIconAndIcon} `}
              >
                <div className={style.smallImgDiv}>
                  <img className="w-100" src={iconDiv} alt="" />
                </div>
                <span className="mx-3 fs-1">|</span>
                <div className={`${style.smallDiv} w-75`}>
                  <small className={style.smallIcon}>
                    2022 TOP PERFORMER. Small Business eCommerce Software
                  </small>
                </div>
              </div>
              <div className={`${style.btnSectionTow}`}>
                <div className={`m-5 ${style.btnDiv}`}>
                  <button className={`btn   fs-5 ${style.btnDark}`}>
                    Get started for FREE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
