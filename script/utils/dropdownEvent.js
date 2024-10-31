export function initializeDropdownEvents(
  dropdownContentId,
  searchInputId,
  eraseIconClass,
  searchIconClass
) {
  const dropdown = document.querySelector(`#${dropdownContentId}`);
  const searchInput = document.getElementById(searchInputId);
  const eraseIcon = dropdown.querySelector(`.${eraseIconClass}`);
  const searchIcon = dropdown.querySelector(`.${searchIconClass}`);
  const listItems = dropdown.querySelectorAll(".dropdown-list li"); // Sélectionne les éléments de liste

  // Vérifie si l'icône d'effacement existe avant d'ajouter l'événement
  if (eraseIcon) {
    eraseIcon.onclick = () => {
      searchInput.value = ""; // Vide le champ de recherche

      // Réaffiche tous les éléments de la liste
      listItems.forEach((item) => {
        item.style.display = ""; // Rétablit l'affichage par défaut
      });
    };

    // Vérifie si l'icône de recherche existe avant d'ajouter l'événement
    if (searchIcon) {
      searchIcon.onclick = () => {
        // Action de recherche ici
      };
    }

    searchInput.oninput = () => {
      // Fonction de filtrage ici
    };
  }
}
