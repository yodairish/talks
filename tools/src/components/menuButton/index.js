'use stict';

/**
 * A bit description in - src/components/header/index.js
 */
import styles from './style.css';

export default function menuButton({ title, url, active, onClick }) {
  const button = document.createElement('span');
  
  button.className = [
    styles.button,
    (active ? styles.active : ''),
  ].join(' ');
  button.textContent = title;
  
  if (!active) {
    button.addEventListener('click', () => {
      window.history.pushState(null, title, url);

      if (onClick) {
        onClick();
      }
    });
  }

  return button;
}
