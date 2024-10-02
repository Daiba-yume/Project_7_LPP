// Conteneur des tags
const tagsContainer = document.querySelector(".tagsContainer");

// Fonction pour afficher le tag
function displayTag(item) {
  const tagElement = document.createElement("div");
  tagElement.classList.add("tag");
  tagElement.textContent = item;

  // Ajouter un bouton pour supprimer le tag avec l'image
  const removeBtn = document.createElement("button");
  const crossIcon = document.createElement("img");
  crossIcon.src = "../assets/png/close.png"; // l'URL de l'image
  crossIcon.alt = "close"; // Texte alternatif pour l'accessibilité
  crossIcon.classList.add("remove-tag-icon"); // Ajouter une classe pour le style

  // Supprimer le tag lorsqu'on clique sur le bouton
  removeBtn.onclick = () => {
    tagsContainer.removeChild(tagElement);
  };

  removeBtn.appendChild(crossIcon);
  tagElement.appendChild(removeBtn);
  tagsContainer.appendChild(tagElement);
}

// Gère la sélection d'un élément
function selectItem() {}
