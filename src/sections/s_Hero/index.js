import classes from './style.module.scss';
import classNames from "classnames";
import {C_MainButton} from "@/components/c_MainButton";
import React, {useContext, useRef, useState} from "react";
import {Context} from "../../library";
import {sizes} from "@/data/sizes";
import {useMobxStores} from "../../store/stores";
import SiteStore from "../../store/SiteStore";

export const S_Hero = ({className, data, setIsPopupClose, isWebp}) => {
    const interactiveBlock = useRef(null);
    const topPic = useRef(null);
    const cls = classNames(classes.root, {[className]: className });
    const {width, height} = useContext(Context);
    const isDesktop = width >= sizes.widthDesktopSm;
    const [isAnimation, setIsAnimation] = useState(false);
    const [isAnimationOff, setIsAnimationOff] = useState(false);
    const updateCursor = (e, topPic, interactiveBlock, customCircleSize = undefined, isTouchEvent = false) => {
        const rect = interactiveBlock.current.getBoundingClientRect();
        let xBlockPercent = 0;
        let yBlockPercent = 0;

        if ((isTouchEvent && e.touches && e.touches.length !==0 && e.touches[0].pageX) || (isTouchEvent && e.touches && e.touches.length !==0 && e.touches[0].pageY)) {
            xBlockPercent = Math.abs((e.touches[0].pageX - (rect.x + pageXOffset))/(interactiveBlock.current.clientWidth / 100))
            yBlockPercent = Math.abs((e.touches[0].pageY - (rect.y + pageYOffset))/(interactiveBlock.current.clientHeight / 100))
        } else {
            xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(interactiveBlock.current.clientWidth / 100))
            yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(interactiveBlock.current.clientHeight / 100))
        }

        if (customCircleSize === undefined) {
            let size = 0;
            const maxCircle = 4.1;
            const limitCircle = maxCircle * 50;
            const borderX = 40; // 0 - 50
            const borderY = width >= sizes.widthDesktopLg ? 25 : 30; // 0 - 50
            const specialYCorrection = ((100 / 4) / borderY)
            const specialXCorrection = ((95 / 2) / borderX)
            const grownSpeed = width >= sizes.widthDesktopLg ? 1.7 : 1.2;
            const totalGrownSpeed = maxCircle * grownSpeed;

            if (xBlockPercent <= borderX && yBlockPercent <= borderY) {
                size = Math.min((totalGrownSpeed * Math.min((xBlockPercent * specialXCorrection), (yBlockPercent * specialYCorrection))), limitCircle)
            } else if (xBlockPercent <= borderX && yBlockPercent > borderY) {
                size = Math.min((totalGrownSpeed * Math.min((xBlockPercent * specialXCorrection), (95 - yBlockPercent))), limitCircle)
            } else if (xBlockPercent > borderX && yBlockPercent > borderY) {
                size = Math.min((totalGrownSpeed * Math.min((100 - xBlockPercent), (95 - yBlockPercent))), limitCircle)
            } else {
                size = Math.min((totalGrownSpeed * Math.min((100 - xBlockPercent), (yBlockPercent * specialYCorrection))), limitCircle)
            }
            topPic.current.style['clip-path'] = `circle(${size}px at ${xBlockPercent}% ${yBlockPercent}%)`
        } else {
            topPic.current.style['clip-path'] = `circle(${customCircleSize}px at ${xBlockPercent}% ${yBlockPercent}%)`
        }
    }

    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }  

    return (
        <div className={cls} >
            <div className={classes.titleHelper}>{data.logo_title}</div>
            <div className={classes.mainTitle} />
            <div className={classes.listName} dangerouslySetInnerHTML={{ __html: data.titile_description}}/>
            <ul className={classes.listInfo}>
                <li className={classes.item} >Доходность до 40%</li>
                <li className={classes.item} >Рассрочка 0%</li>
                <li className={classes.item} >Вложения от 11,6 млн руб.</li>
                <li className={classes.item} >Офисный девелопер №1 <a href="https://realty.rbc.ru/news/6318526d9a794714f4879983" target="_blank" rel="noreferrer">по версии РБК</a></li>
            </ul>
            <C_MainButton text={"Получить предложение"} onClick={() => SiteStore.switchPopUpFormState()} className={classes.mainButton} />

            <div
                className={classes.interactiveBlock}
                ref={interactiveBlock}
            >   
                {width < sizes.widthTabletMd ?
                    <div
                        className={classes.btmPic}
                        style={{
                            backgroundImage:  `url("${retina ? isWebp && data.hero_image.front_img.srcWebp ? data.hero_image.front_img.srcWebp : data.hero_image.front_img.src : isWebp && data.hero_image.front_img.srcWebp? data.hero_image.front_img.srcWebp : data.hero_image.front_img.src}")`
                        }}
                    />
                :
                    <div
                        className={classes.btmPic}
                        style={{
                            backgroundImage:  `url("${retina ? isWebp && data.hero_image.front_img.srcWebp ? data.hero_image.front_img.srcWebp : data.hero_image.front_img.src : isWebp && data.hero_image.front_img.srcWebp? data.hero_image.front_img.srcWebp : data.hero_image.front_img.src}")`
                        }}
                    />
                }
                {width < sizes.widthTabletMd ?
                    <div
                        className={classNames(classes.topPic, {[classes.topPicAnimation]:isAnimation})}
                        ref={topPic}
                        style={{
                            backgroundImage:  `url("${retina ? isWebp && data.hero_image.back_img.srcWebp ? data.hero_image.back_img.srcWebp : data.hero_image.back_img.src : isWebp && data.hero_image.back_img.srcWebp ? data.hero_image.back_img.srcWebp : data.hero_image.back_img.src}")`
                        }}
                    />
                :
                    <div
                        className={classNames(classes.topPic, {[classes.topPicAnimation]:isAnimation})}
                        ref={topPic}
                        style={{
                            backgroundImage:  `url("${retina ? isWebp && data.hero_image.back_img.srcWebp ? data.hero_image.back_img.srcWebp : data.hero_image.back_img.src : isWebp && data.hero_image.back_img.srcWebp ? data.hero_image.back_img.srcWebp : data.hero_image.back_img.src}")`
                        }}
                    />
                }
                <div className={classNames(classes.hover, {[classes.animationOff]:isAnimationOff})}
                     onMouseOver={(e) => {
                         isDesktop ? updateCursor(e, topPic, interactiveBlock, 0) : e.preventDefault()

                     }}
                     onMouseMove={(e) => {
                         isDesktop ? updateCursor(e, topPic, interactiveBlock) : e.preventDefault()
                     }}
                     onMouseOut={(e) => {
                         isDesktop ? updateCursor(e, topPic, interactiveBlock, 0) : e.preventDefault()
                     }}
                     onClick={() => {
                         setIsAnimation(true);
                         setIsAnimationOff(true);
                     }}
                />
            </div>
        </div>
    )
}