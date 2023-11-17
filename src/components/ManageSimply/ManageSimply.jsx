import style from "./ManageSimply.module.css";
import Home_page_Google from "../images/mobile-slider-3__1.png";
import { BsArrowRight } from "react-icons/bs";
const ManageSimply = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row mt-5">
          <div className={`col-md-6 ${style.imgDiv}`}>
            <div className="m-5">
              <img src={Home_page_Google} className="w-100" alt="" />
            </div>
          </div>

          <div className={`col-md-6 ${style.mangeColDiv}`}>
            <div className="mt-5">
              <h3 className={style.Grow}>Manage simply</h3>
              <p className="h5 mb-5">
                Make your life easier by automating tasks and integrating new
                tools to help you save time and resources.
              </p>
              <ul>
                <li className="mt-2">
                  Connect to your customers’ favorite payment and shipping
                  options from over a hundred of integrations.
                </li>
                <li className="mt-2">
                  {" "}
                  Automate shipping, tax calculations and inventory tracking.
                </li>
                <li className="mt-2">
                  {" "}
                  Customize the look of your catalog, checkout page, and
                  customer notifications without coding.
                </li>
                <li className="mt-2">
                  Manage orders, products, promotions and customers from our
                  top-rated mobile app (iOS + Android).
                </li>
              </ul>
              <div></div>
              <div className="  ">
                <p className={`p-3  w-75 ${style.sellBtn}`}>
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

export default ManageSimply;
