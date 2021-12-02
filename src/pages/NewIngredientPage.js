import { useNavigate } from "react-router-dom";
import IngredientForm from "../components/IngredientForm";
import "../styles/Form.css"
import "../App.css"
import FormPageNavBar from "../components/FormPageNavBar";

const NewIngredientPage = () => {

    let navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return(
        <>
        <FormPageNavBar goHome={goHome}/>
        <h1 className="ingredientPageTitle">Add a new Ingredient</h1>
        <IngredientForm />
        </>
    )

}
export default NewIngredientPage