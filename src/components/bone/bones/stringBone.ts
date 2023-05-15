// @ts-nocheck
import {RawBone} from "./rawBone";
import type SlInput from "../../input/input";

export class StringBone extends RawBone {
  getEditor(value: string, boneName: string, lang: string | null = null): HTMLElement {
    const stringBone: SlInput = super.getEditor(value, boneName, lang);
    stringBone.addEventListener("keypress", (keypress_event) => {

      if (keypress_event.key !== "Enter") return;
      const name = lang === null ? `${this.boneName}` : `${this.boneName}.${lang}`;
      const multipleWrapper:HTMLElement = this.mainInstance.bone.querySelector(`[data-multiplebone='${name}']`);
      const childs = multipleWrapper.querySelectorAll("sl-input");

      if (stringBone === childs[childs.length-1]) {

        multipleWrapper.appendChild(this.addInput(null, lang));
      }
    });


    return stringBone;
  }
}