'use strict';

let routes = [];
let defaultPage;

export function setRoutes(newRoutes) {
  routes = newRoutes;

  if (!defaultPage) {
    defaultPage = routes[0];
  }
}

export function setDefault(name) {
  defaultPage = name;
}

function isCurrentPage(name) {
  return window.location.pathname.indexOf(`/${name}`) !== -1;
}

function getPageByRoute() {
  return routes.reduce((found, name) => (
    isCurrentPage(name) ? name : found
  ), null);
}

function getCurrentPage() {
  return getPageByRoute() || defaultPage;
}

export default function route() {
  const name = getCurrentPage();

  /**
   * With bundle-loader we work with webpack context. In this case webpack
   * get list with all possible files for given pattern and
   * create chunks for them. And later, then you call for one of those module
   * webpack will download needed chunk if it's not already and call callback
   * when finished
   * If we need some known module we can use require.ensure([], callback)
   */
  const bundledPage = require(`bundle!pages/${name}/index.js`);

  return new Promise(resolve => {
    bundledPage(page => resolve({
      name,
      page: page(),
    }));
  });
}
