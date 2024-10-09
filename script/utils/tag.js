// Gère la sélection d'un élément
export function selectItem(item, dropdownElement) {
  let selectedItemsContainer = document.querySelector(".selected-tags");

  // Si le conteneur n'existe pas, on le crée
  if (!selectedItemsContainer) {
    selectedItemsContainer = document.createElement("div");
    selectedItemsContainer.classList.add("selected-tags");
    // Ajoute le conteneur dans la section des tags
    document
      .querySelector(".tagsContainer")
      .appendChild(selectedItemsContainer);
  }

  // Vérifie si l'élément est déjà sélectionné
  const existingItem = Array.from(selectedItemsContainer.children).find(
    (selectedItem) => selectedItem.textContent === item
  );

  // Si l'élément n'est pas déjà sélectionné
  if (!existingItem) {
    const selectedItem = document.createElement("span"); // Crée un tag
    selectedItem.textContent = item; // Définit le texte du tag
    selectedItem.classList.add("selected-tag");

    const removeBtn = document.createElement("button"); // Crée le bouton de retrait
    const img = document.createElement("img");
    img.src = "../assets/png/Vector.png";
    img.alt = "Remove"; // Texte alternatif pour l'accessibilité

    removeBtn.appendChild(img); // Ajoute l'image au bouton

    // Gère le clic sur le bouton de retrait
    removeBtn.onclick = (e) => {
      e.stopPropagation(); // Empêche la propagation
      selectedItemsContainer.removeChild(selectedItem); // Retire le tag
      addItemToDropdown(item, dropdownElement); // Réajoute l'élément de nouveau au dropdown

      // Supprime le conteneur s'il n'y a plus de tags
      if (selectedItemsContainer.children.length === 0) {
        selectedItemsContainer.remove();
      }
    };

    selectedItem.appendChild(removeBtn); // Ajoute le bouton au tag
    selectedItemsContainer.appendChild(selectedItem);

    // Supprime l'élément de la liste du dropdown
    removeItemFromDropdown(item, dropdownElement);
  }
}

// Supprime un élément de la liste du dropdown
export function removeItemFromDropdown(item, dropdownElement) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  const itemToRemove = Array.from(dropdownList.children).find(
    (li) => li.textContent === item // Trouve l'élément à retirer
  );
  if (itemToRemove) {
    dropdownList.removeChild(itemToRemove); // Retire l'élément
  }
}

// Réajoute l'élément à la liste du dropdown
export function addItemToDropdown(item, dropdownElement) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list"); // Sélectionne la liste
  const li = document.createElement("li"); // Crée un nouvel élément
  li.textContent = item; // Définit le texte de l'élément
  li.onclick = () => selectItem(item, dropdownElement); // Gère la sélection
  dropdownList.appendChild(li); // Ajoute l'élément à la liste
}
