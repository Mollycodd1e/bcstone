import React, {useContext, useEffect, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {C_BasicMap} from "../c_BasicMap";
import {C_Slider} from "../c_Slider";
import {CC_regularCards} from "../../complexComponents/cc_regularCards";
import { useRef } from "react";

export const C_RegularMap = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible, isMapMode, data}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [isCardVisible, setIsCardVisible] = useState(false);
    const close = () => setIsCardVisible(false);
    const [shownSliders, setShownSliders] = useState([]);
    const {width, height} = useContext(Context);
    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, shownSliders.length > 1 && width >= sizes.widthDesktopSm ? null : () => close(), () => close(), setIsPopUpVisible, isMapMode, data, shownSliders.length);
    const [initialSlide, setInitialSlide] = useState(0);
    const [clustersProjects, setClustersProjects] = useState([]);
   
    useEffect(() => {
        const orderList = clustersProjects.map(project => {
            return parseFloat(project.properties.order - 1);
        })
        setShownSliders(orderList)
    }, [clustersProjects]);

    return (
        <div className={cls} >
                    <C_BasicMap
                        initialSlide={initialSlide}
                        setInitialSlide={setInitialSlide}
                        setIsCardVisible={setIsCardVisible}
                        isCardVisible={isCardVisible}
                        data={data}
                        //clustersProjects={clustersProjects}
                        setClustersProjects={setClustersProjects}
                        shownSliders={shownSliders}
                        setShownSliders={setShownSliders}
                    />
                    
                    {
                        isCardVisible && width < sizes.widthTabletMd && shownSliders.length > 1
                        ?
                            <div className={classNames(classes.wrapperSlider, { [classes.mapSlider]: width === sizes.widthTabletSm })}>
                                <C_Slider centered={true} map={true} isBtnClose={isBtnClose} items={rCards.filter((item, i ) => shownSliders.includes(i, 0))} initialSlide={shownSliders[0]} setIsPopUpVisible={setIsPopUpVisible} slidersSpaceBetween={width >= 768 ? -200 : -215} loop={false}/>
                            </div>
                        : isCardVisible ?                            
                            <div className={classes.fourCards}>
                                { 
                                    shownSliders.slice(0, 4).map((slide, i) => {
                                        return (<div key={i}>
                                            {rCards[slide]}
                                        </div>)
                                    })
                                }
                            </div>
                        : null
                    }
        </div>
    )
}