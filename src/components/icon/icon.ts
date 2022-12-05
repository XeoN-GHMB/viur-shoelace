import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import ShoelaceElement from '../../internal/shoelace-element';
import { watch } from '../../internal/watch';
import styles from './icon.styles';
import { getIconLibrary, unwatchIcon, watchIcon } from './library';
import { requestIcon } from './request';
import type { CSSResultGroup } from 'lit';

let parser: DOMParser;

/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 *
 * @since 2.0
 * @status stable
 * @viur 0.5
 *
 * @event sl-load - Emitted when the icon has loaded.
 * @event sl-error - Emitted when the icon fails to load due to an error.
 */
@customElement('sl-icon')
export default class SlIcon extends ShoelaceElement {
  static styles: CSSResultGroup = styles;

  @state() private svg = '';

  /** The name of the icon to draw. */
  @property({ reflect: true }) name?: string;

  /**
   * An external URL of an SVG file.
   *
   * WARNING: Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
   */
  @property() src?: string;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property() label = '';

  /** The name of a registered custom icon library. */
  @property({ reflect: true }) library = 'default';

  /** Enforce v-once for vueJs */
  @property({reflect: true, type: Boolean, attribute: 'v-once'}) vueonce = true;

  /** allows to use a sprite map instead of copying the svg as inline code */
  @property({reflect: true, type: Boolean}) sprite = false;

  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }

  firstUpdated() {
    if (!this.sprite) this.setIcon();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }

  private getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return this.src;
  }

  private getDir(){
    const url = this.getUrl();
    return url?.substring(0, url?.lastIndexOf("/"))
  }

  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  redraw() {
    if (!this.sprite) this.setIcon();
  }

  @watch('label')
  handleLabelChange() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;

    if (hasLabel) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  @watch('name')
  @watch('src')
  @watch('library')
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();

    // Create an instance of the DOM parser. We do it here instead of top-level to support SSR while maintaining a
    // single parser instance for optimal performance.
    if (!parser) {
      parser = new DOMParser();
    }

    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          // If the url has changed while fetching the icon, ignore this request
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          const svgEl = doc.body.querySelector('svg');

          if (svgEl !== null) {
            library?.mutator?.(svgEl);
            this.svg = svgEl.outerHTML;
            this.emit('sl-load');
          } else {
            this.svg = '';
            this.emit('sl-error');
          }
        } else {
          this.svg = '';
          this.emit('sl-error');
        }
      } catch {
        this.emit('sl-error');
      }
    } else if (this.svg.length > 0) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = '';
    }
  }

  handleChange() {
    if (!this.sprite) this.setIcon();

  }

  render() {
    return html`
    ${this.sprite?
      html`<svg width="1em" height="1em">
            <use href="${this.getDir()}/_sprite.svg#${this.name}"></use>
          </svg>`
      :html`${unsafeSVG(this.svg)}`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-icon': SlIcon;
  }
}
