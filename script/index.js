// Importation data recipes et model card recipe
import { recipes } from "./data/recipes.js";
import { recipeTemplate } from "./templates/card.js";
import { filterDropdown } from "./utils/dropdownFilter.js";

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

// Utilise la fonction pour chaque catégorie
filterDropdown("ingredient-search", "ingredientsList");
filterDropdown("appliance-search", "appliancesList");
filterDropdown("utensil-search", "utensilsList");

displayData(recipes); // Appelle la fonction pour afficher les recettes

// Met à jour le nombre total de recettes
function updateTotalRecipe(listRecipe) {
  const totalRecipe = document.querySelector(".numberRecipes");
  totalRecipe.innerHTML = listRecipe.length + " recettes";
}
