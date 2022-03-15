import memedata from "../memedata"
import { Icon } from '@iconify/react';



export default function Meme(){
   
    let randomImg
    function getMemeImg(){
        console.log("clicked");
        const memesArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        randomImg = memesArray[randomNumber].url
        console.log(randomImg);    
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
            className="form__btn">Get a new meme image 
            <Icon icon="clarity:picture-solid-badged" className='iconify'/></button>
        </div>
            <img src={randomImg} alt="meme"></img>
    </div>
    )
}