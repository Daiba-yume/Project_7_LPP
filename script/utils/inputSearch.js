// filteredRecipes.js
import { filterRecipes } from "./filterRecipes.js"; // Import de la fonction de filtrage
import { displayAllRecipes } from "./displayRecipes.js"; // Import de la fonction d'affichage
import { recipes } from "../data/recipes.js"; // Import des données de recettes

const filteredRecipes = (recipes, searchBar) => {
  const recipesSection = document.querySelector(".recipesContainer");

  searchBar.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase(); // Valeur de la recherche en minuscule

    if (query.length >= 3) {
      filterRecipes(recipes, query, recipesSection); // Appelle la fonction de filtrage
    } else {
      displayAllRecipes(recipes, recipesSection); // Réaffiche toutes les recettes
    }
  });

  // Gestion du bouton erase
  const eraseButton = document.getElementById("button-erase");
  eraseButton.addEventListener("click", () => {
    searchBar.value = "";
    displayAllRecipes(recipes, recipesSection); // Réaffiche toutes les recettes
  });
};

// Appel de la fonction avec les recettes et l'élément input
const searchBar = document.getElementById("search");
console.log(recipes); // Vérifie si les données des recettes sont chargées

filteredRecipes(recipes, searchBar);
