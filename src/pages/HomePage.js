import "../adapters/recipeAdapter"
import {useState, useEffect} from "react"
import {getAllRecipes} from "../adapters/recipeAdapter"
import CardList from "../components/CardList"
import NavBar from "../components/NavBar"

const HomePage = () => {
    const [recipes, setRecipes] = useState(null);
    const [input, setInput] = useState("");
    const [recipesFiltered, setRecipesFiltered] = useState([]);

    useEffect(()=>{
        getAllRecipes().then(response => setRecipes(response.filter((recipes)=>{
            return recipes.name.toLowerCase().includes(input.toLowerCase())
        })))
    }, [])

    const searchChange = (s) => {
        console.log(s.target.value)
        setInput(s.target.value)
        setRecipesFiltered("");
    };


    const filteredRecipes = 
    recipes ?
        recipes.filter((recipes)=> {
            return recipes.name.toLowerCase().includes(input.toLowerCase());
        })
        :
        null;

        const filteredToBreakFast = () => { 
   
            const newRecipes = recipes.filter((recipes)=> { return recipes.mealType.toLowerCase().includes("breakfast") })
            setRecipesFiltered(newRecipes);
        }
    
        const filteredToLunch = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.mealType.toLowerCase().includes("lunch") })
            setRecipesFiltered(newRecipes);
        }
    
        const filteredToDinner = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.mealType.toLowerCase().includes("dinner") })
            setRecipesFiltered(newRecipes);
        }

        const filteredToSnack = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.mealType.toLowerCase().includes("snack") })
            setRecipesFiltered(newRecipes);
        }
    
        const filteredToDessert = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.mealType.toLowerCase().includes("dessert") })
            setRecipesFiltered(newRecipes);
        }

        const filteredToVegetarian = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.vegetarian })
            setRecipesFiltered(newRecipes);
        }

        const filteredToVegan = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.vegan })
            setRecipesFiltered(newRecipes);
        }

        const filteredToMeatOnly = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.meatOnly })
            setRecipesFiltered(newRecipes);
        }

        const filteredToPescatarian = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.pescatarian })
            setRecipesFiltered(newRecipes);
        }

        const filteredToHot = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.spiceRating.toLowerCase().includes("hot") })
            setRecipesFiltered(newRecipes);
        }

        const filteredToMedium = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.spiceRating.toLowerCase().includes("medium") })
            setRecipesFiltered(newRecipes);
        }

        const filteredToMild = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.spiceRating.toLowerCase().includes("mild") })
            setRecipesFiltered(newRecipes);
        }

        const filteredToSweet = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.spiceRating.toLowerCase().includes("sweet") })
            setRecipesFiltered(newRecipes);
        }

        const filteredTo30mins = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.cookingTime < 31 })
            setRecipesFiltered(newRecipes);
        }

        const filteredToHour = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.cookingTime < 61 })
            setRecipesFiltered(newRecipes);
        }

        const filteredToOverHour = () => { 
       
            const newRecipes = recipes.filter((recipes)=> { return recipes.cookingTime > 61 })
            setRecipesFiltered(newRecipes);
        }

        const goHome = () => {
            setRecipesFiltered("");
        }

        const recipesToShow = recipesFiltered.length > 0 ? recipesFiltered : filteredRecipes;  
        

    return (
        recipes ?
        <>

            <NavBar goHome={goHome} searchChange={searchChange} value={input} filteredToBreakFast={filteredToBreakFast} 
            filteredToLunch={filteredToLunch} filteredToDinner={filteredToDinner} filteredToSnack={filteredToSnack} 
            filteredToDessert={filteredToDessert} filteredToVegetarian={filteredToVegetarian} filteredToVegan={filteredToVegan} 
            filteredToMeatOnly={filteredToMeatOnly} filteredToPescatarian={filteredToPescatarian} filteredToHot={filteredToHot}
            filteredToMedium={filteredToMedium} filteredToMild={filteredToMild} filteredToSweet={filteredToSweet}
            filteredTo30mins={filteredTo30mins} filteredToHour={filteredToHour} filteredToOverHour={filteredToOverHour}/>
            <CardList recipes={recipesToShow} />
        </>

        :
        <>
        <NavBar goHome={goHome} searchChange={searchChange} value={input} filteredToBreakFast={filteredToBreakFast} 
            filteredToLunch={filteredToLunch} filteredToDinner={filteredToDinner} filteredToSnack={filteredToSnack} 
            filteredToDessert={filteredToDessert} filteredToVegetarian={filteredToVegetarian} filteredToVegan={filteredToVegan} 
            filteredToMeatOnly={filteredToMeatOnly} filteredToPescatarian={filteredToPescatarian} filteredToHot={filteredToHot}
            filteredToMedium={filteredToMedium} filteredToMild={filteredToMild} filteredToSweet={filteredToSweet}
            filteredTo30mins={filteredTo30mins} filteredToHour={filteredToHour} filteredToOverHour={filteredToOverHour}/>
        <p>Loading...</p>
        </>
    )
}
export default HomePage;