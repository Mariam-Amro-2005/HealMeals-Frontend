import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import "../css/recipes.css";

function Recipes(props) {
    const displayTitle = props.displayTitle || "Recipe List";

    const recipes = [
        { id: 1, recipePreview: { title: "Recipe 1" } },
        { id: 2, recipePreview: { title: "Recipe 2", description: "Description for Recipe 2", image: "recipe2.jpg" } },
        { id: 3, recipePreview: { title: "Recipe 3", description: "Description for Recipe 3", image: "recipe3.webp" } },
    ];
    
    return <>
    <div className={`recipes-display ${props.show ? "recently-viewed" : ""} `}>
        <h1>{displayTitle}</h1>

        <div className="recipes-container">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} id={recipe.id} recipePreview={recipe.recipePreview} />
            ))}
        </div>

        {/* <div className="recipes-pagination" style={{display: "flex"}}>
            <button className="prev-button"> &laquo; </button>
            <button className="next-button"> &raquo; </button>
        </div> */}
        {/* <Pagination totalPages={Math.ceil(recipes.length / 3)} /> */}
        <Pagination totalPages={12} />
    </div>
    </>
}

export default Recipes;