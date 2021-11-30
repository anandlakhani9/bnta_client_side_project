import { addRecipe, addIngredient } from '../adapters/recipeAdapter'
import { ingredients } from './ingredients';
import { recipes } from './recipes';

// const getIngredients = () => {
//     let ingRequest = new XMLHttpRequest();
//     ingRequest.open("GET", "./ingredients.json", false);
//     ingRequest.send(null);
//     const ingredients = JSON.parse(ingRequest.responseText);
//     return ingredients;
// }

// const getIngredients = () => {
//     return (
//         fetch('./ingredients.json')
//             .then(r => r.json())
//             .then(r => {
//                 console.log(r);
//                 return r
//             }
//             )
//     )
// }

// const getRecipes = () => {
//     let recRequest = new XMLHttpRequest();
//     recRequest.open("GET", "./recipes.json", false);
//     recRequest.send(null);
//     const recipes = JSON.parse(recRequest.responseText);
//     return recipes
// }

// console.log(ingredients)
// console.log(recipes)

const postRecipes = () => {
    //const recipes = getRecipes();
    for (let recipe of recipes) {
        addRecipe(recipe);
    }
}

const postIngredients = () => {
    //const ingredients = getIngredients()
    for (let ing of ingredients) {
        addIngredient(ing);
    }
}

export { postIngredients, postRecipes }