import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {C_SliderPopup} from "../c_Slider_Popup";
import { C_SliderPopupElement } from "../c_SliderPopupElement";

export const C_SliderVideoPopup = ({className, data, isAboutPopupClose, setIsAboutPopupClose, popup, sliderVideoPopupContent}) => {
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

    const elements = sliderVideoPopupContent.slider.gallery.map((el, i) => {
        return <C_SliderPopupElement key={i} img={el.src} popup={popup}/>
    })

    const closePopup = (evt) => {
        divBlock.current.contains(evt.target) ? null : setIsAboutPopupClose(true);
    }

    return (
        <div className={classNames(classes.popupWrapper, {[classes.shownPopup]: !popup && !isAboutPopupClose})} onClick={(e) => closePopup(e)}>
            <button className={classes.closeIcon} onClick={() => setIsAboutPopupClose(true)}/>
            <div className={classNames(classes.root, {[classes.popupVideoWrapper]: video.isVisible})} ref={divBlock}
                 // style={{ height:  `${width < sizes.widthTabletMd ? 190 : heightBlock}px`}}
            >
                {slider.isVisible && !video.isVisible
                    ? <C_SliderPopup
                        className={classes.Popup_Slider}
                        isBtnClose={false}
                        items={elements}
                        initialSlide={0}
                        slidesPerView={1}
                        pagination={width < sizes.widthTabletSm ? {"clickable": true} : false}
                        slidersSpaceBetween={0}
                        loop={width < sizes.widthDesktopLg}
                        />
                    : <iframe  src={!popup ? sliderVideoPopupContent.video.src : ''} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                }
            </div>
        </div>
    )
}