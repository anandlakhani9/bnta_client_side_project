import { getRecipeById } from "../adapters/recipeAdapter"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import UpdateRecipeForm from "../components/UpdateRecipeForm";


const RecipePage = (props) => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    useEffect(()=> {
        getRecipeById(id).then(r => setRecipe(r))
    }, [])

    const updateForm = () =>
    {
        setShowUpdateForm(true);
        }

    return(
        recipe ?
        <>
        <div className="recipe-page">
        <h1>{recipe.name}</h1>
        <h3>{`Cuisine: ${recipe.cuisine}`}</h3>
        <h3>{`Spice Level: ${recipe.spiceRating}`}</h3>
        <h3>{`Cooking Time: ${recipe.cookingTime} minutes`}</h3>
        <h3>{`Meal Type: ${recipe.mealType}`}</h3>
        <div className="cooking-instructions">
            <h2>Instructions</h2>
            <p><span className="recipe-instructions">{recipe.instructions}</span></p>
        </div>
        
        <button onClick={updateForm}>Update Recipe</button>
        </div>
        {showUpdateForm ?
        <>
        <UpdateRecipeForm recipe={recipe}/>
        </>
        :
        <>
        </>}
        </>
        :
        <p>Loading...</p>
    )
}

export default RecipePage;