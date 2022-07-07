import classes from './style.module.scss';
import classNames from "classnames";
import React, {useContext, useRef, useState} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {С_Slider} from "../../components/С_Slider";
import {C_Element_Top_Commertial} from "../../components/C_Element_Top_Commertial";

const test_data = {
    config: {
        "shownElements": 3,
    },
    "list": [
        {
            "title": "Классический текст",
            "content": "Является искажённым отрывком из философского трактата Марка Туллия",
            "link": "",
            "link_text": "Подробнее",
            "color": "#43111D"
        },
        {
            "title": "Просто текст",
            "content": "«О пределах добра и зла», написанного в 45 году до н. э. на латинском языке",
            "link": "",
            "link_text": "Подробнее",
            "color": "#E1FD4A"
        },
        {
            "title": "Классический текст",
            "content": "«О пределах добра и зла», написанного в 45 году до н. э. на латинском языке",
            "link": "",
            "link_text": "Подробнее",
            "color": "#505998"
        },
        {
            "title": "Много текста, когда не будет помещаться",
            "content": "Обнаружение сходства приписывается Ричарду…",
            "link": "",
            "link_text": "Подробнее",
            "color": "#505998"
        }
    ],
}



export const S_Top_Commercial = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const isTablet = width >= sizes.widthTabletMd;
    // const isDesktop = width >= sizes.widthDesktopLg;
    const cuttedElements = test_data.list.slice(0, test_data.config.shownElements);
    const elements = cuttedElements.map((el, i) => {
        return <C_Element_Top_Commertial element={el} key={i} />
    })

    return (
        <>
            {isTablet
                ? <div className={cls}>{elements}</div>
                : <div className={classes.sliderWrapper}><С_Slider className={classes.С_Slider} isBtnClose={true} items={elements} initialSlide={0} /></div>
            }
        </>
    )
}