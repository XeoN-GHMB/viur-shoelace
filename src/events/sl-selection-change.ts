import type SlTreeItem from '../components/tree-item/tree-item.js';

export type SlSelectionChangeEvent = CustomEvent<{ selection: SlTreeItem[], path: SlTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-selection-change': SlSelectionChangeEvent;
  }
}
