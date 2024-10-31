// Fonction pour gérer la sélection d'un élément
export function selectItem(item, dropdownElement) {
  // Sélectionne le conteneur des tags
  const selectedItemsContainer = document.querySelector(".selected-tags");

  // Crée un tag sélectionné
  const selectedItem = document.createElement("span");
  selectedItem.textContent = item; // Définit le texte du tag
  selectedItem.classList.add("selected-tag");

  // Crée un bouton pour supprimer le tag
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = '<img src="../assets/png/vectorTag.png" alt="Remove">';
  selectedItem.appendChild(removeBtn); // Ajoute le bouton au tag

  // Ajoute le tag sélectionné au conteneur
  selectedItemsContainer.appendChild(selectedItem);

  // Cache l'élément dans le dropdown
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  const itemToHide = Array.from(dropdownList.children).find(
    (li) => li.textContent === item // Trouve l'élément correspondant
  );
  if (itemToHide) {
    itemToHide.style.display = "none"; // Cache l'élément
    itemToHide.classList.add("hidden-item"); // Marque l'élément comme "caché" pour la recherche
  }

  // Supprime le tag et réaffiche l'élément dans le dropdown
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Empêche la fermeture du dropdown
    selectedItemsContainer.removeChild(selectedItem); // Retire le tag
    if (itemToHide) {
      itemToHide.style.display = "block"; // Réaffiche l'élément
      itemToHide.classList.remove("hidden-item"); // // Retire la marque "caché" pour permettre une nouvelle recherche
    }
  };
}
