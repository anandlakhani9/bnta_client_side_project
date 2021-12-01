import { useNavigate } from "react-router-dom";
import IngredientForm from "../components/IngredientForm";
import "../styles/Form.css"

const NewIngredientPage = () => {
    return(
        <>
        <h1 className="header">Add a new Ingredient</h1>
        <IngredientForm />
        </>
    )

}
export default NewIngredientPage