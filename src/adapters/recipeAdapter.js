import axios from "axios";

export const getAllRecipes = () => {
    return (
        axios.get("localhost:8080/api/v1/recipe")
        .then(response => {
            return response.data
        })
    )
}

export const getRecipeById = (id) => {
    return (
        axios.get("localhost:8080/api/v1/recipe/" + id)
        .then(response => {
            return response.data
        })
    )
}

export const getAllIngredients = () => {
    return (
        axios.get("localhost:8080/api/v1/ingredient")
        .then(response => {
            return response.data
        })
    )
}

export const getIngredientById = (id) => {
    return (
        axios.get("localhost:8080/api/v1/ingredient/" + id)
        .then(response => {
            return response.data
        })
    )
}

export const getRecipeAccordingToAllergy = (allergen) => {
    return (
        axios.get("localhost:8080/api/v1/ri?allergen=" + allergen)
        .then(response => {
            return response.data
        })
    )
}

export const getRecipesByCookingTime = (cookingTime) => {
    return (
        axios.get("localhost:8080/api/v1/ri?cookingTime=" + cookingTime)
        .then(response => {
            return response.data
        })
    )
}

//List Recipes According to Cooking Time: e.g GET localhost:8080/api/v1/ri?cookingTime=30