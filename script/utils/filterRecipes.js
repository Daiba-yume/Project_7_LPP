// filterRecipes.js
import { recipeTemplate } from "../templates/card.js";

// Fonction pour filtrer et afficher les recettes
export const filterRecipes = (recipes, query, recipesSection) => {
  recipesSection.innerHTML = ""; // Vide les résultats précédents

  // Filtrer les recettes
  const results = recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(query) || // Recherche par titre
      recipe.description.toLowerCase().includes(query) || // Recherche par description
      recipe.ingredients.some(
        (ingredient) => ingredient.ingredient.toLowerCase().includes(query) // Recherche par ingrédients
      )
    );
  });

  console.log(results); // Affiche les résultats dans la console pour déboguer

  // Vérifie si des résultats existent
  if (results.length > 0) {
    // Si des résultats sont trouvés, crée et ajoute les cartes dans le DOM
    results.forEach((recipe) => {
      const recipeCard = recipeTemplate(recipe).getRecipeCardDOM();
      recipesSection.appendChild(recipeCard); // Ajoute la carte dans la section des recettes
    });
  } else {
    // Si aucun résultat, affiche un message d'erreur
    const noResultsDiv = document.createElement("div");
    noResultsDiv.classList.add("no__results");
    noResultsDiv.textContent = `Aucune recette ne contient « ${query} ». Vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
    recipesSection.appendChild(noResultsDiv);
  }
};
