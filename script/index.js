// Importation data recipes et model card recipe
import { recipes } from "./data/recipes.js";
import { recipeTemplate } from "./templates/card.js";

// Afficher les recettes dans la section
function displayData(recipes) {
  const recipesSection = document.querySelector(".recipesContainer");

  // Utilisation de map pour créer les cartes de recette
  recipes.map((recipe) => {
    const card = recipeTemplate(recipe).getRecipeCardDOM(); // Récupère et crée la carte
    recipesSection.appendChild(card);
  });

  updateTotalRecipe(recipes);
}

// Event pour s'assurer que le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
  displayData(recipes); // Appelle la fonction pour afficher les recettes
});

function updateTotalRecipe(listRecipe) {
  const totalRecipe = document.querySelector(".numberRecipes");
  totalRecipe.innerHTML = listRecipe.length + " recettes";
}
