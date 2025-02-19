import { html, PropertyValues, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import ShoelaceElement from '../../internal/shoelace-element.js';
import { customElement, property, queryAll } from 'lit/decorators.js';
import styles from './org-node.styles.js';
export type OrgNodeDataType = {
  /**
   * 内置组织架构图数据
   */
  data: JSON;
  styleClass?: string;
  /**
   * 是否允许收缩
   */
  collapsible?: boolean;
  /**
   * 是否是展开
   */
  expanded?: boolean;
  children?: OrgNodeDataType[];
  [key: string]: unknown;
};
export const defaultRoleRender = (data: OrgNodeDataType) => {
  return html`${JSON.stringify(data)}`;
};
/**
 * @since 2.0
 * @status experimental
 *

 *  @event sl-node-click {data:any} - click node Data Element .
    @event sl-node-toggle {data:any} - toggle node Element .
    @event sl-node-before-toggle {data:any} -before toggle node Element .
 *

 *
 *  @cssproperty --example - An example CSS custom property.
 */
@customElement('sl-org-node')
export default class SlOrgNode extends ShoelaceElement {
  static styles = styles;
  /**
   * 节点数据
   */
  @property({ type: Object })
  nodeData: OrgNodeDataType;

  /**
   * 节点是否允许收缩
   */
  @property({ type: Boolean, attribute: true })
  collapsable: boolean = true;

  /**
   * 组织架构节点自定义样式
   */
  @property({ type: String })
  styleClass: string;

  /**
   * 节点是展开，还是收拢，默认是展开
   */
  @property({ type: Boolean })
  expanded: boolean = true;

  createRenderRoot() {
    return this;
  }
  update(changeProperties: PropertyValues) {
    super.update(changeProperties);
    if (changeProperties.has('expanded')) {
      if (this.expanded) {
        this.classList.remove('collapsed');
      } else {
        this.classList.add('collapsed');
      }
    }
  }

  /**
   * 节点自定义渲染
   */
  @property({ type: Object })
  nodeRender: (node: OrgNodeDataType) => TemplateResult<1> | TemplateResult<1>[] = defaultRoleRender;

  render() {
    const isLeaf = this.isLeaf;
    return html`
      <div class="org-tree-node-label " part="org-tree-node-label">
        <div class="org-tree-node-label-inner ${this.styleClass ? this.styleClass : ''}" @click=${this.onNodeClick}>
          ${this.nodeRender(this.nodeData)} ${!isLeaf && this.collapsable ? html`<span class="org-tree-node-btn ${this.expanded ? 'expanded' : ''}" @click=${this.onToogleNode}></span>` : ''}
        </div>
      </div>
      ${!isLeaf && this.expanded ? html`<div class="org-tree-node-children">${this._renderChildNode()}</div>` : ''}
    `;
  }
  onNodeClick() {
    this._emitEvent('sl-node-click');
  }

  protected _emitEvent(eventName: string, options?: CustomEventInit) {
    //@ts-ignore
    return this.emit(eventName, { detail: { nodeData: this.nodeData, ...options } });
  }
  private onToogleNode(event: Event) {
    event.stopPropagation();
    const beforeEvent = this._emitEvent('sl-node-before-toggle', { cancelable: true });
    if (!beforeEvent.defaultPrevented) {
      this.expanded = !this.expanded;
      this.nodeData.expanded = this.expanded;
      this._emitEvent('sl-node-toggle');
      this._emitEvent('node-toggle');
    }
  }
  private _renderChildNode() {
    const result = [];
    if (this.nodeData.children) {
      const child = this.nodeData.children;
      for (let i = 0, j = child.length; i < j; i++) {
        const subNode = child[i];
        const expanded = typeof subNode.expanded == 'undefined' ? true : subNode.expanded;
        const collapsible = typeof subNode.collapsible == 'undefined' ? true : subNode.collapsible;
        const classObj = {
          'is-leaf': !(subNode.children && subNode.children.length > 0),
          'only-one': child.length == 1,
          'org-tree-node': true
        };
        result.push(html`<sl-org-node class=${classMap(classObj)} .nodeRender=${this.nodeRender} .nodeData=${subNode} .expanded=${expanded} .collapsible=${collapsible}></sl-org-node>`);
      }
    }
    return result;
  }

  @queryAll('sl-org-node')
  subOrgNodes: SlOrgNode[];

  get isLeaf() {
    return this._childNodeSize == 0;
  }
  get _childNodeSize() {
    return this.nodeData && this.nodeData.children ? this.nodeData.children.length : 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-org-node': SlOrgNode;
  }
}
