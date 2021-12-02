import { useNavigate } from "react-router-dom";
import FormPageNavBar from "../components/FormPageNavBar";
import RecipeForm from "../components/RecipeForm";
import "../styles/Form.css"
import "../App.css"

const NewRecipePage = () => {

    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return(
        <>
        <FormPageNavBar goHome={goHome}/>
        <h1 className="recipePageTitle">Add a new Recipe</h1>
        <RecipeForm />
        </>
    )

}
export default NewRecipePage