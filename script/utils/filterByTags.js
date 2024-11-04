"use strict";
// On cherche un tag dans la liste des ingrédients
function searchInIng(listRecipes, selectedTag) {
  selectedTag = selectedTag.toLowerCase();
  const results = listRecipes.filter((recipe) =>
    // Vérifie si un tag d'ingrédient correspond
    recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(selectedTag)
    )
  );
  return results;
}

// On cherche un tag dans la liste des appareils
function searchInApp(listRecipes, selectedTag) {
  selectedTag = selectedTag.toLowerCase();
  const results = listRecipes.filter((recipe) =>
    // Vérifie si un tag d'appareil correspond
    recipe.appliance.toLowerCase().includes(selectedTag)
  );
  return results;
}

// On cherche un tag dans la liste des ustensiles
function searchInUst(listRecipes, selectedTag) {
  selectedTag = selectedTag.toLowerCase();
  const results = listRecipes.filter((recipe) =>
    // Vérifie si un tag d'ustensile correspond
    recipe.ustensils.some((ustensil) =>
      ustensil.toLowerCase().includes(selectedTag)
    )
  );
  return results;
}

// Fonction principale qui filtre les recettes par
// tags d'ingrédients, ustensiles et appareils
export function searchByTags(
  recipes,
  selectedTagsIng,
  selectedTagsUst,
  selectedTagsApp
) {
  let filtredRecipes = recipes;
  // Filtre les recettes par ingredients
  selectedTagsIng.forEach((selectedTag) => {
    filtredRecipes = searchInIng(filtredRecipes, selectedTag);
  });
  console.log(filtredRecipes);
  // Filtre les recettes par applicances
  selectedTagsApp.forEach((selectedTag) => {
    filtredRecipes = searchInApp(filtredRecipes, selectedTag);
  });
  // Filtre les recettes par ustensiles
  selectedTagsUst.forEach((selectedTag) => {
    filtredRecipes = searchInUst(filtredRecipes, selectedTag);
  });
  return filtredRecipes; // Retourne les recettes filtrées
}
