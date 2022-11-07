import classes from './style.module.scss';
import classNames from "classnames";
import React, {useContext, useRef, useState} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {C_Slider} from "../../components/c_Slider";
import {C_Element_Top_Commertial} from "../../components/c_Element_Top_Commertial";

export const S_Top_Commercial = ({className, data}) => {
    const data_2 = data.top_commercial;
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const isTablet = width >= sizes.widthTabletSm;
    let cuttedElements = data_2 && data_2.list.length !==0 && data_2.list.slice(0, data_2.config.shownElements);
    cuttedElements.sort(function (a, b) {
        return a.order - b.order;
    })

    const elements = cuttedElements.length !== 0 && cuttedElements.map((el, i) => {
        return <C_Element_Top_Commertial element={el} key={i} />
    })
    
    return (
        <>
            {isTablet
                ? <div className={cls}>{elements}</div>
                : <div className={classes.sliderWrapper}><C_Slider className={classes.С_Slider} isBtnClose={true} items={elements} initialSlide={0} slidersSpaceBetween = {0}/></div>
            }
        </>
    )
}