import '../styles/Card.css'
//import React, { useContext } from "react";
//import { ThemeContext } from "../Contexts/ThemeContext";

const Card = (props) => {
    //const theme = useContext(ThemeContext);
    //const darkMode = theme.state.darkMode;

    return (
        // <div className={`card ${darkMode ? "card-dark" : "card-light"}`}>
        <div className="card">
            {/* <img src={props.image} alt={props.alt}/> */}
            <h1>{props.name}</h1>
            <p>Some description</p>
        </div>
    )
}

export default Card;