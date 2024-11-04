"use strict";
export let selectedTagsIng = [];
export let selectedTagsUst = [];
export let selectedTagsApp = [];

// Fonction pour gérer la sélection d'un élément en dehors du dropdown
export function selectTag(item, key) {
  const selectedItemsContainer = document.querySelector(".selected-tags");

  // Crée un tag sélectionné
  const selectedItem = document.createElement("span");
  selectedItem.textContent = item; // Définit le texte du tag
  selectedItem.classList.add("selected-tag");

  switch (key) {
    case "ingredient":
      selectedTagsIng.push(item);
      console.log(item);

      break;
    case "appliance":
      selectedTagsApp.push(item);
      break;
    case "ustensil":
      selectedTagsUst.push(item);
      break;
  }

  const searchBar = document.getElementById("search");
  searchBar.dispatchEvent(new Event("keyup"));

  // Crée un bouton pour supprimer le tag
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = '<img src="../assets/png/vectorTag.png" alt="Remove">';
  selectedItem.appendChild(removeBtn); // Ajoute le bouton au tag

  // Ajoute le tag sélectionné au conteneur
  selectedItemsContainer.appendChild(selectedItem);

  // Gère la suppression du tag
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Empêche la fermeture du dropdown
    selectedItemsContainer.removeChild(selectedItem); // Retire le tag
    // Réafficher l'élément dans le dropdown si nécessaire
    switch (key) {
      case "ingredient":
        const indexIng = selectedTagsIng.indexOf(item);
        if (indexIng > -1) {
          // only splice array when item is found
          selectedTagsIng.splice(indexIng, 1); // 2nd parameter means remove one item only
        }
        break;
      case "appliance":
        const indexApp = selectedTagsApp.indexOf(item);
        if (indexApp > -1) {
          // only splice array when item is found
          selectedTagsApp.splice(indexApp, 1); // 2nd parameter means remove one item only
        }
        break;
      case "ustensil":
        const indexUst = selectedTagsUst.indexOf(item);
        if (indexUst > -1) {
          // only splice array when item is found
          selectedTagsUst.splice(indexUst, 1); // 2nd parameter means remove one item only
        }
        break;
    }
    let searchBar = document.getElementById("search");
    searchBar.dispatchEvent(new Event("keyup"));
  };
}
