import { recipes } from "../data/recipes.js";

// Récupère les éléments uniques depuis les recettes
function getUniqueItems(key) {
  const items = new Set(); // Évite les doublons
  recipes.forEach((recipe) => {
    if (key === "ingredients") {
      recipe.ingredients.forEach((ingredientObj) =>
        items.add(ingredientObj.ingredient)
      );
    } else if (key === "appliance") {
      items.add(recipe.appliance);
    } else if (key === "ustensils") {
      recipe.ustensils.forEach((ustensil) => items.add(ustensil));
    }
  });
  return [...items]; // Retourne un tableau
}

// Remplit les dropdowns avec des éléments
function populateDropdown(dropdownElement, items) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  dropdownList.innerHTML = ""; // Vide la liste

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => selectItem(item, dropdownElement); // Gère la sélection
    dropdownList.appendChild(li);
  });
}

// Gère la sélection d'un élément
function selectItem(item, dropdownElement) {
  const selectedItemsContainer =
    dropdownElement.querySelector(".selected-items");

  // Si le conteneur des éléments sélectionnés n'existe pas, on le crée
  if (!selectedItemsContainer) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("selected-items");
    dropdownElement.appendChild(newContainer);
  }

  const selectedItem = document.createElement("span");
  selectedItem.textContent = item;
  selectedItem.classList.add("selected-item");
  dropdownElement.querySelector(".selected-items").appendChild(selectedItem);
}

// Récupère les éléments des dropdowns
const ingredientsDropdown = document.querySelector(".dropdown-ingredients");
const appliancesDropdown = document.querySelector(".dropdown-appareils");
const utensilsDropdown = document.querySelector(".dropdown-ustensiles");

// Remplit les dropdowns avec les éléments uniques
populateDropdown(ingredientsDropdown, getUniqueItems("ingredients"));
populateDropdown(appliancesDropdown, getUniqueItems("appliance"));
populateDropdown(utensilsDropdown, getUniqueItems("ustensils"));

// Bascule la visibilité des dropdowns
[ingredientsDropdown, appliancesDropdown, utensilsDropdown].forEach(
  (dropdown) => {
    const titleSection = dropdown.querySelector(".dropdown-btn");
    titleSection.onclick = () => {
      const content = dropdown.querySelector(".dropdown-content");
      content.classList.toggle("active"); // Active ou désactive le dropdown
    };
  }
);
