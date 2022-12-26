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
    const [isWebp, setIsWebp] = useState(false);

    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }  

    useEffect(() => {
        showDivWidth()
        setHeightBlock(divBlock.current.getBoundingClientRect().width / 1.4756)
    }, [width])

    useEffect(() => {
        setIsWebp(false);
        function canUseWebp() {
            // Создаем элемент canvas
            let elem = document.createElement('canvas');
            // Приводим элемент к булеву типу
            if (!!(elem.getContext && elem.getContext('2d'))) {
                // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
                setIsWebp(true);
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
            }
            // Иначе Webp не используем
            return false;
        };
        canUseWebp();
    },[])

    const elements = sliderVideoPopupContent.slider.gallery.map((el, i) => {
        // return <C_SliderPopupElement key={i} img={el.src} popup={popup}/>
        {if (width < sizes.widthTabletMd) {
            return <C_SliderPopupElement key={i} 
             img={isWebp ? `${retina ? el.src : el.src}`: `${retina ? el.src : el.src}`} popup={popup}/>
        } else {
            return <C_SliderPopupElement key={i} 
            img={isWebp ? `${retina ? el.src : el.src}`: `${retina ? el.src : el.src}`} popup={popup}/>
        }}
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
                        loop={true}
                        />
                    : <iframe  src={!popup ? sliderVideoPopupContent.video.src : ''} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                }
            </div>
        </div>
    )
}