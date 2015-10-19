'use strict';

let components = [];

export function getComponents() {
  return components;
}

export function setComponents(newComponents) {
  components = newComponents;
}

/**
 * We change only components which have diff with current, so until we use
 * hot reloading will change only part of application
 */
function updateComponent({ component, index }) {
  if (!components[index]) return null;

  const prevComponent = components[index];

  if (prevComponent.outerHTML === component.outerHTML) {
    component = prevComponent;

  } else {
    document.body.replaceChild(component, prevComponent);
  }

  return component;
}

function addComponent(component) {
  document.body.appendChild(component);

  return component;
}

export default function render(...newComponents) {
  components = newComponents.map((component, index) => (
    updateComponent({ component, index }) ||
    addComponent(component)
  ));
}
