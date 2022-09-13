import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {emit} from '../../internal/event';
import {watch} from '../../internal/watch';
import styles from './bone.styles';
import {BoneViewRenderer} from "./boneViewRenderer";
import {BoneEditRenderer} from "./boneEditRenderer";
import {watchProps} from "../../internal/watchProps";


/**
 * @since 2.0
 * @status experimental
 * @viur 0.5
 *
 * @dependency sl-example
 *
 * @event sl-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('sl-bone')
export default class SlBone extends LitElement {
  static styles = styles;
  bone: HTMLFormElement;
  initBoneValue: any;
  internboneValue: any;
  /** set boneStructure. */
  @property({type: Object, attribute: false}) boneStructure: Object;

  /** set boneValue. */
  @property({type: Object, attribute: false}) boneValue: any;

  /** set boneValue. */
  @property({type: Object, attribute: false}) boneName: string;

  /** set renderType. */
  @property({type: Object, reflect: true}) renderType: string = "view";


  /** Gets boneValue */
  get getBoneValue(): any {
    return this._getBoneValue();
  }

  _getBoneValue() {
    return this.internboneValue[this.boneName];
  }


  @watchProps(['boneStructure', 'boneValue', "renderType"])
  optionUpdate() {
    this.initBoneValue = this.boneValue;
    this.internboneValue = {[this.boneName]: this.boneValue};
    if (this.boneStructure === null) {
      return;
    }

    if (this.renderType === "view") {

      const boneViewer = new BoneViewRenderer(this.boneStructure, this.boneValue, this.boneName, this)
      this.bone = boneViewer.boneFormatter();
    }
    if (this.renderType === "edit") {
      const boneEditor = new BoneEditRenderer(this.boneStructure, this.boneValue, this.boneName, this)
      this.bone = boneEditor.boneEditor();
    }


  }



  //Events
  handleChange(formData:FormData,type:string="edit") {

    if (this.initBoneValue !== this._getBoneValue()) {
      emit(this, 'sl-boneChange', {
        detail: {
          boneValue: this._getBoneValue(),
          boneName: this.boneName,
          formData: formData,
          type:type
        }
      });
    }
  }
  handleError(error)
  {
    //Todo Styling?
    //Todo More than 1 msg
    console.log("Add err msg to "+error["fieldPath"].join("."))
    const element=this.bone.querySelector('[data-bone-name-index="'+error["fieldPath"].join(".")+'"]');
    if(element)
    {
         element.helpText=html`<b>${error["errorMessage"]}</b>`;
    }


  }
  render() {

    return html`${this.bone}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sl-bone': SlBone;
  }
}
