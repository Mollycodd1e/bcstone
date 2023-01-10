import {action, makeAutoObservable, makeObservable, observable} from 'mobx';
import React from "react";
import {enableStaticRendering} from "mobx-react-lite";

enableStaticRendering(typeof window === 'undefined')
export class SiteStore {
    popUpFormState = true;
    constructor() {
         makeAutoObservable(this);
       /* makeObservable(this, {
            popUpFormState: observable,
            switchPopUpFormState: action,
        })*/
    }

    switchPopUpFormState = () => {
        this.popUpFormState = !this.popUpFormState;
    }
}
//const SiteStore = new siteStore();
//export default SiteStore;