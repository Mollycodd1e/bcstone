import {makeAutoObservable} from 'mobx';
import React from "react";

export class siteStore {
    popUpFormState = true;
    constructor() {
        makeAutoObservable(this);
    }

    switchPopUpFormState(){
        this.popUpFormState = !this.popUpFormState;
    }
}
const SiteStore = new siteStore();
export default SiteStore;