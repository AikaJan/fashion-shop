import React from "react";
import "./favorite.css";
import SecondCard from "../card/SecondCard";
import promo1 from "./../../img/images/promo-01.jpg";
import promo2 from "./../../img/images/promo-02.jpg";

const Favorite = () => {
  return (
    <section className="favorite">
      <div className="fav_container">
        <div className="fav_header">
          <h2 className="title-3"> Young's Favourite</h2>
        </div>
        <div className="fav_cards">
          <SecondCard title="Trending on instagram" img={promo1} />
          <SecondCard title="All Under $40" img={promo2} />
        </div>
      </div>
    </section>
  );
};

export default Favorite;
