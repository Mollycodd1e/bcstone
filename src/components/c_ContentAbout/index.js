import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_TextContentAbout} from "../c_TextContentAbout";
import { useState } from 'react';

export const C_ContentAbout = ({className, data, setIsAboutPopupClose, popup}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [isVideo, setIsVideo] = useState(false);

    return (
        <div className={classNames(cls, {[classes.video]: isVideo})}>
            <C_SliderVideoAbout data={data} className={classes.C_SliderVideoAbout} setIsAboutPopupClose={setIsAboutPopupClose} setIsVideo={setIsVideo} popup={popup}/>
            <C_TextContentAbout data={data} className={classes.C_TextContentAbout} />
        </div>
    )
}