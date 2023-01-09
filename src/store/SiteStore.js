import {makeAutoObservable} from 'mobx';
import React from "react";

export class siteStore {
    constructor() {
        makeAutoObservable(this);
        this.popUpFormState = true;
    }

    switchPopUpFormState(){
        this.popUpFormState = !this.popUpFormState;
    }
}
const SiteStore = new siteStore();
export default SiteStore;