import React from "react";
import promoImg from "./../../img/images/promo-img.jpg";
import "./payday.css";

const Payday = () => {
  return (
    <section className="payday">
      <div className="payday_content">
        <img
          className="payday_img"
          style={{ width: "800px", height: "700px" }}
          src={promoImg}
          alt="promoI"
        />
        <div className="payday_text">
          <div className="payday_title">
            <span>
              <span>PAYDAY SALE NOW</span>
            </span>
          </div>
          <div className="payday_desc">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </div>
          <div className="payday_desc">
            <span className="bold"> 1 June - 10 June 2024 </span>
            <span>
              {" "}
              <hr /> *Term & Conditions apply
            </span>
          </div>

          <div className="payday_btn_wrapper">
            <div className="payday_btn_decor"></div>
            <a href="#!" className="payday_btn">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Payday;
