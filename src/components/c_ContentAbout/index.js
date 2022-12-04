import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_TextContentAbout} from "../c_TextContentAbout";
import { useState } from 'react';

export const C_ContentAbout = ({className, data, setIsPopupClose, setIsAboutPopupClose, popup}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [isVideo, setIsVideo] = useState(false);

    return (
        <div className={classNames(cls, {[classes.video]: isVideo})}>
            <C_SliderVideoAbout className={classes.C_SliderVideoAbout} data={data} setIsAboutPopupClose={setIsAboutPopupClose} setIsVideo={setIsVideo} popup={popup}/>
            <C_TextContentAbout data={data} className={classes.C_TextContentAbout} setIsPopupClose={setIsPopupClose} setIsAboutPopupClose={setIsAboutPopupClose}/>
        </div>
    )
}