// Gère la sélection d'un élément
export function selectItem(item, dropdownElement) {
  let selectedItemsContainer = document.querySelector(".selected-tags");

  // Si le conteneur n'existe pas, on le crée
  if (!selectedItemsContainer) {
    selectedItemsContainer = document.createElement("div");
    selectedItemsContainer.classList.add("selected-tags");
    document
      .querySelector(".tagsContainer")
      .appendChild(selectedItemsContainer);
  }

  const existingItem = Array.from(selectedItemsContainer.children).find(
    (selectedItem) => selectedItem.textContent === item
  );

  if (!existingItem) {
    const selectedItem = document.createElement("span");
    selectedItem.textContent = item;
    selectedItem.classList.add("selected-tag");

    const removeBtn = document.createElement("button");
    const img = document.createElement("img");
    img.src = "../assets/png/Vector.png";
    img.alt = "Remove"; // Texte alternatif pour l'accessibilité

    removeBtn.appendChild(img);

    removeBtn.onclick = (e) => {
      e.stopPropagation(); // Empêche la propagation
      selectedItemsContainer.removeChild(selectedItem);
      addItemToDropdown(item, dropdownElement); // Ajoute l'élément de nouveau au dropdown

      // Supprime le conteneur s'il est vide
      if (selectedItemsContainer.children.length === 0) {
        selectedItemsContainer.remove();
      }
    };

    selectedItem.appendChild(removeBtn);
    selectedItemsContainer.appendChild(selectedItem);

    // Supprime l'élément de la liste du dropdown
    removeItemFromDropdown(item, dropdownElement);
  }
}

// Supprime un élément de la liste du dropdown
export function removeItemFromDropdown(item, dropdownElement) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  const itemToRemove = Array.from(dropdownList.children).find(
    (li) => li.textContent === item
  );
  if (itemToRemove) {
    dropdownList.removeChild(itemToRemove);
  }
}

// Ajoute un élément à la liste du dropdown
export function addItemToDropdown(item, dropdownElement) {
  const dropdownList = dropdownElement.querySelector(".dropdown-list");
  const li = document.createElement("li");
  li.textContent = item;
  li.onclick = () => selectItem(item, dropdownElement);
  dropdownList.appendChild(li);
}
