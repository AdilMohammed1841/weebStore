import React from "react";
import "./home.css";

const Home = ({ animeList }) => {
  
  return (
    <div className="anime-list-container">
      {animeList &&
        animeList?.data?.length &&
        animeList.data.map((item, index) => {
            return(
                <div key={index} className="anime-list-item" >
                    <img alt='' src={item?.attributes?.posterImage?.large}/>
                </div>)
        })}
    </div>
  );
};

export default Home;
