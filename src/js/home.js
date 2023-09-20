const createSection = (subheadingTitle, ...paraTexts) => {
  const section = document.createElement('div');
  const subheading = document.createElement('h3');
  subheading.textContent = subheadingTitle;
  const paragraphs = [];

  for (let paraText of paraTexts) {
    const paragraph = document.createElement('p');
    paragraph.textContent = paraText;
    paragraphs.push(paragraph);
  }

  section.appendChild(subheading);
  paragraphs.forEach((paragraph) => {
    section.appendChild(paragraph);
  });

  section.classList.add(subheadingTitle.toLowerCase());
  return section;
};

const descriptionSentences = [
  'Donut Delights is a family-owned donut shop located in the heart of downtown.',
  'We pride ourselves on using the freshest ingredients to create the best donuts in town.',
  'We are open 24/7, so come on by!',
];
const description = descriptionSentences.join(' ');

const heading = document.createElement('h2');
heading.textContent = 'Donut Delights';

const aboutSection = createSection('About', description);
const hoursSection = createSection(
  'Hours',
  'Monday-Friday: 5am-10pm',
  'Saturday-Sunday: 6am-11pm'
);
const locationSection = createSection(
  'Location',
  '123 Sprinkles Ave',
  'San Francisco, CA 94110'
);

const populateHomeTab = () => {
  document
    .querySelector('#content')
    .append(heading, aboutSection, hoursSection, locationSection);
};

export default populateHomeTab;
export { createSection };
