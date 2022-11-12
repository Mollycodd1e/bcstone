import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_TextContentAbout} from "../c_TextContentAbout";
import { useState } from 'react';

export const C_ContentAbout = ({className, data, setIsAboutPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [isVideo, setIsVideo] = useState(false);

    return (
        <div className={classNames(classes.root, {[classes.video]: isVideo})}>
            <C_SliderVideoAbout data={data} className={classes.C_SliderVideoAbout} setIsAboutPopupClose={setIsAboutPopupClose} setIsVideo={setIsVideo}/>
            <C_TextContentAbout data={data} className={classes.C_TextContentAbout} />
        </div>
    )
}