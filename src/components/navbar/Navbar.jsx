import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { PiArrowSquareOutLight } from "react-icons/pi";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import iconImage from "../images/favicon_96.png";

const Navbar = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  position-fixed w-100   bg-light p-3 ${style.navFixed} `}
      >
        <div className="container-fluid  ">
          <div className={`d-flex     ${style.iconDiv}`}>
            <Link to={"/"} className="navbar-brand">
              <div className="  d-flex  align-items-center">
                <div className="  w-25 ">
                  <img className="w-75 ms-1" src={iconImage} alt="CART" />
                </div>
                <div className="">
                  <p className={`${style.Ecwid}`}> Ecwid</p>
                  <p className={style.byLighspeed}>by Lighspeed</p>
                </div>
              </div>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse  navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <p
                  className={`nav-link ${style.navLink}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sell
                </p>

                <ul className={`dropdown-menu me-4 ${style.dropdown}`}>
                  <li>
                    <Link to={"/sell"} className={`${style.link}`}>
                      <h4 className={`p-3  ${style.sellAnywhere}`}>
                        Sell anywhere{" "}
                        <BsArrowRight className={`${style.BsArrowRight}`} />
                      </h4>
                    </Link>
                  </li>
                  <li>
                    <p className=" p-3 h5 opacity-50  ">
                      Sell around the world on a website, social media,
                      marketplaces like Amazon and eBay, and anywhere else that
                      strikes your fancy.
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <div className=" d-flex  justify-content-between">
                      <div className=" w-50">
                        <ul className=" list-unstyled  w-75 ms-3">
                          <Link className={`${style.liWeb}`}>Website</Link>
                          <Link className={style.liWeb}>Instagram</Link>
                          <Link className={style.liWeb}>Facebook</Link>
                          <Link className={style.liWeb}>Google</Link>
                        </ul>
                      </div>
                      <div className=" w-50">
                        <ul className=" list-unstyled ">
                          <Link className={style.liWeb}>TikTok</Link>
                          <Link className={style.liWeb}>Marketplaces</Link>
                          <Link className={style.liWeb}>POS</Link>
                          <Link className={style.liWeb}>ShopApp</Link>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link ${style.navLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Market
                </a>
                <ul className={`dropdown-menu me-4 ${style.dropdown}`}>
                  <li>
                    <Link className={`${style.link}`}>
                      <h4 className={`p-3 fw-bold ${style.MarketYour}`}>
                        Market your business
                        <BsArrowRight className={`${style.BsArrowRight}`} />
                      </h4>
                    </Link>
                  </li>
                  <li>
                    <p className=" p-3 h5 opacity-50">
                      Marketing your business has never been easier. <br />
                      Google advertising, Facebook advertising,br Search Engine
                      Optimization, and more. Yes please.
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <div className=" ">
                      <div className=" ">
                        <ul className=" list-unstyled  ms-3">
                          <Link className={style.liWeb}> Google Ads</Link>
                          <Link className={style.liWeb}>Facebook Ads</Link>
                          <Link className={style.liWeb}>Email newsletters</Link>
                          <Link className={style.liWeb}>Marketing apps</Link>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link ${style.navLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage
                </a>
                <ul className={`dropdown-menu me-4 ${style.dropdown}`}>
                  <li>
                    <Link className={`${style.link}`}>
                      <h4 className={`p-3 fw-bold ${style.sellAnywhere}`}>
                        Manage your store{" "}
                        <BsArrowRight className={`${style.BsArrowRight}`} />
                      </h4>
                    </Link>
                  </li>
                  <li>
                    <p className=" p-3 h5 opacity-50">
                      Simplicity at its finest.
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <div className=" d-flex  justify-content-between">
                      <div className=" w-50">
                        <ul className=" list-unstyled  w-75 ms-3">
                          <Link className={`${style.liWeb}`}> Mobile</Link>
                          <Link className={style.liWeb}>Discount Shipping</Link>
                          <Link className={style.liWeb}>
                            Lightspeed Payments
                          </Link>
                          <Link className={style.liWeb}>
                            Checkout automations
                          </Link>
                        </ul>
                      </div>
                      <div className=" w-50">
                        <ul className=" list-unstyled ">
                          <Link className={style.liWeb}>App Market</Link>
                          <Link className={style.liWeb}>Automated taxes</Link>
                          <Link className={style.liWeb}>Customization</Link>
                          <Link className={style.liWeb}>Staff management</Link>
                        </ul>
                      </div>
                    </div>
                    {/* </p> */}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* ======================================================================================== */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className={`nav-link ${style.navLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Learn
                </a>
                <ul className={`dropdown-menu ${style.dropdown}`}>
                  <li>
                    <Link className={`${style.link}`}>
                      <h4 className={`p-3 fw-bold ${style.Learn}`}>
                        Learn{" "}
                        <BsArrowRight className={`${style.BsArrowRight}`} />
                      </h4>
                    </Link>
                  </li>
                  <li>
                    <p className=" p-3 h5 opacity-50">
                      Get the knowledge you need to build a successful
                      e-commerce store with Ecwid’s comprehensive user guides.
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <div className=" d-flex  justify-content-between">
                      <div className=" w-50">
                        <ul className=" list-unstyled ms-3">
                          <Link className={style.liWeb}>Showcase</Link>
                          <Link className={style.liWeb}>Help Center</Link>
                          <Link className={style.liWeb}>Blog</Link>
                          <Link className={style.liWeb}>Guides</Link>
                          <Link className={style.liWeb}>Podcast</Link>
                        </ul>
                      </div>
                      <div className=" w-50">
                        <ul className=" list-unstyled ">
                          <Link className={style.liWeb}>Demo</Link>
                          <Link className={style.liWeb}>Reviews</Link>
                          <Link className={style.liWeb}>Customer Support</Link>
                          <Link className={style.liWeb}>Ecwid Academy</Link>
                          <Link className={style.liWeb}>Tutorials</Link>
                        </ul>
                      </div>
                    </div>
                    {/* </p> */}
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link ${style.navLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Partners
                </a>
                <ul className={`dropdown-menu ${style.dropdown}`}>
                  <li>
                    <Link className={`${style.link}`}>
                      <h4 className={`p-3 fw-bold ${style.Learn}`}>
                        Partners <PiArrowSquareOutLight />
                      </h4>
                    </Link>
                  </li>
                  <li>
                    <p className=" p-3 h5 opacity-50">
                      Let’s work together to help small businesses sell online.
                      Learn more about our partnership options for companies of
                      any size and industry.{" "}
                    </p>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <div className=" d-flex  justify-content-between">
                      <div className=" w-100">
                        <ul className=" list-unstyled ms-3">
                          <Link className={style.liWeb}>Resell</Link>
                          <Link className={style.liWeb}>Refer</Link>
                          <Link className={style.liWeb}>Build an APP</Link>
                          <Link className={style.liWeb}>Find an expert</Link>
                        </ul>
                      </div>
                    </div>
                    {/* </p> */}
                  </li>
                </ul>
              </li>
              <li className="">
                <Link to={"/pricing"} className={`nav-link ${style.navLink}`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={"/login"} className={`nav-link ${style.navLink}`}>
                  Login
                </Link>
              </li>
            </ul>
            <div className="ms-5">
              <button className={`btn d-none ${style.btnDark}`}>
                Get started for FREE
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
