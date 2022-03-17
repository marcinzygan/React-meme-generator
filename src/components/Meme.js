import memedata from "../memedata"
import { Icon } from '@iconify/react';
import { useState } from "react";



export default function Meme(){
   
    // const [memeImg , setMemeImg] = useState("https://i.imgflip.com/3si4.jpg")
    const [meme , setMeme] = useState ({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/3si4.jpg",
    })

    const [allMemeImages , setAllMemeImages] = useState(memedata)
   


    function getMemeImg(){
        
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url

        }))
           
    }



    return(
    <div className="meme__container">
        <div className="form">
          <div className="form__input-container">
            <input 
                type="text" 
                className="input" 
                placeholder="Top text">
            </input>
            <input 
                type="text"
                className="input" 
                placeholder="Bottom text">
            </input>
          </div>
            <button
            onClick={getMemeImg} 
            className="form__btn">New meme image 
            <Icon icon="clarity:picture-solid-badged" className='iconify'/></button>
        </div>
            <img src={meme.randomImage} alt="meme" className="memeImg"></img>
    </div>
    )
}