import Card from "./Card";
import '../styles/CardList.css'

const CardList = (props) => {
    const recipeList = props.recipes
    return (
        <div className="cardList" >
            {recipeList.map(recipe => 
                <Card name={recipe.name} key={recipe.id} className="recipeCard"/>)}
        </div>
    )

}

export default CardList