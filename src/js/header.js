const header = document.createElement('div');
const heading = document.createElement('h1');
const navList = document.createElement('ul');
const menuButtonLabels = ['Home', 'Menu', 'Contact'];

header.classList.add('header');
heading.textContent = 'Donut Delights';
navList.classList.add('nav');

for (let buttonLabel of menuButtonLabels) {
  const listItem = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = buttonLabel;

  if (button.textContent === 'Home') {
    button.classList.add('active');
  }

  listItem.appendChild(button);
  navList.appendChild(listItem);
}

header.appendChild(heading);
header.appendChild(navList);

const insertHeader = () => {
  document
    .querySelector('body')
    .insertBefore(header, document.querySelector('#content'));
};

export default insertHeader;
