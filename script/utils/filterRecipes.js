"use strict";
// Fonction pour filtrer et afficher les recettes
export const filterRecipes = (recipes, query) => {
  query = query.toLowerCase();
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
  return results;
};
