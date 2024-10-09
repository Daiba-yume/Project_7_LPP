// Importation des recettes et du modèle de carte
import { recipes } from "../data/recipes.js";
import { recipeTemplate } from "../templates/card.js";

// Fonction pour afficher les recettes dans la section
function displayData(recipes) {
  const recipesSection = document.querySelector(".recipesContainer");
  recipesSection.innerHTML = ""; // Nettoie la section avant d'afficher de nouvelles recettes

  // Création et ajout des cartes de recette
  recipes.forEach((recipe) => {
    const card = recipeTemplate(recipe).getRecipeCardDOM(); // Récupère et crée la carte
    recipesSection.appendChild(card); // Ajoute la carte à la section
  });

  updateTotalRecipe(recipes.length); // Met à jour le nombre total de recettes
}

// Fonction de recherche par titre
function searchRecipesByTitle(search = "") {
  // Filtre les recettes dont le titre contient la chaîne de caractères "search"
  const filteredRecipes = recipes.filter((recipe) =>
    // Rend la recherche insensible à la casse
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  // Affiche les noms des recettes trouvées dans la console
  console.log(
    "Recettes trouvées :",
    filteredRecipes.map((recipe) => recipe.name).join(", ")
  );

  displayData(filteredRecipes); // Affiche uniquement les recettes filtrées
}

// Met à jour le nombre total de recettes
function updateTotalRecipe(count) {
  document.querySelector(".numberRecipes").innerHTML = `${count} recettes`;
}

// Assure que le DOM est chargé avant d'ajouter les événements
document.addEventListener("DOMContentLoaded", () => {
  // Affiche toutes les recettes au chargement de la page
  searchRecipesByTitle();

  // Événement de recherche pour filtrer les recettes
  document.querySelector("#search").addEventListener("input", (e) => {
    searchRecipesByTitle(e.target.value); // Filtre les recettes par le titre
  });
});
