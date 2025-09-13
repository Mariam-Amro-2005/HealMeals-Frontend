import Footer from "../components/Footer";
import Header from "../components/Header";
import InputField from "../components/InputField";
import Recipes from "../components/Recipes";
import { useState } from "react";
import { Link } from "react-router-dom"

// import "../css/home.css"

function Home() {
    const [logged, setLogged] = useState(false);
    const [inputValue, setInputValue] = useState("");
    
    return <>
    <Header />

    <section className="welcome-container">
        {/* <div className="welcome-image">
            <img src="./main-background.jpg" alt="Welcome to HealMeals" />
        </div> */}

        <div className="welcome-text">
            <h3>Welcome to <span className="highlight">HealMeals</span></h3>
            <p>
                Healthy eating made simple, joyful, and safe. 
                Whatever your allergies, dietary needs, or health condtions, we've got you covered.
            </p>

            <p>
                Discover delicious recipes tailored just for you, because eating well should always feel good.
            </p>
        </div>

        <div className="discover-button">
            <Link to="/search">
                <div className="discover-text">Discover More Recipes</div>
                <img src="./discover.svg" alt = "discover icon" />
            </Link>
        </div>
    </section>


    {/* <InputField 
        label="Search Recipes"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
    /> */}

    <Recipes displayTitle="Most Popular Recipes" />
    { logged? 
    <Recipes displayTitle="Recently Viewed Recipes" show={true}/>
    : (
        <section className="how-it-works-container">
        <div className="how-it-works-image">
            <img src="./learning-to-cook.jpg" alt="Learning to Cook" />
        </div>

        <div className="how-it-works-description">
            <h2 className="how-it-works-title">How It Works</h2>
            <div className="steps-container">
                <div className="step">
                    <h3 className="step-title">Step 1 - Create Profile</h3>
                    
                    <p className="step-content">Tell us about your health conditions, allergies,
                        and dietary preferences so we can tailor our recipes to your needs.
                    </p>
                </div>
                <div className="step">
                    <h3 className="step-title">Step 2 - Get Your Recommenations</h3>

                    <p className="step-content"> Our smart filtering instantly finds safe, delicious meals
                        that match your profile.
                    </p>
                </div>
                <div className="step">
                    <h3 className="step-title">Step 3 - Save Your Favaorites</h3>

                    <p className="step-content">Keep track of the recipes you love and access them anytime, on any device.</p>
                </div>
                <div className="step">
                    <h3 className="step-title">Step 4 - Coot & Enjoy</h3>

                    <p className="step-content">Follow clear step-by-step instructions and eat with 
                        confidence - because healthy eating should never be a compromise.
                    </p>
                </div>
            </div>

            <div className="signup-banner">
                <h2>Ready to Get Started?</h2>
                <p>Sign up now to receive personalized meal recommendations!</p>
                <div className="signup-button">Sign Up</div>
            </div>
        </div>
    </section>
    ) }

    <section className="about-container">
        <div className="about-image">
            <img src="./logo.svg" alt="HealMeals Full Logo" />
        </div>
        <div className="about-description">
            <h2 className="about-title">About HealMeals</h2>
            <p>
                HealMeals was created with one simple goal: to make safe, delicious, 
                and nutritious meals accessible to everyone, no matter their health 
                or dietary needs. We understand how challenging it can be to find recipes 
                that work with allergies, medical conditions, or lifestyle choices — so 
                we built a platform that takes the guesswork out of eating well. 
            </p>

            <p>
                Our recipe recommendations are tailored to each user’s profile, filtering 
                out harmful ingredients and highlighting meals you can truly enjoy. 
                Whether you’re managing a condition, following a specific diet, or simply 
                trying to make healthier choices, HealMeals is here to guide you every step of 
                the way.
            </p>

            <p>
                We believe food should be both nourishing and joyful — 
                because when you eat well, you live better.
            </p>
        </div>
    </section>

    <section className="disclaimer-container">
        <div className="disclaimer-description">
            <h2 className="disclaimer-title">Medical Disclaimer</h2>
            <p>
                Our recipe recommendations are tailored to each user’s profile, 
                filtering out harmful ingredients and highlighting meals you can truly enjoy. 
                Whether you’re managing a condition, following a specific diet, or simply 
                trying to make healthier choices, HealMeals is here to guide you every 
                step of the way.
            </p>
        </div>
        
        <div className="disclaimer-image">
            <img src="#" alt="Disclaimer Image" />
        </div>
    </section>

    <Footer />
    </>
}

export default Home

