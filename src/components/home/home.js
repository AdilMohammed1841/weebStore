import React from "react";
import Listing from "../listing/listing";
import "./home.css";

const Home = ({ animeList }) => {
  
  return (
    <div>
        <Listing animeList={animeList}/>
    </div>
  );
};

export default Home;
