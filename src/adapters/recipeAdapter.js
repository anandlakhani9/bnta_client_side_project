import axios from "axios";

const getAllRecipes = () => {
    return (
        axios.get("http://localhost:8080/api/v1/recipe")
        .then(response => {
            return response.data
        })
    )
}

const getRecipeById = (id) => {
    return (
        axios.get("http://localhost:8080/api/v1/recipe/" + id)
        .then(response => {
            return response.data
        })
    )
}

const getRecipeAccordingToAllergy = (allergen) => {
    return (
        axios.get("http://localhost:8080/api/v1/ri?allergen=" + allergen)
        .then(response => {
            return response.data
        })
    )
}

const getRecipesByCookingTime = (cookingTime) => {
    return (
        axios.get("http://localhost:8080/api/v1/ri?cookingTime=" + cookingTime)
        .then(response => {
            return response.data
        })
    )
}

const getAllIngredients = () => {
    return (
        axios.get("http://localhost:8080/api/v1/ingredient")
        .then(response => {
            return response.data
        })
    )
    }

const getIngredientById = (id) => {
    return (
        axios.get("http://localhost:8080/api/v1/ingredient/" + id)
        .then(response => {
            return response.data
        })
    )
}

const addIngredient = (ingredient) => {
return (
    axios.post('http://localhost:8080/api/v1/ingredient', ingredient)
).catch((e)=> {
    console.log("recipeAdapter could not add ingredient")
})
}

const addRecipe = (recipe) => {
    return (
        axios.post("http://localhost:8080/api/v1/recipe", recipe)
    ).catch((e)=> {
        console.log("recipeAdapter could not add recipe")
    })
}

const updateRecipe = (recipe, id) => {
    return (
        axios.put("http://localhost:8080/api/v1/recipe/" + id, recipe)
    ).catch((e)=> {
        console.log("recipeAdapter could not update recipe")
    })
}

export { getAllRecipes, getRecipeById, getRecipeAccordingToAllergy, getRecipesByCookingTime, getAllIngredients, getIngredientById, addIngredient, addRecipe, updateRecipe}