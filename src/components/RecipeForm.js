import { useState } from "react";
import { addRecipe } from "../adapters/recipeAdapter";

const RecipeForm = () => {
  const [name, setName] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [meatOnly, setMeatOnly] = useState(false);
  const [pescatarian, setPescatarian] = useState(false);
  const [mealType, setMealType] = useState(null);
  const [spiceRating, setSpiceRating] = useState(null);
  const [cookingTime, setCookingTime] = useState(null);
  const [instructions, setInstructions] = useState(null);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: name,
      cuisine: cuisine,
      vegetarian: vegetarian,
      vegan: vegan,
      meatOnly: meatOnly,
      pescatarian: pescatarian,
      mealType: mealType,
      spiceRating: spiceRating,
      cookingTime: cookingTime,
      instructions: instructions,
    };

    addRecipe(newRecipe);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };
  const handleVegetarianChange = (event) => {
    console.log("EVENT" + event);
    console.log("EVENT TARGET VALUE" + event.target.value);
    setVegetarian(!vegetarian);
  };

  const handleVeganChange = (event) => {
    setVegan(!vegan);
  };

  const handleMeatOnlyChange = (event) => {
    setMeatOnly(!meatOnly);
  };

  const handlePescatarianChange = (event) => {
    setPescatarian(!pescatarian);
  };

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleSpiceRatingChange = (event) => {
    setSpiceRating(event.target.value);
  };

  const handleCookingTimeChange = (event) => {
    setCookingTime(event.target.value);
  };
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <p>Recipe name</p>
      <input type="text" value={name} onChange={handleNameChange}></input>
      <p>Cuisine</p>
      <input type="text" value={cuisine} onChange={handleCuisineChange}></input>
      <p>Vegetarian</p>
      <input
        type="checkbox"
        value={vegetarian}
        onChange={handleVegetarianChange}
      ></input>
      <p>Vegan</p>
      <input type="checkbox" value={vegan} onChange={handleVeganChange}></input>
      <p>Contains Meat</p>
      <input
        type="checkbox"
        value={meatOnly}
        onChange={handleMeatOnlyChange}
      ></input>
      <p>Pescatarian</p>
      <input
        type="checkbox"
        value={pescatarian}
        onChange={handlePescatarianChange}
      ></input>
      <p>Meal Type</p>
      <select value={mealType} onChange={handleMealTypeChange}>
        <option value="BREAKFAST">BREAKFAST</option>
        <option value="LUNCH">LUNCH</option>
        <option value="DINNER">DINNER</option>
        <option value="SNACK">SNACK</option>
        <option value="DESSERT">DESSERT</option>
      </select>
      <p>Spice Rating</p>
      <select value={spiceRating} onChange={handleSpiceRatingChange}>
        <option value="SWEET">SWEET</option>
        <option value="MILD">MILD</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HOT">HOT</option>
      </select>
      <p>Cooking Time</p>
      <input
        type="text"
        value={cookingTime}
        onChange={handleCookingTimeChange}
      ></input>
      <p>Instructions</p>
      <input
        type="text"
        value={instructions}
        onChange={handleInstructionsChange}
      ></input>
      <input type="submit"/>
    </form>
  );
};

export default RecipeForm;
