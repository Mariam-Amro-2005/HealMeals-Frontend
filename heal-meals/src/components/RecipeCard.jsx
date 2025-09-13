import { Link } from "react-router-dom";

function RecipeCard(props) {
    const { id, recipePreview } = props;
    const { title, description, image } = recipePreview; 
    return <>
    <div className="recipe-card">
        <img src={ image ? image : "./recipe1.webp"} />
        
        <div className="recipe-info">
            <h2>{ title ? title : "Recipe Card"}</h2>

            <p> { description ? description : "A quick description of the recipe."} </p>

            <Link to={ `/recipe/${id}` }>
                <div className="view-recipe-button">View Recipe</div>
            </Link>
        </div>

    </div>
    </>
}

export default RecipeCard;