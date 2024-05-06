const dropdownButton = document.querySelector('.dropdown-button');
const dropdownItems = document.querySelectorAll('.dropdown-item');

let toggled = false;

const toggleDropdown = () => {
  
  for (let i = 0; i < dropdownItems.length; i++) {
    let item = dropdownItems[i];
    item.classList.toggle('hidden');
  };

  toggled = !toggled;
};

dropdownButton.addEventListener('click', () => {
  toggleDropdown();
});

window.addEventListener('click', (e) => {
  if (e.target != dropdownButton && toggled) {
    toggleDropdown();
  };
});