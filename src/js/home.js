import { createSection } from './helpers.js';

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
  const content = document.querySelector('#content');
  content.append(heading, aboutSection, hoursSection, locationSection);
};

export default populateHomeTab;
