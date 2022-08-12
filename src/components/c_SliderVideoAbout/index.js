import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";

export const C_SliderVideoAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});

    const {slider, video} = data.about_company.variableContent;
    console.log(slider.gallery)

    const elements = slider.gallery.map((el, i) => {
        return <C_SliderElementAbout img={el.src}/>

    })


    return (
        <div className={cls}>
            {slider.isVisible && !video.isVisible
                ? <C_Slider className={classes.С_Slider} isBtnClose={false} items={elements} initialSlide={0} />
                : <div>video</div>
            }
        </div>
    )
}