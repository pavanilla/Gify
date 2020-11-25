import React,{useState,useEffect} from 'react';
import axios from 'axios';


const API_KEY="mDC7nyDq3fhsDMRRFopffdPea1mVRMze";

const Random_v1 = () => {

    const [gif ,setGif]=useState('');
    const fetchgif= async ()=>{
        const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const img_source=data.data.images.downsized_large.url;
        setGif(img_source);

    }
    useEffect(()=>{
        fetchgif();
    },[])

    const handleClick = () =>{
        fetchgif();

    }
    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="400" src={gif} alt="random_gif"></img>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default Random_v1;
