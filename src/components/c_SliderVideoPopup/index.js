import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {C_SliderDeveloper} from "../c_Slider_Developer";
import { C_SliderPopupElement } from "../c_SliderPopupElement";

export const C_SliderVideoPopup = ({className, data, isPopupClose, setIsPopupClose, popup}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [width, height] = useContext(Context);

    const {slider, video} = data.about_company.variableContent;

    const divBlock = useRef(null);
    const showDivWidth = () => {
        // console.log(divBlock.current.getBoundingClientRect().width);
        // console.log(divBlock.current.getBoundingClientRect());
        // console.log(divBlock.current.getBoundingClientRect());
    }

    const [heightBlock, setHeightBlock] = useState(0);
    useEffect(() => {
        showDivWidth()
        setHeightBlock(divBlock.current.getBoundingClientRect().width / 1.4756)
    }, [width])

    const elements = slider.gallery.map((el, i) => {
        return <C_SliderPopupElement key={i} img={el.src} popup={popup}/>
    })

    return (
        <div className={classNames(classes.popupWrapper, {[classes.shownPopup]: popup && !isPopupClose})}>
            <button className={classes.closeIcon} onClick={() => setIsPopupClose(true)}/>
            <div className={cls} ref={divBlock}
                 // style={{ height:  `${width < sizes.widthTabletMd ? 190 : heightBlock}px`}}
            >
                {slider.isVisible && !video.isVisible
                    ? <C_SliderDeveloper
                        className={classes.Popup_Slider}
                        isBtnClose={false}
                        items={elements}
                        initialSlide={0}
                        slidesPerView={1}
                        slidersSpaceBetween={0}
                        loop={width < sizes.widthDesktopLg}
                        />
                    : <div>video</div>
                }
            </div>
        </div>
    )
}