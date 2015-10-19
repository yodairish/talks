'use stict';

/**
 * A bit description in - src/components/header/index.js
 */
import styles from './style.css';

export default function home() {
  const homePage = document.createElement('div');
  const title = document.createElement('h1');
  const description1 = document.createElement('p');

  homePage.className = styles.home;
  
  title.className = styles.title;
  title.textContent = 'It\'s a simple testing app.';
  description1.className = styles.description;
  description1.textContent = (
    'This app is super simple and you don\'t get ' +
    'anything interesting here.'
  );

  const description2 = description1.cloneNode();

  description2.textContent = (
    'All you need in the code of the project, ' +
    'so go and look there.'
  );

  homePage.appendChild(title);
  homePage.appendChild(description1);
  homePage.appendChild(description2);

  return homePage;
}
