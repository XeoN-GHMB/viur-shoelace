import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  sl-dropdown {
    width: 100%;
  }


  sl-menu::part(base) {
    padding: 0;
  }

  sl-menu-item:hover .highlight,
  sl-menu-item:focus[tabindex='0'] .highlight {
    color: var(--sl-color-white);
  }

  sl-menu-item .highlight {
    color: var(--sl-color-primary-500);
  }

  sl-menu-item[active] .highlight {
    color: var(--sl-color-primary-100);
  }


  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    padding: 0;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  sl-input[size="small"] .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-small);
  }

  sl-input[size="small"] .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-small);
  }

  sl-input[size="medium"] .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-medium);
  }

  sl-input[size="medium"] .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-medium);
  }

  sl-input[size="large"] .input__prefix ::slotted(*) {
    padding-left: var(--sl-input-spacing-large);
  }

  sl-input[size="large"] .input__suffix ::slotted(*) {
    padding-right: var(--sl-input-spacing-large);
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) sl-input::part(base) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) sl-input::part(base) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) sl-input::part(base) {
    border-radius: 0;
  }
`;
