import React, { useEffect, useState } from "react";
import axios from "axios";
import { CompData } from "../../utils/includes";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";

// Only loads the YouTube player

const ContentDetails = () => {
  const [details, setDetails] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    axios.get(`${CompData.GETURL}?filter[slug]=${slug}`).then((response) => {
      setDetails(response.data);
    });
  }, []);
  return (
    <div>
      {details &&
        details?.data &&
        details?.data.map((item, index) => {
          return (
            <>
              {item?.attributes?.youtubeVideoId ? (
                // <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.attributes?.youtubeVideoId}`} />
                // <ReactPlayer url={"https://gogoanime.lu//one-piece-episode-1026"} />
                <ReactVideoPlayer
                        width='928px'
                        url="https://gogohd.net/streaming.php?id=MzUxOA==&title=One+Piece+Episode+1"
                        // type='video/mp4'
                        // poster='http://comondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
                        // captions={[
                        //   {
                        //     kind: 'captions',
                        //     label: 'English',
                        //     srcLang: 'en',
                        //     src: 'caption_url'
                        //   }
                        // ]}
                />
              ) : (
                <p>Video Not Found </p>
              )}
            </>
          );
        })}
    </div>
  );
};

export default ContentDetails;
