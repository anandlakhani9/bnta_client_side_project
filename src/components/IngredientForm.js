import {useState} from "react"
import {addIngredient} from "../adapters/recipeAdapter"

const IngredientForm = () => {

    const [ingredientName, setIngredientName] = useState(null)
    const [allergen, setAllergen] = useState(null);

    const handleFormSubmission = (event) => {
        event.preventDefault();
        const newIngredient = {
            ingredientName: ingredientName,
            allergen: allergen
        };   

        addIngredient(newIngredient);
    }

    const handleNameChange = (event) => {
        setIngredientName(event.target.value);
    };

    const handleAllergenChange = (event) => {
        setAllergen(event.target.value);
    };
    
    return(
        <form onSubmit={handleFormSubmission}>
            <p>Add new ingredient</p>
            <input type="text" value={ingredientName} onChange={handleNameChange}></input>
            <p> Allergen</p>
            <input type="text" value={allergen} onChange={handleAllergenChange}></input>
            <input type="submit" value="Add Ingredient"/>
            
        </form>

    )
    
}

export default IngredientForm;