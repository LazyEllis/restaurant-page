// Helper function to create a section with subheading and paragraphs
export const createSection = (subheadingTitle, ...paraTexts) => {
  const section = document.createElement('div');
  section.classList.add(subheadingTitle.toLowerCase());

  const subheading = document.createElement('h3');
  subheading.textContent = subheadingTitle;
  section.appendChild(subheading);

  paraTexts.forEach((paraText) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = paraText;
    section.appendChild(paragraph);
  });

  return section;
};

// Helper function to create a menu grid item
export const createGridItem = (subheadingTitle, paraContent) => {
  const gridItem = document.createElement('div');

  const subheading = document.createElement('h3');
  subheading.textContent = subheadingTitle;

  const para = document.createElement('p');
  para.textContent = paraContent;

  gridItem.append(subheading, para);
  return gridItem;
};
