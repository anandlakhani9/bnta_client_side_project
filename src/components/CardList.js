import Card from "./Card";

const CardList = (props) => {
    const recipeList = props.recipes
    return (
        <div>
            {recipeList.map(recipe => 
                <Card name={recipe.name} />)}
        </div>
    )

}

export default CardList