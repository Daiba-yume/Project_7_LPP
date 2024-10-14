// displayRecipes.js
import { recipeTemplate } from "../templates/card.js";

// Fonction pour afficher toutes les recettes
export const displayAllRecipes = (recipes, recipesSection) => {
  recipesSection.innerHTML = ""; // Vide les résultats précédents
  recipes.forEach((recipe) => {
    const recipeCard = recipeTemplate(recipe).getRecipeCardDOM();
    recipesSection.appendChild(recipeCard); // Ajoute toutes les cartes des recettes
  });
};
