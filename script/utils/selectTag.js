// Fonction pour gérer la sélection d'un élément en dehors du dropdown
export function selectTag(item) {
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

  // Gère la suppression du tag
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Empêche la fermeture du dropdown
    selectedItemsContainer.removeChild(selectedItem); // Retire le tag
    // Réafficher l'élément dans le dropdown si nécessaire
  };
}
