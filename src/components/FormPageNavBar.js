import '../styles/FormPageNavBar.css'
import ThemeToggle from './ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { GiOwl } from "react-icons/gi";


const FormPageNavBar = ({goHome}) => {


    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
            <div className={`FormPageNavBar ${darkMode ? "form-nav-dark" : "form-nav-light"}`}>
            <h1 onClick={goHome}>Day Owls <GiOwl /></h1>
            <ThemeToggle />
            </div>
    )
}

export default FormPageNavBar;