"use strict";
import { filterRecipes } from "./filterRecipes.js"; // Import de la fonction de filtrage
import { displayData } from "../index.js";
import { recipes } from "../data/recipes.js"; // Import des données de recettes
import { searchByTags } from "./filterByTags.js";
import {
  selectedTagsIng,
  selectedTagsUst,
  selectedTagsApp,
} from "./selectTag.js";

// Fonction principale qui gère la recherche et l'affichage des recettes
export const filteredRecipes = (recipes, searchBar) => {
  // Regex pour détecter les caractères spéciaux
  const specialRegex = /[<>!@#$%^&*()_+={}\[\]:;"'\\|,./?`~]/g;
  // KEYUP Exécute la recherche à chaque touche relâchée
  searchBar.addEventListener("keyup", (e) => {
    const query = e.target.value.toLowerCase(); // Valeur de la recherche en minuscule
    // Vérifie si la valeur contient des caractères spéciaux
    if (specialRegex.test(query)) {
      console.log(
        "Les caractères spéciaux comme '<', '>', '!', '@', etc. ne sont pas autorisés."
      );
    }
    // Supprime les caractères spéciaux avant le traitement
    const sanitizedQuery = query.replace(specialRegex, "");

    // cache ou montre le button d'effacement
    if (sanitizedQuery.length === 0) {
      document.getElementById("buttonErase").style.display = "none";
    } else {
      document.getElementById("buttonErase").style.display = "block";
    }
    // si l'user a saisi au moins 3 caractères
    if (sanitizedQuery.length >= 3) {
      let listRecipes = filterRecipes(recipes, sanitizedQuery); // Appelle la fonction de filtrage
      listRecipes = searchByTags(
        listRecipes,
        selectedTagsIng,
        selectedTagsUst,
        selectedTagsApp
      );
      displayData(listRecipes);
    } else {
      let listRecipes = searchByTags(
        recipes,
        selectedTagsIng,
        selectedTagsUst,
        selectedTagsApp
      );
      displayData(listRecipes); // Réaffiche toutes les recettes
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
