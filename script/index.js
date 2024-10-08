// Importation data recipes et model card recipe
import { recipes } from "./data/recipes.js";
import { recipeTemplate } from "./templates/card.js";
import { getUniqueItems, populateDropdown } from "./utils/dropdown.js";
import { selectItem } from "./utils/tag.js";

// Afficher les recettes dans la section
function displayData(recipes) {
  const recipesSection = document.querySelector(".recipesContainer");

  // Utilisation de map pour créer les cartes de recette
  recipes.map((recipe) => {
    const recipeModel = recipeTemplate(recipe); // Crée un modèle de recette à partir de l'objet recette
    const card = recipeModel.getRecipeCardDOM(); // Récupère le DOM de la carte de recette
    recipesSection.appendChild(card);
  });

  updateTotalRecipe(recipes);
}

// Event pour s'assurer que le DOM est complètement chargé
// Remplit les dropdowns avec les éléments uniques
document.addEventListener("DOMContentLoaded", () => {
  displayData(recipes); // Appelle la fonction pour afficher les recettes

  // Récupère les éléments des dropdowns
  const ingredientsDropdown = document.querySelector(".dropdown-ingredients");
  const appliancesDropdown = document.querySelector(".dropdown-appareils");
  const utensilsDropdown = document.querySelector(".dropdown-ustensiles");

  // Remplit les dropdowns avec les éléments uniques
  populateDropdown(ingredientsDropdown, getUniqueItems("ingredients"));
  populateDropdown(appliancesDropdown, getUniqueItems("appliance"));
  populateDropdown(utensilsDropdown, getUniqueItems("ustensils"));
});

function updateTotalRecipe(listRecipe) {
  const totalRecipe = document.querySelector(".numberRecipes");
  totalRecipe.innerHTML = listRecipe.length + " recettes";
}
