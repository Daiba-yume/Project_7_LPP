"use strict";

// Fonction pour créer un modèle de recette
export function recipeTemplate(recipe) {
  // Extraction des données de la recette à partir de l'objet passé en argument
  const {
    id,
    image,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
  } = recipe;

  // Fonction pour créer et retourner le DOM de la carte de recette
  function getRecipeCardDOM() {
    // Création de l'élément article
    const recipeCard = document.createElement("article");
    recipeCard.classList = "recipe_card";

    // Création de l'image de la recette
    const recipeImg = document.createElement("img");
    recipeImg.classList = "recipe_img";
    recipeImg.alt = `${name}`;
    recipeImg.src = `assets/img/${image}`;
    recipeCard.appendChild(recipeImg);

    // Création d'un conteneur pour le contenu de la recette
    const recipeContent = document.createElement("div");
    recipeContent.classList = "recipe_content";
    recipeCard.appendChild(recipeContent);

    // Création du titre de la recette
    const recipeTitle = document.createElement("h3");
    recipeTitle.classList = "recipe_title";
    recipeTitle.textContent = `${name}`;
    recipeContent.appendChild(recipeTitle);

    // Création d'un conteneur pour la description de la recette
    const recipeDescription = document.createElement("div");
    recipeDescription.classList = "recipe_description";
    recipeContent.appendChild(recipeDescription);

    // Création du titre 'RECETTE'
    const descriptionTitle = document.createElement("h4");
    descriptionTitle.classList = "description_title";
    descriptionTitle.innerText = "RECETTE";
    recipeDescription.appendChild(descriptionTitle);

    // Création du paragraphe de texte de description de la recette
    const descriptionText = document.createElement("p");
    descriptionText.classList = "description_text";
    descriptionText.innerText = `${description}`;
    recipeDescription.appendChild(descriptionText);

    // Création d'un conteneur pour les ingrédients de la recette
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList = "recipe_ingredients";
    recipeContent.appendChild(recipeIngredients);

    // Création du titre 'INGRÉDIENTS'
    const ingredientsTitle = document.createElement("h4");
    ingredientsTitle.classList = "ingredients_title";
    ingredientsTitle.innerText = "INGRÉDIENTS";
    recipeIngredients.appendChild(ingredientsTitle);

    // Création d'un conteneur pour la liste des ingrédients
    const recipeIngredientsList = document.createElement("div");
    recipeIngredientsList.classList = "recipe_ingredients_list";
    recipeIngredients.appendChild(recipeIngredientsList);

    // Ajoute de chaque ingrédient à la liste des ingrédients
    ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("p");
      ingredientItem.textContent = `${ingredient.quantity || ""} ${
        ingredient.unit || ""
      } ${ingredient.ingredient}`; // Texte de l'ingrédient
      recipeIngredientsList.appendChild(ingredientItem); // Ajout de l'ingrédient à la liste
    });

    // Return l'élément de la carte de recette
    return recipeCard;
  }

  //Return les propriétés de la recette et la fonction de création de carte
  return {
    id,
    image,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils,
    getRecipeCardDOM,
  };
}
