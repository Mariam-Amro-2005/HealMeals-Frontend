import { Link } from "react-router-dom";
import "../css/home.css";

function Header() {
    // const logoPath = `${import.meta.env.BASE_URL}/logo-no-text.jpg`;
    const logoPath = "./logo.svg";
    return <>
    <nav className="navbar">
        <div className="logo">
            <img src={logoPath} alt="HealMeals Logo" />
            <h1>HealMeals</h1>
        </div>

        <div className="nav-links">
            <ul>
                <li><Link to="/"><div className="nav-button">Home</div></Link></li>  {/*could replace with button component later*/}
                <li><Link to="/donate"><div className="nav-button">Donate</div></Link></li>
                <li><Link to="/favorites"><div className="nav-button">Favorites</div></Link></li>
                <li><Link to="/profile"><div className="nav-button">Profile</div></Link></li>
                <li><Link to="/"><div className="nav-button" onClick={console.log("Signed out, switching home view")}>Sign out</div></Link></li>
            </ul>
        </div>
    </nav>
    </>
}

export default Header;