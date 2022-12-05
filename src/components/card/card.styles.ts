import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
// language=CSS

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }

  .card_group{
    display: flex;
    flex-direction: column;
    flex:1;
  }
  .card-horizontal{
    flex-direction: row;
  }

  .card-horizontal .card__image{
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--border-radius);
    flex-basis: 30%;
  }

  .card-horizontal .card__image ::slotted(img) {
    height: 100%;
    object-fit: cover;
  }

  /* selected/checked */
  .card--checked {
    border-color: var(--sl-color-gray-100);
    background-color: var(--sl-color-gray-100);
    box-shadow: var(--sl-shadow-medium);
  }
  .card--checked .card__image {
    filter: brightness(90%);
  }
`;
