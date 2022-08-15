import React, {useContext} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";

export const C_SliderVideoAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [width, height] = useContext(Context);
    const {slider, video} = data.about_company.variableContent;
    console.log(slider.gallery)

    const elements = slider.gallery.map((el, i) => {
        return <C_SliderElementAbout key={i} img={el.src}/>

    })


    return (
        <div className={cls}>
            {slider.isVisible && !video.isVisible
                ? <C_Slider className={classes.С_Slider} isBtnClose={false} items={elements} initialSlide={0} slidesPerView={width < sizes.widthTabletMd ? 3 : 1} />
                : <div>video</div>
            }
        </div>
    )
}