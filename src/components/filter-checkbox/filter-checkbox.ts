import '../checkbox/checkbox';
import '../icon/icon';
import '../popup/popup';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { watch } from '../../internal/watch';
import ShoelaceElement from '../../internal/shoelace-element';
import styles from './filter-checkbox.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://shoelace.style/components/filter-checkbox
 * @status experimental
 * @viur 0.5
 * @since 2.0
 *
 * @dependency sl-example
 *
 * @event sl-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sl-filter-checkbox')
export default class SlFilterCheckbox extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);
  private showMenu = false;

  /** An example attribute. */
  @property() attr = 'example';

  @query('#menu')
  _popup;

  @watch('someProperty')
  doSomething() {
    // Example event
    this.emit('sl-event-name');
  }

  handleClick() {
    console.log(this._popup);
    this.showMenu = !this.showMenu;
    this._popup.active = this.showMenu;
  }

  render() {
    return html`<div>
      <sl-popup id="menu" placement="bottom-end"
        ><div class="menu">
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div></sl-popup
      >
      <sl-checkbox></sl-checkbox><sl-icon name="chevron-down" @click="${this.handleClick}"></sl-icon>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-filter-checkbox': SlFilterCheckbox;
  }
}
