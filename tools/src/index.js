'use strict';

import header from 'header';
import render, { getComponents, setComponents } from 'utils/render';
import route, { setRoutes, setDefault } from 'utils/route';

const menu = {
  home: {
    title: 'Home',
    url: '/',
  },
  products: {
    title: 'Products',
    url: '/products',
  },
};

function hotComponents() {

  /**
   * If we use hot plugin, we will have global module.hot object with
   * data property where we can serve state between updates
   */
  if (module.hot && module.hot.data) {
    setComponents(module.hot.data.components || []);
  }
}

function renderApp() {
  route()
    .then(({ name, page }) => {
      hotComponents();

      render(
        header({
          menu,
          current: name,
          onChange: renderApp,
        }),
        page
      );

      document.title = menu[name].title;
    });
}

setRoutes(Object.keys(menu));
setDefault('home');

window.addEventListener('popstate', renderApp);

renderApp();

if (module.hot) {
  /**
   * To watch for hot updates we should accept it to module
   * We can do it for every module, but better just apply it in root component
   * Several plugins like css-loader already apply hot reloading, so you not need
   * to do anything for them
   */
  module.hot.accept();

  /**
   * By hot.dispose method we can save current state for future use
   */
  module.hot.dispose(data => {
    data.components = getComponents();
  });
}
