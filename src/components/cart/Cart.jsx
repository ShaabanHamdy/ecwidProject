import style from "./cart.module.css";
import hands from "../images/hands.svg";
import appMark from "../images/appMark.svg";
import phone from "../images/phone.svg";
import { BsArrowRight } from "react-icons/bs";
const Cart = () => {
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className={style.CartDiv}>
              <div>
                <img src={hands} alt="" />
                <h3 className="my-3 fw-bold h2">Live Support Expert </h3>
                <p>Expert support, whenever you need it.</p>
              </div>
              <p className={` ${style.sellBtn}`}>
                Learn more
                <BsArrowRight className={`mx-2 ${style.BsArrowRight}`} />
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.CartDiv}>
              <div>
                <img src={appMark} alt="" />
                <h3 className="my-3 fw-bold h2">Live Support Expert </h3>
                <p>Expert support, whenever you need it.</p>
              </div>
              <p className={` ${style.sellBtn}`}>
                Learn more
                <BsArrowRight className={`mx-2 ${style.BsArrowRight}`} />
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={style.CartDiv}>
              <div>
                <img src={phone} alt="" />
                <h3 className="my-3 fw-bold h2">Live Support Expert </h3>
                <p>Expert support, whenever you need it.</p>
              </div>
              <p className={` ${style.sellBtn}`}>
                Learn more
                <BsArrowRight className={`mx-2 ${style.BsArrowRight}`} />
              </p>
            </div>
          </div>
<div>

          <h2 className={`${style.bigText}`}>
            Your Own Online Store is Just a Few Clicks Away
          </h2>

          <div className={`m-5 ${style.btnDiv} w-100  text-center`}>
            <button className={`btn    fs-5 ${style.btnDark}`}>
              Get started for FREE
            </button>
            <p className="small my-3">
              No credit card required — pay when you're ready.
            </p>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
