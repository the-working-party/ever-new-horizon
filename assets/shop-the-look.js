import { Component } from '@theme/component';

/**
 * @typedef {Object} ShopTheLookRefs
 * @property {HTMLElement} [carousel] - The slideshow component
 */

/**
 * Shop The Look section component.
 *
 * Wraps the slideshow component for the shop-the-look section.
 * The slideshow component handles all carousel and dot navigation internally.
 *
 * @extends {Component<ShopTheLookRefs>}
 */
class ShopTheLookSection extends Component {}

if (!customElements.get('shop-the-look-section')) {
  customElements.define('shop-the-look-section', ShopTheLookSection);
}

export { ShopTheLookSection };
