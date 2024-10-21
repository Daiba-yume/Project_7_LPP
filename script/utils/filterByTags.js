// On cherche un tag dans la liste des ingrédients
function searchInIng(recipes, selectedTag) {
  selectedTag = selectedTag.tolowerCase();
  return recipes.filter((recipe) => {
    // Vérifie si un tag d'ingrédient correspond
    recipe.ingredients.some((ingredient) =>
      ingredient.tolowerCase().includes(selectedTag)
    );
  });
}
// On cherche un tag dans la liste des ustensiles
function searchInUst(recipes, selectedTag) {
  selectedTag = selectedTag.tolowerCase();
  return recipes.filter((recipe) => {
    // Vérifie si un tag d'ustensile correspond
    recipe.ustensils.some((ustensil) =>
      ustensil.tolowerCase().includes(selectedTag)
    );
  });
}
// On cherche un tag dans la liste des appareils
function searchInApp(recipes, selectedTag) {
  selectedTag = selectedTag.tolowerCase();
  return recipes.filter((recipe) => {
    // Vérifie si un tag d'appareil correspond
    recipe.appliances.tolowerCase().includes(selectedTag);
  });
}

// Fonction principale qui filtre les recettes par
// tags d'ingrédients, ustensiles et appareils
export function searchByTags(
  recipes,
  selectedTagsIng,
  selectedTagsUst,
  selectedTagsApp
) {
  let filtredRecipes = Set();
  // Filtre les recettes par ingredients
  selectedTagsIng.forEach((selectedTag) => {
    let listfiltredIng = searchInIng(recipes, selectedTag);
    // Ajoute les résultats au set
    filtredRecipes.push[listfiltredIng];
  });
  // Filtre les recettes par applicances
  selectedTagsApp.forEach((selectedTag) => {
    let listfiltredApp = searchInApp(listfiltredIng, selectedTag);
    // Ajoute les résultats au set
    filtredRecipes.push[listfiltredApp];
  });
  // Filtre les recettes par ustensiles
  selectedTagsUst.forEach((selectedTag) => {
    let listfiltredUst = searchInUst(listfiltredIng, selectedTag);
    // Ajoute les résultats au set
    filtredRecipes.push[listfiltredUst];
  });
  return filtredRecipes; // Retourne les recettes filtrées
}
