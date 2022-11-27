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
    const [shownSliders, setShownSliders] = useState([]);
    const [width, height] = useContext(Context);
    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, shownSliders.length > 1 && width >= sizes.widthDesktopSm ? null : () => close(), () => close(), setIsPopUpVisible, isMapMode, data);
    const [initialSlide, setInitialSlide] = useState(0);
    const [clustersProjects, setClustersProjects] = useState([]);
    
   
    useEffect(() => {
        // console.log('clustersProjects', clustersProjects)
        const orderList = clustersProjects.map(project => {
            // project.properties.order - 1
            return parseFloat(project.properties.order - 1);
            // setShownSliders(prev => prev.length !== 0 && prev.unshift(project.properties.order - 1));
        })
        setShownSliders(orderList)
    }, [clustersProjects]);
    // useEffect(() => {
    //     console.log('initialSlide', initialSlide)
    // }, [initialSlide]);

    return (
        <div className={cls} >
                    <C_BasicMap
                        initialSlide={initialSlide}
                        setInitialSlide={setInitialSlide}
                        setIsCardVisible={setIsCardVisible}
                        isCardVisible={isCardVisible}
                        data={data}
                        clustersProjects={clustersProjects}
                        setClustersProjects={setClustersProjects}
                        shownSliders={shownSliders}
                        setShownSliders={setShownSliders}
                    />
                    {
                        isCardVisible && width < sizes.widthTabletMd
                        ?
                            <div className={classNames(classes.wrapperSlider, { [classes.mapSlider]: width === sizes.widthTabletSm })}>
                                <C_Slider map={true} isBtnClose={isBtnClose} items={rCards} initialSlide={shownSliders[0]} setIsPopUpVisible={setIsPopUpVisible} slidersSpaceBetween={width >= 768 ? -200 : -215}/>
                            </div>
                        : isCardVisible && width >= sizes.widthTabletMd ?
                            <div className={classes.fourCards}>
                                {
                                    shownSliders.slice(0, 4).map((slide, i) => {
                                        return (<div key={i}>
                                            {rCards[slide]}
                                        </div>)
                                    })
                                }
                            </div>
                            // <div className={classes.oneCard}>
                            //     {/*{rCards[initialSlide]}*/}
                            //     {rCards[shownSliders[0]]}
                            // </div>
                        : null
                    }
        </div>
    )
}