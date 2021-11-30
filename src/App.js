import './App.css';
import HomePage from './pages/HomePage';
import ThemeToggle from './components/ThemeToggle';
import React, { useEffect, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
//import NavBar from './components/NavBar';
import {postIngredients, postRecipes} from './data/populatedb.js'


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    if (darkMode){
        document.body.classList.add("bg-dark");
        document.body.classList.remove("bg-light");
    }
    else {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
  })


  return (
    <div className={`App ${darkMode ? "app-dark" : "app-light"}`}>
      <header className="App-header">
        
        <HomePage />
        {/* <ThemeToggle /> */}
        <button onClick={postIngredients}>post ingredients</button>
        <button onClick={postRecipes}>post recipes</button>
       
      </header>
    </div>
  );
}

export default App;
