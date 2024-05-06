import React from "react";
import "./apps.css";
import voucher from "./../../img/images/vouchers-img.png";
import appStore from "./../../img/icons/app-store.png";
import googlePlay from "./../../img/icons/google-play.png";

const Apps = () => {
  return (
    <div>
      <section className="apps">
        <div className="download">
          <h3 className="app_title">
            {" "}
            DOWNLOAD APP &
            <hr /> GET THE VOUCHER
          </h3>
          <h4 className="text_p">
            {" "}
            Get 30% off for first transaction using
            <hr />
            Randovision mobile app for now
          </h4>
          <div className="app_icons">
            <img src={appStore} />
            <img src={googlePlay} />
          </div>
        </div>

        <div className="app_img">
          <img src={voucher} alt="appImg" />
        </div>
      </section>
    </div>
  );
};

export default Apps;
