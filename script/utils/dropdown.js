import { recipes } from "../data/recipes.js";
import { selectItem } from "./tag.js";

// Récupère les éléments uniques depuis les recettes
export function getUniqueItems(key) {
  const items = new Set();
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
  return [...items];
}

// Remplit les dropdowns avec des éléments
export function populateDropdown(dropdownElement, items) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  dropdownList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = (e) => {
      e.stopPropagation(); // Empêche le clic sur li de fermer le dropdown
      selectItem(item, dropdownElement); // Appelle la fonction pour gérer la sélection
    };
    dropdownList.appendChild(li);
  });
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
    const button = dropdown.querySelector(".dropdown-btn");
    const content = dropdown.querySelector(".dropdown-content");
    const icon = dropdown.querySelector("i");

    button.onclick = (e) => {
      e.stopPropagation(); // Empêche la propagation pour ne pas fermer le dropdown
      content.classList.toggle("active"); // Active ou désactive le dropdown
      button.classList.toggle("open"); // Ajoute ou retire la classe pour le style
      icon.style.transform = content.classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0deg)"; // Fait tourner l'icône
    };

    // Si le clic se fait en dehors du dropdown, on ferme le dropdown
    document.addEventListener("click", () => {
      content.classList.remove("active");
      button.classList.remove("open");
      icon.style.transform = "rotate(0deg)";
    });
  }
);
