import React,{useState} from 'react';
import useGif from '../useGif';


const Tag2=()=>{

    const [tag,setTag]=useState('dogs');
    const {gif,fetchGif}=useGif(tag);
    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="random_gif"></img>
            <input value={tag} onChange={(e)=>{setTag(e.target.value)}}></input>
            <button onClick={() => fetchGif(tag)}>Change</button>
        </div>
    )
}


export default Tag2;






