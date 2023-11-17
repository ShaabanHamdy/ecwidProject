import style from "./Introducing.module.css";
import Payments from "../images/Payments.png";

const Introducing = () => {
  return (
    <>
      <div className="container pt-5">
        <div className={`row mt-5 ${style.growRow}`}>
          <div className={`col-md-6 mt-5 ${style.growColDiv}`}>
            <div className="mt-5">
             
             <h3 className={style.intro}>
             Introducing Lightspeed Payments
             </h3>
             <p className="h5 mb-5">
             A fully integrated payment method for your customers. Get paid for one-off orders or sell products by subscription. Accept cards, Google Pay and Apple Pay, and manage payments right in your store control panel.
             </p> 
              <div className={`${style.btnSectionTow}`}>
                <div className={`m-5 ${style.btnDiv}`}>
                  <button className={`btn   fs-5 ${style.btnDark}`}>
                    Learn more
                  </button>
                <p className="small mt-3">Available in the United States, Canada and the United Kingdom.</p>
                </div>
              </div>
                
              
            </div>
          </div>

          <div className={`col-md-6  ${style.imgDiv}`} >
            <div>
              <img src={Payments} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introducing;
