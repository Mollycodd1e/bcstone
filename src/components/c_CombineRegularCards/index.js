import React, {useContext} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {CC_regularCards} from "../../complexComponents/cc_regularCards";
import { C_Slider } from "../c_Slider";

export const C_CombineRegularCards = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible, isMapMode}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    // const setIsPopUpVisible = useContext(Context);
    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, onBtnCloseClick, setIsPopUpVisible, isMapMode);
    //todo добавить логику перехода с мобильного на планшетный размеры
    return (
        <div className={cls}>
            {width < sizes.widthDesktopLg
                ?
                    <C_Slider isBtnClose={isBtnClose} items={rCards} initialSlide={0}/>
                :
                    <>
                        {rCards.map((card, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {card}
                                    </React.Fragment>
                                )
                            })
                        }
                    </>
            }
        </div>
    )
}