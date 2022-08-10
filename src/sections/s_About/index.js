import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_ContentAbout} from "../../components/c_ContentAbout";
import {C_MainButton} from "../../components/c_MainButton";
import {sizes} from "../../data/sizes";

export const S_About = ({className, menuOnTop, data, width}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});
    const isTablet = width >= sizes.widthTabletMd;

    return (
        <div className={cls}>
            <div className={classes.frame}>
                <div className={classes.bg_text}>
                    О нас
                </div>
                <div className={classes.title}>
                    Девелопер
                </div>

                <C_ContentAbout data={data} />
                {isTablet ? <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')}
                               className={classes.C_MainButton}/> : null}
            </div>
        </div>
    )
}