// Import required functions and styles
import '../style.scss';
import insertHeader from './header.js';
import populateHomeTab from './home.js';
import populateMenuTab from './menu.js';
import populateContactTab from './contact.js';

// Insert header and populate Home tab by default
insertHeader();
populateHomeTab();

// Function to switch between tabs
const switchTab = (e) => {
  if (e.target.classList.contains('active')) return;

  const tabContent = document.querySelector('#content');
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.firstChild);
  }

  document.querySelector('button.active').classList.remove('active');
  e.target.classList.add('active');

  // Populate corresponding tab based on button text
  if (e.target.textContent === 'Home') {
    populateHomeTab();
  } else if (e.target.textContent === 'Menu') {
    populateMenuTab();
  } else if (e.target.textContent === 'Contact') {
    populateContactTab();
  }
};

// Add event listeners for tab switching
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', switchTab);
});
