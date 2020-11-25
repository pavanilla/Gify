import React,{useState} from 'react';
import useGif from '../useGif';


const Random_v2=()=>{
    const {gif,fetchGif}=useGif();
    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="random_gif"></img>
            <button onClick={fethGif}>Change</button>
        </div>
    )
}


export default Random_v2;