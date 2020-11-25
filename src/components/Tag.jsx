import React,{useState,useEffect} from 'react';
import axios from 'axios';


const API_KEY="mDC7nyDq3fhsDMRRFopffdPea1mVRMze";

const Random = () => {
    const [tag,setTag]=useState('dogs');
    const [gif ,setGif]=useState('');
    
    const fetchgif= async (tag)=>{
        const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data}=await axios.get(url);
        const img_source=data.data.images.downsized_large.url;
        setGif(img_source);

    }
    useEffect(()=>{
        fetchgif(tag);
    },[tag])

    const handleClick = () =>{
        fetchgif(tag);

    }
    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="random_gif"></img>
            <input value={tag} onChange={(e)=>{setTag(e.target.value)}}></input>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default Random;

