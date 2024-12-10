document.addEventListener("DOMContentLoaded", () => {
    const recipeContainer = document.getElementById("recipes");

    // Update the URL to point to your Heroku backend
    fetch("https://your-heroku-app.herokuapp.com/api/recipes")
        .then((response) => response.json())
        .then((recipes) => {
            recipes.forEach((recipe) => {
                const recipeCard = document.createElement("div");
                recipeCard.className = "recipe-card";
                recipeCard.innerHTML = `
                    <h3>${recipe.title}</h3>
                    <p>Category: ${recipe.category}</p>
                    <button onclick="viewRecipe('${recipe._id}')">View Details</button>
                `;
                recipeContainer.appendChild(recipeCard);
            });
        })
        .catch((error) => console.error("Error fetching recipes:", error));
});

function viewRecipe(recipeId) {
    window.location.href = /recipe.html?id=${recipeId};
}
