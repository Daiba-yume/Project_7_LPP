// filterByTags.js

// Filtre les recettes selon les tags sélectionnés.

export function searchByTags(recipes, selectedTags) {
  return recipes.filter((recipe) => {
    // Vérifie si un tag d'ingrédient correspond
    const ingredientsMatch = selectedTags.ingredients.some((tag) =>
      recipe.ingredients.includes(tag)
    );

    // Vérifie si un tag d'appareil correspond
    const appliancesMatch = selectedTags.appliances.some(
      (tag) => recipe.appliance === tag
    );

    // Vérifie si un tag d'ustensile correspond
    const utensilsMatch = selectedTags.utensils.some((tag) =>
      recipe.ustensils.includes(tag)
    );

    // Retourne vrai si au moins un tag de chaque catégorie correspond
    return ingredientsMatch || appliancesMatch || utensilsMatch;
  });
}
