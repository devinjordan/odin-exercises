class Dropdown {
  constructor(buttonSelector, itemsSelector) {
    this.button = document.querySelector(buttonSelector);
    this.items = document.querySelector(itemsSelector);

    this.button.addEventListener('click', () => {
      this.toggleDropdown();
    });
  };

  toggleDropdown() {
    this.items.classList.toggle('showing');
  };
};

const myDropdown = new Dropdown('.dropdown-button', '.dropdown-content');

window.addEventListener('click', (e) => {
  if (e.target != myDropdown.button && myDropdown.items.classList.contains('showing')) {
    myDropdown.toggleDropdown();
  };
});
