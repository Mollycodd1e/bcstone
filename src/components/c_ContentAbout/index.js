import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_TextContentAbout} from "../c_TextContentAbout";

export const C_ContentAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <div className={cls}>
            <C_SliderVideoAbout data={data} />
            <C_TextContentAbout data={data} />
        </div>
    )
}