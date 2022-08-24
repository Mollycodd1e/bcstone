import classes from './style.module.scss';
import classNames from "classnames";
import React, {useContext} from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_MainButton} from "../c_MainButton";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";

export const C_TextContentAbout = ({className, data}) => {
    const [width, height] = useContext(Context);
    const cls = classNames(classes.root, {[className]: className});
    const isTablet = width >= sizes.widthTabletMd;
    const {description, plans} = data.about_company;
    return (
        <div className={cls}>
            <div className={classes.stoneHedgeLogo} />
            <div className={classes.description} dangerouslySetInnerHTML={{ __html: description}} />
            <div className={classes.plans} dangerouslySetInnerHTML={{ __html: plans}} />
            {isTablet ? <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')}
                                      className={classes.C_MainButton}/> : null}
        </div>
    )
}