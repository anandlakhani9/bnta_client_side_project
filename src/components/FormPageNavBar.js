import '../styles/NavBar.css'
import ThemeToggle from './ThemeToggle';


const FormPageNavBar = ({goHome}) => {


    return (
        <div>
            <div className="navBar">
            <h1 onClick={goHome}>Day Owls</h1>
            <ThemeToggle />
            </div>
        </div>
    )
}

export default FormPageNavBar;