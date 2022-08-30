import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {C_SliderDeveloper} from "../c_Slider_Developer";
import {C_SliderC} from "../c_SliderC";

export const C_SliderVideoAbout = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [width, height] = useContext(Context);
    const {slider, video} = data.about_company.variableContent;

    const divBlock = useRef(null);
    const showDivWidth = () => {
        console.log(divBlock.current.getBoundingClientRect().width);
        // console.log(divBlock.current.getBoundingClientRect());
        // console.log(divBlock.current.getBoundingClientRect());
    }

    const [heightBlock, setHeightBlock] = useState(0);
    useEffect(() => {
        showDivWidth()
        setHeightBlock(divBlock.current.getBoundingClientRect().width / 1.4756)
    }, [width])



    const elements = slider.gallery.map((el, i) => {
        return <C_SliderElementAbout key={i} img={el.src}/>

    })


    return (
        <div className={cls} ref={divBlock}
             // style={{ height:  `${width < sizes.widthTabletMd ? 190 : heightBlock}px`}}
        >
            {slider.isVisible && !video.isVisible
                ? <C_SliderDeveloper
                    className={classes.С_Slider}
                    isBtnClose={false}
                    items={elements}
                    initialSlide={0}
                    slidesPerView={width < sizes.widthTabletMd ? 3 : 1}
                    slidersSpaceBetween={0}
                    loop={width < sizes.widthTabletMd}
                    />
                : <div>video</div>
            }
        </div>
    )
}