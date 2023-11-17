import style from "./footer.module.css";
import { Link } from "react-router-dom";
import im from "../images/black-app-store.svg";
import im2 from "../images/black-google.svg";
import iconImage from "../images/footer.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  let [width, setWidth] = useState(0);

  useEffect(() => {
    reload()
  }, [])
  
  let [open, setOpen] = useState(true);
  let [openBUSINESS, setOpenBUSINESS] = useState(true);
  let [openTECHNOLOGY, setOpenTECHNOLOGY] = useState(true);
  let [openINDIVIDUALS, setOpenINDIVIDUALS] = useState(true);
  
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  
  const reload = ()=>{
    setWidth(window.innerWidth);
  }
  return (
    <>
      <div
        className={`container-fluid p-5 bg-black  min-vh-100 ${style.Container}`}
      >
        <div className={`row  p-5 ${style.row}  `}>
          <div className={`${style.COL}  col-md-2   p-4`}>
            <div className="mb-5">
              <Link to={"/"} className="navbar-brand ">
                <div className="  d-flex  align-items-center">
                  <div className={` w-25 ${style.divImgIcon}`}>
                    <img
                      className={`w-75 ms-1 ${style.ImgIcon}`}
                      src={iconImage}
                      alt="CART"
                    />
                  </div>
                  <div className="w-25">
                    <h2 className={`${style.Ecwid}`}> Ecwid</h2>
                    <small className={style.byLighspeed}>by Lighspeed</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ========================================================================  */}
          <div className={`${style.COL} col-md-2  p-4`}>
            {/* ================= */}
            <div
              onClick={() => setOpen(!open)}
              className="d-flex justify-content-between"
            >
              <p> SELL ONLINE </p>
              <i
                className={
                  width < 989
                    ? open
                      ? `fas fa-arrow-right ${style.arrow}`
                      : `fas fa-arrow-down ${style.arrow}`
                    : style.show
                }
              ></i>
            </div>

            <ul
              className={
                width < 989
                  ? !open
                    ? style.active
                    : style.inactive
                  : style.ulList
              }
            >
              <ul className="list-unstyled">
                <li>Sell Everywhere</li>
                <li>Sell on Website </li>
                <li> Sell on Social Media </li>
                <li>Sell on Instagram</li>
                <li>Sell on TikTok</li>
                <li>Sell on Facebook</li>
                <li>Sell on Google</li>
                <li>Sell on Marketplaces</li>
                <li>Sell on WhatsApp</li>
                <li>Sell on Pinterest</li>
                <li>Sell on Snapchat</li>
                <li>Sell on YouTube</li>
                <li>Sell on Mobile ShopApp</li>
              </ul>
            </ul>
          </div>

          {/* ==============================================================================  */}
          <div className={`${style.COL} col-md-2  p-4`}>
            <div
              onClick={() => setOpenBUSINESS(!openBUSINESS)}
              className="d-flex justify-content-between"
            >
              <p>BUSINESS SOLUTIONS </p>
              <i
                className={
                  width < 989
                    ? openBUSINESS
                      ? `fas fa-arrow-right ${style.arrow}`
                      : `fas fa-arrow-down ${style.arrow}`
                    : style.show
                }
              ></i>
            </div>

            <ul
              className={
                width < 989
                  ? !openBUSINESS
                    ? style.active
                    : style.inactive
                  : style.ulList
              }
            >
              <ul className=" list-unstyled">
                <li>Entrepreneurs</li>
                <li>Dropshipping</li>
                <li>Wholesale</li>
                <li>Local Business</li>
                <li>Retail</li>
                <li>Fashion</li>
                <li>Nonprofits</li>
                <li>Restaurants</li>
                <li>B2B</li>
                <li>B2C</li>
                <li>Health and beauty</li>
                <li>Cross-border commerce</li>
              </ul>
            </ul>
          </div>
          {/* =========================================================== */}
          <div className={`${style.COL} col-md-2  p-4`}>
            <div
              onClick={() => setOpenTECHNOLOGY(!openTECHNOLOGY)}
              className="d-flex justify-content-between"
            >
              <p>TECHNOLOGY SOLUTIONS </p>
              <i
                className={
                  width < 989
                    ? openTECHNOLOGY
                      ? `fas fa-arrow-right ${style.arrow}`
                      : `fas fa-arrow-down ${style.arrow}`
                    : style.show
                }
              ></i>
            </div>

            <ul
              className={
                width < 989
                  ? !openTECHNOLOGY
                    ? style.active
                    : style.inactive
                  : style.ulList
              }
            >
              <ul className=" list-unstyled">
                <li>CMS</li>
                <li>WordPress</li>
                <li>Drupal</li>
                <li>Joomla</li>
                <li>Wix</li>
                <li>Squarespace</li>
                <li>Weebly</li>
                <li>Blogger</li>
                <li>Expression engine</li>
                <li>Contao</li>
                <li>Jimdo</li>
                <li>Tilda</li>
                <li>Static websites</li>
              </ul>
            </ul>
          </div>
          {/* ============================================================================== */}
          <div className={`${style.COL} col-md-2  p-4`}>
            <div
              onClick={() => setOpenINDIVIDUALS(!openINDIVIDUALS)}
              className="d-flex justify-content-between"
            >
              <p> FOR INDIVIDUALS </p>
              <i
                className={
                  width < 989
                    ? openINDIVIDUALS
                      ? `fas fa-arrow-right ${style.arrow}`
                      : `fas fa-arrow-down ${style.arrow}`
                    : style.show
                }
              ></i>
            </div>

            <ul
              className={
                width < 989
                  ? !openINDIVIDUALS
                    ? style.active
                    : style.inactive
                  : style.ulList
              }
            >
              <ul className=" list-unstyled">
                <li>Artists</li>
                <li>Bloggers</li>
                <li>Photographers</li>
                <li>Creators</li>
                <li>Designers</li>
                <li>Musicians</li>
                <li>Influencers</li>
                <li>Songwriters</li>
                <li>Travelers</li>
                <li>Artisans</li>
              </ul>
            </ul>
          </div>
          {/* ====================================================================================  */}
          <div className={`col-md-9 ${style.SearchCol}`}>
            <div className={`${style.InputDiv} position-relative ms-5 ps-5`}>
              <input
                type="text"
                className={`${style.inputClass} form-control  bg-transparent`}
                placeholder="search...."
              />
              <i className={`fab fa-searchengin ${style.icon}`}></i>
            </div>
          </div>
          {/* =====================================================  */}
          <div className={`col-md-3 ${style.iconsCol}`}>
            <div
              className={`d-flex mb-3 justify-content-end ${style.iconsDiv}`}
            >
              <div className={{}}>
                <i className="fs-3 text-white  p-2 me-2 fas fa-microphone"></i>
                <i className="fs-3 text-white  p-2 me-2 fab fa-pinterest-p"></i>
                <i className="fs-3 text-white  p-2 me-2 fab fa-facebook"></i>
                <i className="fs-3 text-white  p-2 me-2 fab fa-twitter"></i>
                <i className="fs-3 text-white  p-2 me-2 fab fa-instagram"></i>
                <i className="fs-3 text-white  p-2 me-2  fab fa-youtube"></i>
              </div>
            </div>
            <div className={`d-flex justify-content-end ${style.imgDiv}`}>
              <img className={style.img} src={im} alt="" />
              <img className={style.img} src={im2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
