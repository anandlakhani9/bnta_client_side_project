import '../styles/FormPageNavBar.css'
import ThemeToggle from './ThemeToggle';


const FormPageNavBar = ({goHome}) => {


    return (
            <div className="FormPageNavBar">
            <h1 onClick={goHome}>Day Owls</h1>
            <ThemeToggle />
            </div>
    )
}

export default FormPageNavBar;