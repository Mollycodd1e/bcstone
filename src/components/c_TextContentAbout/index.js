import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_MainButton} from "../c_MainButton";

export const C_TextContentAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});

    const {description, plans} = data.about_company;
    return (
        <div className={cls}>
            <div className={classes.stoneHedgeLogo} />
            <div className={classes.description} dangerouslySetInnerHTML={{ __html: description}} />
            <div className={classes.plans} dangerouslySetInnerHTML={{ __html: plans}} />
        </div>
    )
}