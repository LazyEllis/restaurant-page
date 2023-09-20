import '../style.scss';
import insertHeader from './header.js';
import populateHomeTab from './home.js';
import populateMenuTab from './menu.js';
import populateContactTab from './contact.js';

insertHeader();
populateHomeTab();

const switchTab = (e) => {
  const tabContent = document.querySelector('#content');
  while (tabContent.firstChild) {
    tabContent.removeChild(tabContent.firstChild);
  }

  if (e.target.classList.contains('active')) return;

  document.querySelector('button.active').classList.remove('active');
  e.target.classList.add('active');

  if (e.target.textContent === 'Home') {
    populateHomeTab();
  } else if (e.target.textContent === 'Menu') {
    populateMenuTab();
  } else if (e.target.textContent === 'Contact') {
    populateContactTab();
  }
};

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', switchTab);
});
