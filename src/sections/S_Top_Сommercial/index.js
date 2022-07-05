import classes from './style.module.scss';
import classNames from "classnames";
import {C_MainButton} from "../../components/C_MainButton";
import React, {useContext, useRef, useState} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {С_Slider} from "../../components/С_Slider";

const nums = [1, 2, 3];

const myDatas = [
    {
        "title": "Классический текст",
        "content": "Является искажённым отрывком из философского трактата Марка Туллия",
        "link": "",
        "color": "#43111D"
    },
    {
        "title": "Классический текст",
        "content": "«О пределах добра и зла», написанного в 45 году до н. э. на латинском языке",
        "link": "",
        "color": "#E1FD4A"
    },
    {
        "title": "Много текста, когда не будет помещаться",
        "content": "Обнаружение сходства приписывается Ричарду…",
        "link": "",
        "color": "#505998"
    }
]



export const S_Top_Commercial = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthDesktopLg;

    const elements = nums.map((el) => {
        return (
            <div>
                {el}
            </div>
        )
    })

    return (
        <div className={cls} >
            <С_Slider isBtnClose={true} items={elements} initialSlide={0} />
        </div>
    )
}