import React, {useContext, useEffect, useRef, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {CC_regularCards} from "../../complexComponents/cc_regularCards";
import { C_Slider } from "../c_Slider";

export const C_CombineRegularCards = ({className, isBtnClose, onBtnCloseClick, isMapMode, data, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className });
    const {width, height} = useContext(Context);
    const [isCards, setIsCards] = useState(false);
    const cards = useRef();

    useEffect(() => {
        function onEntryCards(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                setIsCards(true);
              }
            });
        }
    
        let options = { rootMargin: '50px', threshold: [0.5] };
    
        let observer = new IntersectionObserver( onEntryCards, options);
    
        if (cards.current) {
            observer.observe(cards.current);
        } 
    })
    
    // const setIsPopUpVisible = useContext(Context);
    const rCards = CC_regularCards(classes.RegularCard, isBtnClose, onBtnCloseClick, null, setIsPopupClose, isMapMode, data);
    return (
        <div className={cls}>
            {width < sizes.widthDesktopSm
                ?
                    <C_Slider loop={true} isBtnClose={isBtnClose} items={rCards} initialSlide={0} slidersSpaceBetween={width < sizes.widthTabletSm ? -225 : width < sizes.widthTabletMd ? 180 : width < sizes.widthNotebook ? 280 : width < sizes.widthDesktopSm ? 80 : -150}/>
                :
                    <div className={classNames(classes.cards,{[classes.cardsShown]: isCards})} ref={cards}>
                        {rCards.map((card, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {card}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}