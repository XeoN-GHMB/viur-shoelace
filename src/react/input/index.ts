import * as React from 'react';
import { createComponent } from '@lit/react';
import Component from '../../components/input/input.component.js';

import { type EventName } from '@lit/react';
import type { SlBlurEvent } from '../../events/events.js';
import type { SlChangeEvent } from '../../events/events.js';
import type { SlClearEvent } from '../../events/events.js';
import type { SlFocusEvent } from '../../events/events.js';
import type { SlInputEvent } from '../../events/events.js';
import type { SlInvalidEvent } from '../../events/events.js';
export type { SlBlurEvent } from '../../events/events.js';
export type { SlChangeEvent } from '../../events/events.js';
export type { SlClearEvent } from '../../events/events.js';
export type { SlFocusEvent } from '../../events/events.js';
export type { SlInputEvent } from '../../events/events.js';
export type { SlInvalidEvent } from '../../events/events.js';

const tagName = 'sl-input';
Component.define('sl-input');

/**
 * @summary Inputs collect data from the user.
 * @documentation https://shoelace.style/components/input
 * @status stable
 * @since 2.0
 *
 * @dependency sl-icon
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event sl-blur - Emitted when the control loses focus.
 * @event sl-change - Emitted when an alteration to the control's value is committed by the user.
 * @event sl-clear - Emitted when the clear button is activated.
 * @event sl-focus - Emitted when the control gains focus.
 * @event sl-input - Emitted when the control receives input.
 * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.
 */
const reactWrapper = createComponent({
  tagName,
  elementClass: Component,
  react: React,
  events: {
    onSlBlur: 'sl-blur' as EventName<SlBlurEvent>,
    onSlChange: 'sl-change' as EventName<SlChangeEvent>,
    onSlClear: 'sl-clear' as EventName<SlClearEvent>,
    onSlFocus: 'sl-focus' as EventName<SlFocusEvent>,
    onSlInput: 'sl-input' as EventName<SlInputEvent>,
    onSlInvalid: 'sl-invalid' as EventName<SlInvalidEvent>
  },
  displayName: 'SlInput'
});

export default reactWrapper;
