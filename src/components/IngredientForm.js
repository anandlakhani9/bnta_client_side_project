
const ingredientForm = () => {

    const handleFormSubmission = (event) => {
        event.preventDefault
    }
    
    return(
        <form onSubmit={handleFormSubmission}>
            <p>Add new ingredient</p>
            <input type="text"></input>
            <p> Allergen</p>
            <input type="text"></input>
            
        </form>

    )
    
}

export default ingredientForm;