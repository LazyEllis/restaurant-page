// Create a header element
const header = document.createElement('div');
header.classList.add('header');

// Create a heading for the header
const heading = document.createElement('h1');
heading.textContent = 'Donut Delights';

// Create a navigation list for the header
const navList = document.createElement('ul');
navList.classList.add('nav');

// Define labels for the navigation buttons
const menuButtonLabels = ['Home', 'Menu', 'Contact'];

// Create navigation buttons and add them to the list
menuButtonLabels.forEach((buttonLabel) => {
  const listItem = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = buttonLabel;

  // Set the 'Home' button as active
  if (button.textContent === 'Home') {
    button.classList.add('active');
  }

  listItem.appendChild(button);
  navList.appendChild(listItem);
});

// Append elements to the header
header.append(heading, navList);

// Function to insert the header into the DOM
const insertHeader = () => {
  const content = document.querySelector('#content');
  content.parentNode.insertBefore(header, content);
};

export default insertHeader;
