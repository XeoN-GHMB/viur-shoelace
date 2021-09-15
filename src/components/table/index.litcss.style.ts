import {css} from 'lit';
export default css`@charset "UTF-8";:host{display:block;--sl-th-padding-size:12px 8px;--sl-table-border-color:var(--sl-color-netural-200);--sl-table-border-color:var(--sl-color-neutral-200);--sl-table-header-bg-color:var(--sl-color-neutral-50);--sl-table-scroll-barWidth:16px;--sl-table-td-right-width:0;--sl-table-td-right-width:0;--sl-table-td-bottom-width:1px;--sl-table-stripe-color:var(--sl-color-blue-gray-50)}td,th{background-color:rgb(var(--sl-table-background-color))}.noBorder{border:0}.tdBorder,table[part=table] th,table[part=table] td{border-bottom:solid var(--sl-table-td-bottom-width) rgb(var(--sl-table-border-color));border-right:solid var(--sl-table-td-right-width) rgb(var(--sl-table-border-color))}.cell,table[part=table] th,table[part=table] td{padding:var(--sl-th-padding-size);transition:background-color 1s cubic-bezier(0.075,0.82,0.165,1)}table[part=table]{border-collapse:separate;border-spacing:0}table[part=table] thead{position:sticky;top:0;z-index:2}table[part=table] .fixedFoot{position:sticky;bottom:0;z-index:2}table[part=table] th{position:relative;font-weight:normal;background-color:rgb(var(--sl-table-header-bg-color))}:host([border]) table[part=table]{--sl-table-td-right-width:1px;border-top:solid 1px rgb(var(--sl-table-border-color));border-left:solid 1px rgb(var(--sl-table-border-color))}:host([border]) table[part=table]::before{content:"";top:0;left:0;z-index:11;position:absolute;width:100%;border-top:solid 1px rgb(var(--sl-table-border-color))}:host([border]) table[part=table]::after{z-index:11;content:"";top:0;left:0;position:absolute;height:100%;border-left:solid 1px rgb(var(--sl-table-border-color))}.stripe,.sl-table-base-scroll-div[stripe] tbody tr:nth-child(odd) td,.sl-table-base-scroll-div[hover-able] table tbody tr:hover td{background-color:rgb(var(--sl-table-stripe-color))}.sl-table-base{position:relative;overflow:hidden}.sl-table-base[size=small]{--sl-th-padding-size:8px}.sl-table-base[size=larger]{--sl-th-padding-size:16px}.sl-table-base-scroll-div{overflow:auto}.cursor{cursor:pointer}.thWrap{display:flex;word-break:break-all;align-items:center}th[align=center] .thWrap{justify-content:center}th[align=right] .thWrap{justify-content:flex-end}.column-title{display:inline-flex}.sort-wrap{cursor:pointer;position:relative;padding:0 6px;white-space:normal;color:#bfbfbf;display:inline-flex;flex-direction:column;font-size:10px;line-height:10px;flex:0 0 auto;font-size:12px;line-height:12px;transition:color .3s;min-width:12px;min-height:12px}.sort-wrap .current{color:rgb(var(--sl-color-gray-700))}.sort-wrap svg{width:1em;height:1em}.th-resize-helper{position:absolute;top:0;right:0;bottom:0;width:6px;text-align:center;cursor:col-resize}.th-resize-helper::before{content:"";position:absolute;left:5px;width:1px;height:100%;border-left:solid 1px rgb(var(--sl-table-border-color))}:host([border]) .th-resize-helper::before{left:6px}.nowrap-tree-node{white-space:nowrap}.tree-node-inner{display:flex;align-items:center}.tree-node-inner .tree-node-icon{position:relative;cursor:pointer;font-size:var(--sl-tree-trriger-icon,14px);padding:var(--sl-tree-trriger-padding,0 4px 0 2px)}.tree-node-inner .tree-node-empty-node{display:inline;width:16px}.tree-node-inner svg{width:1em;height:1em}.expand-toogle{display:flex;align-items:center}.expand-toogle .expand-toogle-icon{position:relative;cursor:pointer;font-size:var(--sl-tree-trriger-icon,14px);padding:var(--sl-tree-trriger-padding,0 4px 0 2px)}.expand-toogle svg{width:1em;height:1em}.tdWrap{word-break:break-all;word-wrap:break-word}.edit_select sl-checkbox+sl-checkbox{margin-left:10px}.cellBox{display:-webkit-box;overflow:hidden;-webkit-line-clamp:var(--sl-table-cell-box-lines,1);-webkit-box-orient:vertical}.edit_date::part(input){min-width:30px;width:30px}.edit_input::part(input){min-width:10px;width:10px}.edit_select::part(select_label){min-width:0;width:0}`; 