// Importation data recipes et model card recipe
import { recipes } from "./data/recipes.js";
import { recipeTemplate } from "./templates/card.js";

// Afficher les recettes dans la section
export const displayData = (recipes) => {
  const recipesSection = document.querySelector(".recipesContainer");
  recipesSection.innerHTML = "";
  // Utilisation de map pour créer les cartes de recette
  recipes.map((recipe) => {
    const card = recipeTemplate(recipe).getRecipeCardDOM(); // Récupère et crée la carte
    recipesSection.appendChild(card);
  });

  updateTotalRecipe(recipes);
};

// Event pour s'assurer que le DOM est complètement chargé

displayData(recipes); // Appelle la fonction pour afficher les recettes

// Met à jour le nombre total de recettes
function updateTotalRecipe(listRecipe) {
  const totalRecipe = document.querySelector(".numberRecipes");
  totalRecipe.innerHTML = listRecipe.length + " recettes";
}
