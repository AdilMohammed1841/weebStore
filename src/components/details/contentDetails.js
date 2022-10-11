import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CompData } from '../../utils/includes';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

// Only loads the YouTube player

const ContentDetails = () => {
    const [details, setDetails] = useState([]);
    let { slug } = useParams();

    useEffect(() => {
        axios.get(`${CompData.GETURL}?filter[slug]=${slug}`).then((response) => {
          setDetails(response.data);
        })
    },[])
    return (
        <div>
            {
                details && details?.data && details?.data.map((item,index) => {
                    return (
                        <>
                            {item?.attributes?.youtubeVideoId ?
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${item?.attributes?.youtubeVideoId}`} />
                                :
                                <p>Video Not Found  </p>
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default ContentDetails
