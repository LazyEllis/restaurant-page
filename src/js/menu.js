const createGridItem = (subheadingTitle, paraContent) => {
  const gridItem = document.createElement('div');
  const subheading = document.createElement('h3');
  const para = document.createElement('p');

  subheading.textContent = subheadingTitle;
  para.textContent = paraContent;

  gridItem.append(subheading, para);
  return gridItem;
};

const heading = document.createElement('h2');
const menuGrid = document.createElement('div');
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

heading.textContent = 'Menu';
menuGrid.classList.add('menu-grid');
menuGrid.append(
  glazed,
  chocolateFrosted,
  jellyFilled,
  bostonCream,
  oldFashioned,
  sprinkle
);

const populateMenuTab = () => {
  document.querySelector('#content').append(heading, menuGrid);
};

export default populateMenuTab;
