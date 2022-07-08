import React, {useContext, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import C_BasicMap from "../c_BasicMap";
import {C_Slider} from "../c_Slider";
import {CC_regularCards} from "../../complexComponents/cc_regularCards";


export const C_RegularMap = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [isCardVisible, setIsCardVisible] = useState(false);
    const close = () => setIsCardVisible(false);

    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, () => close(), setIsPopUpVisible);
    const [width, height] = useContext(Context);

    const [initialSlide, setInitialSlide] = useState(0);


    return (
        <div className={cls}>
            <C_BasicMap
                initialSlide={initialSlide}
                setInitialSlide={setInitialSlide}
                setIsCardVisible={setIsCardVisible}
                isCardVisible={isCardVisible}
            />
            {
                isCardVisible && width < sizes.widthNotebook
                ?
                    <div className={classes.wrapperSlider}>
                        <C_Slider isBtnClose={isBtnClose} items={rCards} initialSlide={initialSlide} setIsPopUpVisible={setIsPopUpVisible} />
                    </div>
                : isCardVisible && width >= sizes.widthNotebook ?
                    <div className={classes.oneCard}>
                        {CC_regularCards(classes.RegularCard, isBtnClose, () => close(), setIsPopUpVisible)[initialSlide]}
                    </div>
                : null
            }
        </div>
    )
}