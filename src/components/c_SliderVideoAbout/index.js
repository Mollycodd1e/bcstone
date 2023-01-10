import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";
import {Context, Slides} from "../../library";
import {sizes} from "../../data/sizes";
import { C_SliderDeveloper } from "../c_Slider_Developer";
import {C_SliderPopupElement} from "../c_SliderPopupElement";

export const C_SliderVideoAbout = ({className, data, setIsAboutPopupClose, setIsVideo, popup, isWebp}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {width, height} = useContext(Context);

    const {slider, video} = data.about_company.variableContent;

    const divBlock = useRef(null);

    const [heightBlock, setHeightBlock] = useState(0);
    let [slideIndex, setSlideIndex] = useContext(Slides);
    const handleSlideChange = (event) => {
        setSlideIndex(event.activeIndex);
    }
    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }  

    useEffect(() => {
        setHeightBlock(divBlock.current.getBoundingClientRect().width / 1.4756)
    }, [width])

    const elements = retina ? slider.gallery.map((el, i) => {
        {if (width < sizes.widthTabletMd) {
            return <C_SliderElementAbout key={i} 
                                         img={isWebp ? el.srcWebp : el.src}/>
        } else {
            return <C_SliderElementAbout key={i}
                                         img={isWebp ? el.srcWebp : el.src}/>
        }}
    }) : slider.gallery_not_retina.map((el, i) => {
        {if (width < sizes.widthTabletMd) {
            return <C_SliderElementAbout key={i}
                                         img={isWebp ? el.srcWebp : el.src}/>
        } else {
            return <C_SliderElementAbout key={i}
                                         img={isWebp ? el.srcWebp : el.src}/>
        }}
    })

    useEffect(() => {
        if (width < sizes.widthTabletMd) {

        }
    },[width])
    
    useEffect(() => {
        video.isVisible ? setIsVideo(true) : setIsVideo(false);
    },[video]);

    return (
        <div className={classNames(cls, {[classes.videoWrapper]: !slider.isVisible && video.isVisible})} ref={divBlock}>
            {slider.isVisible && !video.isVisible
                ? <C_SliderDeveloper
                    onClick={() => !popup ? null : setIsAboutPopupClose(false)}
                    onChange={(event) => handleSlideChange(event)}
                    className={classes.С_Slider}
                    isBtnClose={false}
                    items={elements}
                    initialSlide={0}
                    slidesPerView={width < sizes.widthTabletSm ? 3 : 1}
                    slidersSpaceBetween={width < sizes.widthMobilePreMd ? -215 : width < sizes.widthTabletSm ? -120 : 0}
                    loop={true}
                    />
                :  (video.isVisible ? setIsVideo(true) : setIsVideo(false),
                        <div className={classes.iframeWrapper}>
                            <div className={classes.popupLink} onClick={() => !popup ? null : setIsAboutPopupClose(false)}/>
                            <iframe  src={video.src} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen/>
                        </div>)
            }
        </div>
    )
}