import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";

export const C_SliderVideoAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <div className={cls}>

        </div>
    )
}