"use strict";

// On cherche un tag dans la liste des ingrédients
function searchInIng(listRecipes, selectedTag) {
  // Met le tag sélectionné en minuscules pour ignorer la casse
  selectedTag = selectedTag.toLowerCase();
  let results = []; // Initialise un tableau pour stocker les recettes correspondantes

  // Parcourt chaque recette de la liste
  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    let tag = false; // Indique si le tag est présent

    // Parcourt chaque ingrédient de la recette
    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j].ingredient.toLowerCase(); // Met l'ingrédient en minuscules

      // Vérifie si l'ingrédient contient le tag sélectionné
      if (ingredient.includes(selectedTag)) {
        tag = true; // Marque que le tag a été trouvé
        break; // Sort de la boucle des ingrédients
      }
    }

    // Si le tag a été trouvé dans les ingrédients, add la recette aux résultats
    if (tag) {
      results.push(recipe);
    }
  }

  return results; // Retourne les recettes correspondantes
}

// On cherche un tag dans la liste des appareils
function searchInApp(listRecipes, selectedTag) {
  // Met le tag sélectionné en minuscules pour ignorer la casse
  selectedTag = selectedTag.toLowerCase();
  let results = []; // Initialise un tableau pour stocker les recettes correspondantes

  // Parcourt chaque recette de la liste
  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    const appliance = recipe.appliance.toLowerCase(); // Met l'appareil en minuscules

    // Vérifie si l'appareil contient le tag sélectionné
    if (appliance.includes(selectedTag)) {
      results.push(recipe); // add la recette aux résultats
    }
  }

  return results; // Retourne les recettes correspondantes
}

// On cherche un tag dans la liste des ustensiles
function searchInUst(listRecipes, selectedTag) {
  // Met le tag sélectionné en minuscules pour ignorer la casse
  selectedTag = selectedTag.toLowerCase();
  let results = []; // Initialise un tableau pour stocker les recettes correspondantes

  // Parcourt chaque recette de la liste
  for (let i = 0; i < listRecipes.length; i++) {
    const recipe = listRecipes[i];
    let tag = false; // Indique si le tag est présent

    // Parcourt chaque ustensile de la recette
    for (let j = 0; j < recipe.ustensils.length; j++) {
      const ustensil = recipe.ustensils[j].toLowerCase(); // Met l'ustensile en minuscules

      // Vérifie si l'ustensile contient le tag sélectionné
      if (ustensil.includes(selectedTag)) {
        tag = true; // Marque que le tag a été trouvé
        break; // Sort de la boucle des ustensiles
      }
    }

    // Si le tag a été trouvé dans les ustensiles, add la recette aux résultats
    if (tag) {
      results.push(recipe);
    }
  }

  return results; // Retourne les recettes correspondantes
}

// Fonction principale qui filtre les recettes par
// tags d'ingrédients, ustensiles et appareils
export function searchByTags(
  recipes,
  selectedTagsIng,
  selectedTagsUst,
  selectedTagsApp
) {
  let filtredRecipes = recipes; // Initialisation des recettes filtrées avec toutes les recettes
  // Filtre les recettes par ingredients
  let i = 0;
  while (i < selectedTagsIng.length) {
    let selectedTag = selectedTagsIng[i]; // Récupère chaque ingrédient sélectionné
    filtredRecipes = searchInIng(filtredRecipes, selectedTag); // Filtre les recettes
    ++i;
  }
  console.log(filtredRecipes);
  // Filtre les recettes par applicances
  i = 0;
  while (i < selectedTagsApp.length) {
    let selectedTag = selectedTagsApp[i]; // Récupère chaque appareil sélectionné
    filtredRecipes = searchInApp(filtredRecipes, selectedTag); // Filtre les recettes
    ++i;
  }

  // Filtre les recettes par ustensiles
  i = 0;
  while (i < selectedTagsUst.length) {
    let selectedTag = selectedTagsUst[i]; // Récupère chaque ustensil sélectionné
    filtredRecipes = searchInUst(filtredRecipes, selectedTag); // Filtre les recettes
    ++i;
  }

  return filtredRecipes; // Retourne les recettes filtrées
}
