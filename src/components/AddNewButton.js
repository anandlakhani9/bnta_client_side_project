import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/AddNewButton.css"

const AddNewButton = (props) => {

    const [ AddNewButtonState, SetAddNewButtonState ]= useState ("closed")

    const handleClick = () => {
        AddNewButtonState === "closed" ?
        SetAddNewButtonState("open")
        :
        SetAddNewButtonState("closed")
    }

    let navigate = useNavigate()
    const goNewRecipePage = () => {
        navigate("/NewRecipePage")
    }

    const goNewIngredientPage = () => {
        navigate("/NewIngredientPage")
    }

    return(
        
        AddNewButtonState === "closed" ?
        <div className="addButton">
            <button onClick={handleClick} className="addNew">+</button>
            </div>
        :
        <div className="addButton">
            
            
            <button onClick = {goNewRecipePage} className="add addRecipe">Add New Recipe</button>
            <button onClick = {goNewIngredientPage} className="add addIngredient">Add New Ingredient</button>
            <button onClick={handleClick} className="addNew">-</button>

            </div>

      
    )
}

export default AddNewButton