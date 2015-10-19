'use stict';

/**
 * A bit description in - src/components/header/index.js
 */
import styles from './style.css';
import productItem from 'productItem';

const items = [];

for (let i = 0; i < 20; i++) {
  items.push({
    title: `Product ${i}`,

    /**
     * With img-loader(url-loader) we can just require image. If we set limit,
     * all images below will inlined by data-url and for above will created
     * hashed image with provided optimizations
     */
    img: require(`./img/img_${(i % 2 ? 1 : 2)}.png`),
  });
}

export default function products() {
  const productsPage = document.createElement('div');

  productsPage.className = styles.products;

  items.forEach(item => productsPage.appendChild(productItem(item)));

  return productsPage;
}
