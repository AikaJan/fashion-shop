import React from "react";
import "./arrivals.css";
import Card from "../card/Card";
import cat01Img from "./../../img/categories/cat-01.jpg";
import cat02Img from "./../../img/categories/cat-02.jpg";
import cat03Img from "./../../img/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals_header">
          <h2 className="title-2"> NEW ARRIVALS</h2>
        </div>
        <div className="arrivals_cards">
          <Card title="HOODIES & SWEETSHIRT" img={cat01Img} />
          <Card title="COATS & PARKAS" img={cat02Img} />
          <Card title="TEES & T-SHIRTS" img={cat03Img} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
