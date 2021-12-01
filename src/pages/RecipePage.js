import { useEffect, useState } from "react/cjs/react.development"
import { getRecipeById } from "../adapters/recipeAdapter"
import { useParams } from "react-router";

const RecipePage = () => {
    // const [recipe, setRecipe] = useState(null)
    // useEffect(()=>{
    //     getRecipeById(id)
    // })
    const { id } = useParams();
    return(
        <p>{id}</p>
    )
}

export default RecipePage;