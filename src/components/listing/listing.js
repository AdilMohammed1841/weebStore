import React from "react";
import './listing.css'

const Listing = ({ animeList }) => {

  return (
    <div className="anime-list-container" >
      {animeList &&
        animeList?.data?.length &&
        animeList.data.map((item, index) => {
          return (
            <div key={index} className="anime-list-item">
                <a href={item?.attributes?.slug} >
                    <img alt="" src={item?.attributes?.posterImage?.large} />
                    <p>{item?.attributes?.titles?.en_jp}</p>
                </a>                   
            </div>
          );
        })}
    </div>
  );
};

export default Listing;
