'use stict';

/**
 * A bit description in - src/components/header/index.js
 */
import styles from './style.css';

export default function productItem({ img, title }) {
  const product = document.createElement('div');
  const productImg = document.createElement('img');
  const productTitle = document.createElement('p');

  product.className = styles.item;

  productImg.className = styles.img;
  productImg.src = img;

  productTitle.className = styles.title;
  productTitle.textContent = title;

  product.appendChild(productImg);
  product.appendChild(productTitle);

  return product;
}
