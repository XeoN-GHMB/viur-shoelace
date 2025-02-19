import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/alert/alert.component.js';

import { type EventName } from '@lit/react';
import type { SlShowEvent } from '../../events/events.js';
import type { SlAfterShowEvent } from '../../events/events.js';
import type { SlHideEvent } from '../../events/events.js';
import type { SlAfterHideEvent } from '../../events/events.js';
export type { SlShowEvent } from '../../events/events.js';
export type { SlAfterShowEvent } from '../../events/events.js';
export type { SlHideEvent } from '../../events/events.js';
export type { SlAfterHideEvent } from '../../events/events.js';

const tagName = 'sl-alert';
Component.define('sl-alert');

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://shoelace.style/components/alert
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<sl-icon>`.
 *
 * @event sl-show - Emitted when the alert opens.
 * @event sl-after-show - Emitted after the alert opens and all animations are complete.
 * @event sl-hide - Emitted when the alert closes.
 * @event sl-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<sl-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlShow: 'sl-show' as EventName<SlShowEvent>,
    onSlAfterShow: 'sl-after-show' as EventName<SlAfterShowEvent>,
    onSlHide: 'sl-hide' as EventName<SlHideEvent>,
    onSlAfterHide: 'sl-after-hide' as EventName<SlAfterHideEvent>
  },
  displayName: 'SlAlert'
});

export default reactWrapper;
