import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_title">
        {" "}
        JOIN SHOPPING COMMUNITY TO
        <hr />
        GET MONTHLY PROMO
      </div>
      <div className="form_desc">
        {" "}
        Type your email down below and be young wild generation
      </div>
      <div className="form_input">
        <input type="text" placeholder=" Add your email here" />
        <button className="btn_send">SEND</button>{" "}
      </div>
    </div>
  );
};

export default Form;
