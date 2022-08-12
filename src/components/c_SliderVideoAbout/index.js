import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_Slider} from "../c_Slider";

export const C_SliderVideoAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    console.log('123', data.about_company.variableContent)
    const {slider, video} = data.about_company.variableContent;


    return (
        <div className={cls}>
            {slider.isVisible && !video.isVisible ? <C_Slider className={classes.С_Slider} isBtnClose={false} items={elements} initialSlide={0} /> : <div>video</div>

            }
        </div>
    )
}