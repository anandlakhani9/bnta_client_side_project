import "../adapters/recipeAdapter"
import {useState, useEffect} from "react"
import {getAllRecipes} from "../adapters/recipeAdapter"
import CardList from "../components/CardList"

const HomePage = () => {
    const [recipes, setRecipes] = useState(null)

    useEffect(()=>{
        getAllRecipes().then(response => setRecipes(response))
    }, [])

    console.log(recipes)

    return (
        recipes ?
        <>
            <CardList recipes={recipes} />
        </>

        :
        
        <p>Loading...</p>
    )
}
export default HomePage;