import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

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

    return(
        AddNewButtonState === "closed" ?
        <>
            <button onClick={handleClick}>+</button>
        </>
        :
            <>
            <button onClick={handleClick}>+</button>
            <button onClick = {goNewRecipePage}>Add New Recipe</button>
            <button>Add New Ingredient</button>
            </>
    )
}

export default AddNewButton