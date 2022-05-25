import React, {useContext, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "../../data/sizes";
import {Slider} from "../Slider";
import {regularCards} from "../../complexComponents/regularCards";
import {Context} from "../../library";
import MapType1 from "../MapType1";


export const RegularMap = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [isCardVisible, setIsCardVisible] = useState(false);
    const close = () => setIsCardVisible(false);

    const rCards = regularCards(classes.RegularCard, isBtnClose, () => close(), setIsPopUpVisible);
    const [width, height] = useContext(Context);

    const [initialSlide, setInitialSlide] = useState(0);


    return (
        <div className={cls}>
            <MapType1
                initialSlide={initialSlide}
                setInitialSlide={setInitialSlide}
                setIsCardVisible={setIsCardVisible}
                isCardVisible={isCardVisible}
            />
            {
                isCardVisible && width < sizes.widthNotebook
                ?
                    <div className={classes.wrapperSlider}>
                        <Slider isBtnClose={isBtnClose} items={rCards} initialSlide={initialSlide} setIsPopUpVisible={setIsPopUpVisible} />
                    </div>
                : isCardVisible && width >= sizes.widthNotebook ?
                    <div className={classes.oneCard}>
                        {regularCards(classes.RegularCard, isBtnClose, () => close(), setIsPopUpVisible)[initialSlide]}
                    </div>
                : null
            }
        </div>
    )
}