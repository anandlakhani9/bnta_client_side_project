import '../styles/Card.css'
import React, { useState, useEffect, useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Card = ({name,key,id,isVegan,isVegetarian,isMeatOnly,isPescatarian, addToFaves, removeFromFaves, favourites}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

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
  
        let navigate = useNavigate();


    
    return (
    <Link to={{
            pathname: `/recipe/${id}` }}>
        <div className={`card ${theme} ${darkMode ? "card-dark" : "card-light"}`}>
       

            {favourites == true ?
            (<button onClick={() => removeFromFaves(id)}><AiFillStar /></button>)
            :(<button onClick={() => addToFaves(id)}><AiOutlineStar /></button>)}
            {/* <img src={props.image} alt={props.alt}/> */}
            <p>{name}</p>
            <p>Some description</p>
        </div>
        </Link>

    )
}

export default Card;