// filteredRecipes.js
import { filterRecipes } from "./filterRecipes.js"; // Import de la fonction de filtrage
import { displayData } from "../index.js";
import { recipes } from "../data/recipes.js"; // Import des données de recettes

// Fonction principale qui gère la recherche et l'affichage des recettes
const filteredRecipes = (recipes, searchBar) => {
  // KEYUP Exécute la recherche à chaque touche relâchée
  searchBar.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase(); // Valeur de la recherche en minuscule
    // cache le button
    if (query.length === 0) {
      document.getElementById("buttonErase").style.display = "none";
    } else {
      document.getElementById("buttonErase").style.display = "block";
    }
    // si l'user a saisi au moins 3 caractères
    if (query.length >= 3) {
      filterRecipes(recipes, query); // Appelle la fonction de filtrage
    } else {
      displayData(recipes); // Réaffiche toutes les recettes
    }
  });

  // Gestion du bouton erase
  const eraseButton = document.getElementById("buttonErase");
  eraseButton.addEventListener("click", () => {
    searchBar.value = ""; // Réinitialise la barre de recherche
    document.getElementById("buttonErase").style.display = "none"; // Cache le bouton immédiatement
    displayData(recipes); // Réaffiche toutes les recettes
  });
};

// Appel de la fonction avec les recettes et l'élément input
const searchBar = document.getElementById("search");
console.log(recipes); // Vérifie si les données des recettes sont chargées

filteredRecipes(recipes, searchBar); // Appelle la fonction principale pour gérer la recherche
