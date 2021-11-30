import React, { useState, useEffect, useContext } from "react";
import '../styles/ThemeToggle.css'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [toggled, setToggled] = useState(true)

    const swapMode = (e) => {
        let isChecked = e.target.checked;
        if (isChecked){
            theme.dispatch({type: "DARKMODE"})
            setToggled(true)
            
        }
        else{
            theme.dispatch({type: "LIGHTMODE"})
            setToggled(false)
            
        }
    }

    return (
        <div>
            <label class="switch">
                <input type="checkbox" onChange={swapMode} checked={toggled}/>
                <span class="slider round"></span>
                <p>Dark mode</p>
            </label>
        </div>
    )
}

export default ThemeToggle;