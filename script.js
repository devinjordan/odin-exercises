class Dropdown {
  constructor(buttonSelector, itemsSelector) {
    this.button = document.querySelector(buttonSelector);
    this.items = document.querySelectorAll(itemsSelector);

    this.button.addEventListener('click', () => {
      this.toggleDropdown();
    });
  };

  toggleDropdown() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.classList.toggle('hidden');
    };
    this.button.classList.toggle('active');
  };
};

const myDropdown = new Dropdown('.dropdown-button', '.dropdown-item');

window.addEventListener('click', (e) => {
  if (e.target != myDropdown.button && myDropdown.button.classList.contains('active')) {
    myDropdown.toggleDropdown();
  };
});
