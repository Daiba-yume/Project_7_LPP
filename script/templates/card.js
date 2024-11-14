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

    // Création d'une balise pour la durée de préparation (span)

    const recipeDuration = document.createElement("span");
    recipeDuration.classList = "recipe_duration";
    recipeDuration.textContent = `${time}min`;
    recipeCard.appendChild(recipeDuration);

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
    const recipeTitle = document.createElement("h1");
    recipeTitle.classList = "recipe_title";
    recipeTitle.textContent = `${name}`;
    recipeContent.appendChild(recipeTitle);

    // Création d'un conteneur pour la description de la recette
    const recipeDescription = document.createElement("div");
    recipeDescription.classList = "recipe_description";
    recipeContent.appendChild(recipeDescription);

    // Création du titre 'RECETTE'
    const descriptionTitle = document.createElement("h2");
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
    const ingredientsTitle = document.createElement("h3");
    ingredientsTitle.classList = "ingredients_title";
    ingredientsTitle.innerText = "INGRÉDIENTS";
    recipeIngredients.appendChild(ingredientsTitle);

    // Création d'un conteneur pour la liste des ingrédients
    const recipeIngredientsList = document.createElement("div");
    recipeIngredientsList.classList = "recipe_ingredients_list";
    recipeIngredients.appendChild(recipeIngredientsList);

    // Création d'un titre (h5) et d'un paragraphe (p) de descrition pour chaque ingrédient

    ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("div");
      ingredientItem.classList = "recipe_ingredient";

      const ingredientTitle = document.createElement("h4");
      ingredientTitle.classList = "ingredient_title";
      ingredientTitle.innerText = `${ingredient.ingredient}`;
      ingredientItem.appendChild(ingredientTitle);

      const ingredientText = document.createElement("p");
      ingredientText.classList = "ingredient_text";
      ingredientText.textContent = ingredient.quantity
        ? ingredient.unit
          ? `${ingredient.quantity} ${ingredient.unit}`
          : ingredient.quantity
        : "-";
      ingredientItem.appendChild(ingredientText);

      recipeIngredientsList.appendChild(ingredientItem);
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
