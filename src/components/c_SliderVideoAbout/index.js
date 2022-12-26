import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import { C_SliderDeveloper } from "../c_Slider_Developer";

export const C_SliderVideoAbout = ({className, data, setIsAboutPopupClose, setIsVideo, popup}) => {
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
    
    const elements = slider.gallery.map((el, i) => {
        {if (width < sizes.widthTabletMd) {
            return <C_SliderElementAbout key={i} 
             img={isWebp ? `${retina ? el.src : el.src}`: `${retina ? el.src : el.src}`}/>
        } else {
            return <C_SliderElementAbout key={i} 
            img={isWebp ? `${retina ? el.src : el.src}`: `${retina ? el.src : el.src}`}/>
        }}
    })
    
    useEffect(() => {
        video.isVisible ? setIsVideo(true) : setIsVideo(false);
    },[video]);

    return (
        // <div className={cls} ref={divBlock}
        <div className={classNames(cls, {[classes.videoWrapper]: !slider.isVisible && video.isVisible})} ref={divBlock}
        // style={{ height:  `${width < sizes.widthTabletMd ? 190 : heightBlock}px`}}
        >
            {slider.isVisible && !video.isVisible
                ? <C_SliderDeveloper
                    onClick={() => !popup ? null : setIsAboutPopupClose(false)}
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
                            <div className={classes.popupLink} onClick={() => !popup ? null : setIsAboutPopupClose(false)}></div>
                            <iframe  src={video.src} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>)
            }
        </div>
    )
}