import {action, makeAutoObservable, makeObservable, observable} from 'mobx';
import React from "react";
import {enableStaticRendering} from "mobx-react-lite";

enableStaticRendering(typeof window === 'undefined')
export class SiteStore {
    popUpFormState = true;
    isWebp = false;

    constructor() {
         makeAutoObservable(this);
       /* makeObservable(this, {
            popUpFormState: observable,
            switchPopUpFormState: action,
        })*/

        if (typeof window !== 'undefined') {
            this.canUseWebp();
        }

    }

    switchPopUpFormState = (state) => {
        if(state){
            this.popUpFormState = state
        } else {
            this.popUpFormState = !this.popUpFormState;
        }
    }

    canUseWebp = () => {
        // Создаем элемент canvas
        const elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // Создаем изображение в формате webp, если удалось создать, то isWebp = true
            this.isWebp = elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        } else {
            this.isWebp = false;
        }
    }
}
//const SiteStore = new siteStore();
//export default SiteStore;