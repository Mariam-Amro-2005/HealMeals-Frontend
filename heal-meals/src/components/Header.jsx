
function Header() {
    return <>
    <nav>
        <div className="logo">
            <img src={`${import.meta.env.BASE_URL}/logo-no-text.png`} alt="HealMeals Logo" />
            <h1>HealMeals</h1>
        </div>

        <div className="nav-links">
            <ul>
                <li><div className="nav-button">Home</div></li>  {/*could replace with button component later*/}
                <li><div className="nav-button">Donate</div></li>
                <li><div className="nav-button">Favorites</div></li>
                <li><div className="nav-button">Profile</div></li>
                <li><div className="nav-button">Sign out</div></li>
            </ul>
        </div>
    </nav>
    </>
}

export default Header;