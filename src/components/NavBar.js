import '../styles/NavBar.css'
import ThemeToggle from './ThemeToggle';


const NavBar = ({searchChange}) => {

    return (
        <div className="navBar">
            <h1>Day Owls</h1>
            <input className="searchBar" type="search" placeholder="search..."  onChange = {searchChange}/>
            <button>Allergens</button>
            <ThemeToggle />
        </div>
    )
}

export default NavBar;