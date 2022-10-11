import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CompData } from '../../utils/includes';
import Listing from '../listing/listing';


const Trending = () => {
    const [animeList, setAnimeList] = useState([])
    useEffect(()=>{
        axios.get(CompData.GETTRENDINGURL).then((response)=>{
            if(response.status === 200){
                setAnimeList(response?.data)
            }
        })
    },[])
  return (
    <div>
        <Listing animeList={animeList}/>
    </div>
  )
}

export default Trending