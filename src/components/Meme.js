import { Icon } from '@iconify/react';
import React, { useState } from "react";



export default function Meme(){
   
    // const [memeImg , setMemeImg] = useState("https://i.imgflip.com/3si4.jpg")
    const [meme , setMeme] = useState ({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/3si4.jpg",
    })

    const [allMemes , setAllMemes] = useState([])
   
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then(data => setAllMemes(data.data.memes))
        
    }, [])

    function getMemeImg(){
        
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url

        }))
           
    }
    function onChange (event){
        const {name , value} = event.target
        setMeme(prevMemeState => {
            return {
                ...prevMemeState,
                [name]: value
            }
        })
    }
console.log(meme)

    return(
    <div className="meme__container">
        <div className="form">
          <div className="form__input-container">
            <input 
                onChange={onChange}
                name="topText"
                value={meme.topText}
                type="text" 
                className="input" 
                placeholder="Top text">
            </input>
            <input 
                onChange={onChange}
                value={meme.bottomText}
                name="bottomText"
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
        <div className="meme">
            <img src={meme.randomImage} alt="meme" className="memeImg"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </div>
    )
}