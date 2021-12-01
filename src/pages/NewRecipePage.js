import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";
import "../styles/Form.css"

const NewRecipePage = () => {
    return(
        <>
        <h1 className="header">Add a new Recipe</h1>
        <RecipeForm />
        </>
    )

}
export default NewRecipePage