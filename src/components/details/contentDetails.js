import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CompData } from '../../utils/includes';
import { useParams } from 'react-router-dom';

const ContentDetails = () => {
    const [details, setDetails] = useState([]);
    let { slug } = useParams();

    useEffect(() => {
        axios.get(`${CompData.GETURL}?filter[slug]=${slug}`).then((response) => {
          
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ContentDetails
