import { recipes } from "../data/recipes.js";
import { selectItem } from "./selectTag.js";

// Récupère les éléments uniques depuis les recettes
export function getUniqueItems(key) {
  const items = new Set(); // Utilise un Set pour éviter les doublons

  recipes.forEach((recipe) => {
    if (key === "ingredients") {
      // Ajoute chaque ingrédient unique au Set avec la première lettre en Lower
      recipe.ingredients.forEach((ingredientObj) =>
        items.add(ingredientObj.ingredient.toLowerCase())
      );
    } else if (key === "appliance") {
      items.add(recipe.appliance.toLowerCase());
    } else if (key === "ustensils") {
      recipe.ustensils.forEach((ustensil) => items.add(ustensil.toLowerCase()));
    }
  });
  // Upper sur la première lettre et retourne un tableau
  return [...items].map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}

// Remplit les dropdowns avec des éléments
export function populateDropdown(dropdownElement, items) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  dropdownList.innerHTML = ""; // Vide la liste avant d'ajouter des éléments

  items.forEach((item) => {
    const li = document.createElement("li"); // Crée un nouvel élément de liste
    li.textContent = item; // Définit le texte de l'élément
    // Gère le clic sur l'élément de liste
    li.onclick = (e) => {
      e.stopPropagation(); // Empêche le clic sur li de fermer le dropdown
      selectItem(item, dropdownElement); // Appelle la fonction pour gérer la sélection
    };
    dropdownList.appendChild(li); // Ajoute l'élément à la liste du dropdown
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

// Gère l'ouverture et la fermeture des dropdowns
[ingredientsDropdown, appliancesDropdown, utensilsDropdown].forEach(
  (dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");
    const content = dropdown.querySelector(".dropdown-content");
    const icon = dropdown.querySelector("i");
    const searchInput = dropdown.querySelector(".search-input"); // Récupère l'input de recherche

    // Ouvre ou ferme le dropdown lorsque le bouton est cliqué
    button.onclick = (e) => {
      e.stopPropagation(); // Empêche la propagation pour ne pas fermer le dropdown
      content.classList.toggle("active"); // Active ou désactive le dropdown
      button.classList.toggle("open"); // Ajoute ou retire la classe pour le style
      icon.style.transform = content.classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0deg)"; // Fait tourner l'icône
    };

    // Empêche la fermeture du dropdown lors d'un clic dans l'input
    searchInput.onclick = (e) => {
      e.stopPropagation(); // Empêche la propagation
      content.classList.add("active"); // Assure que le dropdown est actif
    };
  }
);
