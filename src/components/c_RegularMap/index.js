import React, {useContext, useEffect, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {C_BasicMap} from "../c_BasicMap";
import {C_Slider} from "../c_Slider";
import {CC_regularCards} from "../../complexComponents/cc_regularCards";


export const C_RegularMap = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible, isMapMode, data}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [isCardVisible, setIsCardVisible] = useState(false);
    const close = () => setIsCardVisible(false);

    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, () => close(), setIsPopUpVisible, isMapMode, data);
    const [width, height] = useContext(Context);

    const [initialSlide, setInitialSlide] = useState(0);
    const [clustersProjects, setClustersProjects] = useState([]);

    useEffect(() => {
        console.log('clustersProjects', clustersProjects)
    }, [clustersProjects]);

    return (
        <div className={cls}>
            <C_BasicMap
                initialSlide={initialSlide}
                setInitialSlide={setInitialSlide}
                setIsCardVisible={setIsCardVisible}
                isCardVisible={isCardVisible}
                data={data}
                clustersProjects={clustersProjects}
                setClustersProjects={setClustersProjects}
            />
            {
                isCardVisible && width < sizes.widthTabletMd
                ?
                    <div className={classes.wrapperSlider}>
                        <C_Slider isBtnClose={isBtnClose} items={rCards} initialSlide={initialSlide} setIsPopUpVisible={setIsPopUpVisible} />
                    </div>
                : isCardVisible && width >= sizes.widthTabletMd ?
                    <div className={classes.oneCard}>
                        {rCards[initialSlide]}
                    </div>
                : null
            }
        </div>
    )
}