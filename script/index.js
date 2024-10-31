// Importation data recipes et model card recipe
import { recipes } from "./data/recipes.js";
import { recipeTemplate } from "./templates/card.js";
import { inputTag } from "./utils/inputTag.js";
import { initializeDropdownEvents } from "./utils/dropdownEvent.js";

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

// Initialise les événements pour chaque catégorie de dropdown
initializeDropdownEvents(
  "ingredientsDropdown",
  "ingredient-search",
  "eraseIng",
  "searchIconIng"
);
initializeDropdownEvents(
  "appliancesDropdown",
  "appliance-search",
  "eraseAppl",
  "searchIconAppl"
);
initializeDropdownEvents(
  "utensilsDropdown",
  "utensil-search",
  "eraseUsten",
  "searchIconUsten"
);

// Utilise la fonction pour chaque catégorie
inputTag("ingredient-search", "ingredientsList");
inputTag("appliance-search", "appliancesList");
inputTag("utensil-search", "utensilsList");

displayData(recipes); // Appelle la fonction pour afficher les recettes

// Met à jour le nombre total de recettes
export function updateTotalRecipe(listRecipe) {
  const totalRecipe = document.querySelector(".numberRecipes");
  totalRecipe.innerHTML = listRecipe.length + " recettes";
}
