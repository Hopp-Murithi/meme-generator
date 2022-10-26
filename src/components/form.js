import React from "react";

export default function Meme() {
  return (
    <form className="meme-form">
      <input
      className="meme-top"
        type="text"
        name="topText"
        placeholder="Top Text"
       
      />
      <input
        className="meme-bottom"
        type="text"
        name="bottomText"
        placeholder="Bottom Text"
        
    />
      <button >Generate</button>
    </form>
  );
}