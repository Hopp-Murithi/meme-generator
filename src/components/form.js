import React from "react";
import memeData from "../memeData";


let url
export default function Meme() {
  function getMemeImage() {
    const meme = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * meme.length);
    url = meme[randomIndex].image;
    alert(url);
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
    </main>
  );
}