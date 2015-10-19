'use stict';

import menuButton from 'menuButton';

/**
 * Thanks to loaders, webpack knew how to deal with css files.
 * As we activate modules(you can read about it here:
 * https://github.com/css-modules/css-modules) 'styles' variable will contains
 * an object where keys are all selectors in the file:
 *
 ********** example **********
 * // style.css
 * .item {}
 * #block > .otherItem {}
 * div .one
 *
 * // module
 * import styles from './style.css';
 * // styles => { item: '', block: '', otherItem: '', one: '' }
 *****************************
 *
 * and values - hashed classes(random base64 string, like: 5Wt3kV).
 * In content of the css files, selectors will replaced by corresponding hashes
 * and add to the head tag of the page when bundle will initialized or allocate
 * into a separate file until build process by extract plugin
 */
import styles from './style.css';

export default function header({ menu, current, onChange }) {
  const headerPage = document.createElement('div');
  let headerTitle = '';

  /**
   * And now we can easy assign a hashed class by a selector name to our element
   */
  headerPage.className = styles.header;

  Object.keys(menu).forEach(page => {
    const { title, url } = menu[page];
    const active = (current === page);

    if (active) {
      headerTitle = title;
    }

    headerPage.appendChild(
      menuButton({
        title,
        url,
        active,
        onClick: onChange,
      })
    );
  });

  headerPage.appendChild(document.createTextNode(headerTitle));

  return headerPage;
}
