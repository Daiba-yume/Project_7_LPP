import { recipes } from "../data/recipes.js";

// Function to extract unique items from the recipes
function getUniqueItems(key) {
  const items = new Set(); // Use a Set to avoid duplicates
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
  return [...items]; // Convert Set back to an array
}

// Function to populate the dropdowns
function populateDropdown(dropdownElement, items) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  dropdownList.innerHTML = ""; // Clear previous list items

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dropdownList.appendChild(li);
  });
}

// Getting dropdown elements
const ingredientsDropdown = document.querySelector(".dropdown-ingredients");
const appliancesDropdown = document.querySelector(".dropdown-appareils");
const utensilsDropdown = document.querySelector(".dropdown-ustensiles");

// Populate the dropdowns
populateDropdown(ingredientsDropdown, getUniqueItems("ingredients"));
populateDropdown(appliancesDropdown, getUniqueItems("appliance"));
populateDropdown(utensilsDropdown, getUniqueItems("ustensils"));
