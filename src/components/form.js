 // eslint-disable-next-line
import React from "react";
import { useState } from "react";
import memeData from "../memeData";



export default function Meme() {
  //const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages,setAllMemeImages] = useState(memeData);



  function getMemeImage() {
    const meme = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * meme.length);
    const url = meme[randomIndex].image;
    setMeme(prevImg => ({
      ...prevImg,
      randomImg: url,
    }));
  }
  
  return (
    <main>
      <div className="meme-form">
      <input
      className="meme-input"
        type="text"
        name="topText"
        placeholder="Top Text"
       
      />
      <input
        className="meme-input"
        type="text"
        name="bottomText"
        placeholder="Bottom Text"
        
    />
      <button className="meme-button" onClick={getMemeImage}>Get new meme image</button>
    </div>
      <img className="meme-image" src={meme.randomImg} alt="meme" />
    
    </main>
  );
}