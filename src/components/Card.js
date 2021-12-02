import '../styles/Card.css'
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const dark = useContext(ThemeContext);
    const darkMode = dark.state.darkMode;

    const[theme, setTheme] = useState("");


    
    
    useEffect(() => {
        if (props.isVegan) {
            //console.log("vegan")
            setTheme("card-vegan")
        }
        else if (props.isVegetarian){
            setTheme("card-vegetarian")
        }
        else if (props.isPescatarian){
            setTheme("card-pesc")
        }
        else if (props.isMeatOnly){
            setTheme("card-meat")
        }
    }, [props.isVegan, props.isVegetarian, props.isMeatOnly, props.isPescatarian])
    
    
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

    let navigate = useNavigate();
    // const goToRecipe = () => {
    //     //navigate("/recipes/" + props.id)
    //     //navigate("/recipes/:id")
    // }

    return (
        //<div className={`card ${darkMode ? "card-dark" : "card-light"}`}>
        <Link to={{
            pathname: `/recipe/${props.id}`,
            state: {recipe: props.theRecipe}
        }}>
        <div className={`card ${theme} ${darkMode ? "card-dark" : "card-light"}`}>
        {/* onClick={goToRecipe}> */}
            {/* <img src={props.image} alt={props.alt}/> */}
            <p>{props.name}</p>
            <p>Some description</p>
        </div>
        </Link>

    )
}

export default Card;