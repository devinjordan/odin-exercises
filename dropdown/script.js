class Dropdown {
  constructor(buttonSelector, itemsSelector) {
    this.button = document.getElementById(buttonSelector);
    this.items = document.getElementById(itemsSelector);

    this.button.addEventListener('click', () => {
      this.toggleDropdown();
    });
  };

  toggleDropdown() {
    if (document.querySelector('.showing')) {
      let activeDropdown = document.querySelector('.showing');
      activeDropdown.classList.remove('showing');
      activeDropdown.previousElementSibling.classList.remove('active-dropdown');
    };
    this.items.classList.toggle('showing');
    this.button.classList.toggle('active-dropdown');
  };
};

const business = new Dropdown('business-button', 'business');
const cooking = new Dropdown('cooking-button', 'cooking');

window.addEventListener('click', (e) => {
  if (!e.target.matches('.active-dropdown')) {
    let activeDropdown = document.querySelector('.showing');
    if (activeDropdown) {
      activeDropdown.classList.remove('showing');
      activeDropdown.previousElementSibling.classList.remove('active-dropdown');
    };
  };
});
