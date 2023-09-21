import { createSection } from './helpers.js';

const heading = document.createElement('h2');
heading.textContent = 'Contact';

const phoneSection = createSection('Contact', '123-456-7890');
const emailSection = createSection('Email', 'info@donutdelights.com');
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

const populateContactTab = () => {
  const content = document.querySelector('#content');
  content.append(
    heading,
    phoneSection,
    emailSection,
    hoursSection,
    locationSection
  );
};

export default populateContactTab;
