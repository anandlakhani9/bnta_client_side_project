import "../adapters/recipeAdapter"
import {useState, useEffect} from "react"
import {getAllRecipes} from "../adapters/recipeAdapter"
import CardList from "../components/CardList"
import NavBar from "../components/NavBar"

const HomePage = () => {
    const [recipes, setRecipes] = useState(null);
    const [input, setInput] = useState("");

    useEffect(()=>{
        getAllRecipes().then(response => setRecipes(response.filter((recipes)=>{
            return recipes.name.toLowerCase().includes(input.toLowerCase())
        })))
    }, [])

    const searchChange = (s) => {
        console.log(s.target.value)
        setInput(s.target.value)
    };


    const filteredRecipes = 
    recipes ?
        recipes.filter((recipes)=>{
            return recipes.name.toLowerCase().includes(input.toLowerCase());
        })
        :
        null;
        

    return (
        recipes ?
        <>
            <NavBar searchChange={searchChange} value={input} />
            <CardList recipes={filteredRecipes} />
        </>

        :
        
        <p>Loading...</p>
    )
}
export default HomePage;