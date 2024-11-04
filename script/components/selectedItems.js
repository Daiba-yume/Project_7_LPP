"use strict";
// Fonction pour gérer l'affichage d'un élément sélectionné dans le dropdown
export function selectSelectedItem(item, dropdownElement) {
  const selectedItemsTag = dropdownElement.querySelector(".selected-items"); // Conteneur pour les éléments sélectionnés

  // Crée un nouvel élément pour l'élément sélectionné
  const selectedItemTag = document.createElement("span");
  selectedItemTag.textContent = item; // Définit le texte de l'élément
  selectedItemTag.classList.add("selected-item"); // Classe pour le style

  // Ajoute la couleur de fond
  selectedItemTag.style.backgroundColor = "#ffd15b";

  // Crée un bouton pour supprimer l'élément
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-selectItem");
  removeBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'; // Icône de suppression
  selectedItemTag.appendChild(removeBtn); // Ajoute le bouton au tag

  // Ajoute l'élément sélectionné au conteneur
  selectedItemsTag.appendChild(selectedItemTag);

  // Cache l'élément dans le dropdown
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  const itemToHide = Array.from(dropdownList.children).find(
    (li) => li.textContent === item
  );

  if (itemToHide) {
    itemToHide.style.display = "none"; // Cache l'élément
    itemToHide.classList.add("hidden-item"); // Marque l'élément comme "caché"
  }

  // Supprime l'élément et réaffiche l'élément dans le dropdown
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Empêche la fermeture du dropdown
    selectedItemsTag.removeChild(selectedItemTag); // Retire l'élément
    if (itemToHide) {
      itemToHide.style.display = "block"; // Réaffiche l'élément
      itemToHide.classList.remove("hidden-item"); // Retire la marque "caché"
    }
  };
}
