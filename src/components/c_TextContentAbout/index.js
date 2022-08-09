import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_MainButton} from "../c_MainButton";

export const C_TextContentAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <div className={cls}>
            <div className={classes.stoneHedgeLogo} />
            <div className={classes.description} />
            <div className={classes.plans} />
            <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')} className={classes.C_MainButton} />
        </div>
    )
}