import style from "./GrowFaster.module.css";
import Home_page_Google from "../images/Home_page_Google_MC_FB-1686055463.png";
import { BsArrowRight } from "react-icons/bs";
const GrowFaster = () => {
  return (
    <>
      <div className="container pt-5">
        <div className={`row mt-5 ${style.growRow}`}>
          <div className={`col-md-6 mt-5 ${style.growColDiv}`}>
            <div className="mt-5">
              <h3 className={style.Grow}>Grow faster</h3>
              <p className="h5 mb-5">
                Take your business to the next level with our easy-to-use
                marketing tools to attract and retain more customers.
              </p>
              <ul>
                <li className="mt-2">Automated Google and Facebook ads</li>
                <li className="mt-2">
                  {" "}
                  TikTok, Pinterest and Snapchat Pixel integrations
                </li>
                <li className="mt-2">
                  {" "}
                  Automated abandoned cart emails and other customizable
                  Marketing emails
                </li>
                <li className="mt-2">Discount coupons and gift cards</li>
                <li className="mt-2"> SEO tools</li>
              </ul>

              <div>
                <p className={`p-3  ${style.sellBtn}`}>
                  Learn more
                  <BsArrowRight className={`mx-2 ${style.BsArrowRight}`} />
                </p>
              </div>
            </div>
          </div>

          <div className={`col-md-6  ${style.imgDiv}`}>
            <div>
              <img src={Home_page_Google} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowFaster;
