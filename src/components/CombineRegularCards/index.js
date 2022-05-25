import React, {useContext} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {regularCards} from "../../complexComponents/regularCards";
import {Slider} from "../Slider";

export const CombineRegularCards = ({className, isBtnClose, onBtnCloseClick, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    // const setIsPopUpVisible = useContext(Context);
    const rCards = regularCards(classes.RegularCard, isBtnClose, onBtnCloseClick, setIsPopUpVisible);

    return (
        <div className={cls}>
            {width < sizes.widthNotebook
                ?
                    <Slider isBtnClose={isBtnClose} items={rCards} initialSlide={0}/>
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