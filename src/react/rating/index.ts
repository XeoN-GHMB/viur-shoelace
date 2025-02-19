import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/rating/rating.component.js';

import { type EventName } from '@lit/react';
import type { SlChangeEvent } from '../../events/events.js';
import type { SlHoverEvent } from '../../events/events.js';
export type { SlChangeEvent } from '../../events/events.js';
export type { SlHoverEvent } from '../../events/events.js';

const tagName = 'sl-rating';
Component.define('sl-rating');

/**
 * @summary Ratings give users a way to quickly view and provide feedback.
 * @documentation https://shoelace.style/components/rating
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @event sl-change - Emitted when the rating's value changes.
 * @event {{ phase: 'start' | 'move' | 'end', value: number }} sl-hover - Emitted when the user hovers over a value. The
 *  `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the
 *  rating's value would be if the user were to commit to the hovered value.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --symbol-color - The inactive color for symbols.
 * @cssproperty --symbol-color-active - The active color for symbols.
 * @cssproperty --symbol-size - The size of symbols.
 * @cssproperty --symbol-spacing - The spacing to use around symbols.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlChange: 'sl-change' as EventName<SlChangeEvent>,
    onSlHover: 'sl-hover' as EventName<SlHoverEvent>
  },
  displayName: 'SlRating'
});

export default reactWrapper;
