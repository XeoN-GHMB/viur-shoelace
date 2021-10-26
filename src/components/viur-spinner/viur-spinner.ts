import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './viur-spinner.styles';

/**
 * @since 2.0
 * @status experimental
 * @viur 0.5
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --indicator-color - The color of the indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
@customElement('sl-viur-spinner')
export default class SlViurSpinner extends LitElement {
  static styles = styles;


  render() {
    return html`
      <div part="base" class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-viur-spinner': SlViurSpinner;
  }
}
