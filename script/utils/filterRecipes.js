"use strict";
// Fonction pour filtrer et afficher les recettes
export function filterRecipes(listRecipes, query) {
  query = query.toLowerCase();
  // Filtrer les recettes
  let results = [];
  for (let index = 0; index < listRecipes.length; index++) {
    let exist = false;
    const recipe = listRecipes[index];
    if (recipe.name.toLowerCase().includes(query)) {
      // Recherche par titre
      exist = true;
    }
    if (recipe.description.toLowerCase().includes(query)) {
      // Recherche par description)
      exist = true;
    }
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j];
      if (ingredient.ingredient.toLowerCase().includes(query)) {
        // Recherche par ingrédients)
        exist = true;
      }
    }

    if (exist) {
      results.push[recipe];
    }
  }

  return results;
}
