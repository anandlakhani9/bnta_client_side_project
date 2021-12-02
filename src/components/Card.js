import '../styles/Card.css'
import React, { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
//import { ThemeContext } from "../contexts/ThemeContext";

const Card = ({name,key,id,isVegan,isVegetarian,isMeatOnly,isPescatarian, addToFaves, removeFromFaves, favourites}) => {
    //const theme = useContext(ThemeContext);
    //const darkMode = theme.state.darkMode;

    const[theme, setTheme] = useState("");
    
    useEffect(() => {
        if(isVegan) {
            //console.log("vegan")
            setTheme("card-vegan")
        }
        else if (isVegetarian){
            setTheme("card-vegetarian")
        }
        else if (isPescatarian){
            setTheme("card-pesc")
        }
        else if (isMeatOnly){
            setTheme("card-meat")
        }
    }, [isVegan, isVegetarian, isMeatOnly, isPescatarian]);

    //console.log(theme)

    // const addCardClass = () => {
    //     console.log("running")
    //     if (props.isVegan) {
    //         console.log("vegan")
    //         return "card-vegan"
    //     }
    //     else if (props.isVegetarian){
    //         return "card-vegetarian"
    //     }
    //     else if (props.isMeatOnly){
    //         return "card-meat"
    //     }
    //     else if (props.pescatarian){
    //         return "card-pesc"
    //     }
    // }
        

    
    
    return (
        //<div className={`card ${darkMode ? "card-dark" : "card-light"}`}>
        <div className={`card ${theme}`}>

            {favourites == true ?
            (<button onClick={() => removeFromFaves(id)}><AiFillStar /></button>)
            :(<button onClick={() => addToFaves(id)}><AiOutlineStar /></button>)}

            {/* <img src={props.image} alt={props.alt}/> */}
            <p>{name}</p>
            <p>Some description</p>
        </div>
    )
}

export default Card;