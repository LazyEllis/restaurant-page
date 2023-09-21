import { createGridItem } from './helpers.js';

const heading = document.createElement('h2');
heading.textContent = 'Menu';

const menuGrid = document.createElement('div');
menuGrid.classList.add('menu-grid');

const glazed = createGridItem(
  'Glazed',
  'Our classic donut. Simple, yet delicious.'
);
const chocolateFrosted = createGridItem(
  'Chocolate Frosted',
  'Chocolatey goodness in donut form.'
);
const jellyFilled = createGridItem(
  'Jelly-filled',
  'Our classic donut filled with raspberry jelly'
);
const bostonCream = createGridItem(
  'Boston Cream',
  'Our classic donut filled with vanilla cream.'
);
const oldFashioned = createGridItem(
  'Old-fashioned',
  'A simple cake donut with a hint of nutmeg.'
);
const sprinkle = createGridItem(
  'Sprinkle',
  'Our classic donut covered in sprinkles.'
);

menuGrid.append(
  glazed,
  chocolateFrosted,
  jellyFilled,
  bostonCream,
  oldFashioned,
  sprinkle
);

const populateMenuTab = () => {
  const content = document.querySelector('#content');
  content.append(heading, menuGrid);
};

export default populateMenuTab;
