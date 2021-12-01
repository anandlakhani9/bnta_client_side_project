import Card from "./Card";
import '../styles/CardList.css'

const CardList = (props) => {
    const recipeList = props.recipes
    return (
        <div className="cardList" >
            {recipeList.map(recipe => 
                <Card 
                    name={recipe.name} 
                    key={recipe.id}
                    id={recipe.id} 
                    isVegan={recipe.vegan} 
                    isVegetarian={recipe.vegetarian}
                    isMeatOnly={recipe.meatOnly}
                    isPescatarian={recipe.pescatarian}
                    className="recipeCard"
                />
            )}
        </div>
    )

}

export default CardList