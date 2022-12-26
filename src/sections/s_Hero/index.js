import classes from './style.module.scss';
import classNames from "classnames";
import {C_MainButton} from "../../components/c_MainButton";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";

// onMouseDown={(e) => {
//     const rect = topPic.current.getBoundingClientRect()
//
//     // console.log('Координата начала блока по X относительно документа:', rect.x + pageXOffset)
//     // console.log('координата начала блока по Y относительно документа:', rect.y + pageYOffset)
//     // console.log('Ширина блока:', topPic.current.clientWidth)
//     // console.log('Высота блока:', topPic.current.clientHeight)
//     // // console.log('Координата конца блока по X относительно документа:', rect.x + pageXOffset + topPic.current.clientWidth)
//     // // console.log('Координата конца блока по Y относительно документа:', rect.y + pageYOffset + topPic.current.clientHeight)
//     // console.log('Позиция курсора по X', e.pageX)
//     // console.log('Позиция курсора по Y', e.pageY)
//
//     let xBlockPercent = Math.abs(Math.round((e.pageX - (rect.x + pageXOffset))/(topPic.current.clientWidth / 100)))
//     let yBlockPercent = Math.abs(Math.round((e.pageY - (rect.y + pageYOffset))/(topPic.current.clientHeight / 100)))
//     // console.log('Позиция курсора по X в % относительно блока', xBlockPercent)
//     // console.log('Позиция курсора по Y в % относительно блока', yBlockPercent)
//
//
//     topPic.current.style.clipPath = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%);`
// }}
// onMouseUp={(e) => {
//     const rect = topPic.current.getBoundingClientRect()
//
//     // console.log('Координата начала блока по X относительно документа:', rect.x + pageXOffset)
//     // console.log('координата начала блока по Y относительно документа:', rect.y + pageYOffset)
//     // console.log('Ширина блока:', topPic.current.clientWidth)
//     // console.log('Высота блока:', topPic.current.clientHeight)
//     // // console.log('Координата конца блока по X относительно документа:', rect.x + pageXOffset + topPic.current.clientWidth)
//     // // console.log('Координата конца блока по Y относительно документа:', rect.y + pageYOffset + topPic.current.clientHeight)
//     // console.log('Позиция курсора по X', e.pageX)
//     // console.log('Позиция курсора по Y', e.pageY)
//
//     let xBlockPercent = Math.abs(Math.round((e.pageX - (rect.x + pageXOffset))/(topPic.current.clientWidth / 100)))
//     let yBlockPercent = Math.abs(Math.round((e.pageY - (rect.y + pageYOffset))/(topPic.current.clientHeight / 100)))
//     // console.log('Позиция курсора по X в % относительно блока', xBlockPercent)
//     // console.log('Позиция курсора по Y в % относительно блока', yBlockPercent)
//
//
//     topPic.current.style.clipPath = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%);`
// }}

export const S_Hero = ({className, data, setIsPopupClose}) => {
    const interactiveBlock = useRef(null);
    const topPic = useRef(null);
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    // const isDesktop = width >= sizes.widthDesktopLg;
    const isDesktop = width >= sizes.widthDesktopSm;
    const [isAnimation, setIsAnimation] = useState(false);
    const [isWebp, setIsWebp] = useState(false);
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

    return (
        <div className={cls} >
            {/*<div className={classes.textBlock}>*/}
            {/*    <div className={classes.titleHelper}>Бизнес-центры класса а</div>*/}
            {/*    <div className={classes.mainTitle}>STONE</div>*/}
            {/*    <div className={classes.listName}>Аренда / продажа офисов и ритейла <br/>в Москве у метро</div>*/}
            {/*    <ul className={classes.listInfo}>*/}
            {/*        <li className={classes.item}>Доходность до 45%</li>*/}
            {/*        <li className={classes.item}>Окупаемость 6 лет</li>*/}
            {/*        <li className={classes.item}>Вложения от 12 млн руб.</li>*/}
            {/*        <li className={classes.item}>Девелопер STONE HEDGE</li>*/}
            {/*    </ul>*/}
            {/*    <c_MainButton text={"Получить предложение"} onClick={() => console.log('click')} className={classes.mainButton} />*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className={classes.interactiveBlock}*/}
            {/*    ref={interactiveBlock}*/}
            {/*>*/}
            {/*    <div className={classes.btmPic} />*/}
            {/*    <div*/}
            {/*        className={classes.topPic}*/}
            {/*        ref={topPic}*/}
            {/*    />*/}
            {/*    <div className={classes.hover}*/}
            {/*         onMouseOver={(e) => {*/}
            {/*             updateCursor(e, topPic, interactiveBlock, 0)*/}
            {/*         }}*/}
            {/*         onMouseMove={(e) => {*/}
            {/*             updateCursor(e, topPic, interactiveBlock)*/}
            {/*         }}*/}
            {/*         onMouseOut={(e) => {*/}
            {/*             updateCursor(e, topPic, interactiveBlock, 0)*/}
            {/*         }}*/}
            {/*    />*/}
            {/*</div>*/}


            <div className={classes.titleHelper}>{data.logo_title}</div>
            <div className={classes.mainTitle} />
            <div className={classes.listName} dangerouslySetInnerHTML={{ __html: data.titile_description}}/>
            <ul className={classes.listInfo}>
                {data.list_description.map((el, i) => <li key={i} className={classes.item}>{el.text}</li>)}
            </ul>
            <C_MainButton text={"Получить предложение"} onClick={() => setIsPopupClose(false)} className={classes.mainButton} />

            <div
                className={classes.interactiveBlock}
                ref={interactiveBlock}
            >   
                {width < sizes.widthTabletMd ?

                    <div
                        className={classes.btmPic}
                        style={{
                            backgroundImage:  isWebp ? `url("${retina ? data.hero_image.front_img.src : data.hero_image.front_img.src}")` :
                                                       `url("${retina ? data.hero_image.front_img.src : data.hero_image.front_img.src}")`
                        }}
                    />
                :
                    <div
                        className={classes.btmPic}
                        style={{
                            backgroundImage:  isWebp ? `url("${retina ? data.hero_image.front_img.src : data.hero_image.front_img.src}")` :
                                                       `url("${retina ? data.hero_image.front_img.src : data.hero_image.front_img.src}")`
                        }}
                    />
                }
                {width < sizes.widthTabletMd ?
                    <div
                        className={classNames(classes.topPic, {[classes.topPicAnimation]:isAnimation})}
                        ref={topPic}
                        style={{
                            backgroundImage:  `url("${retina ? data.hero_image.back_img.src : data.hero_image.back_img.src}")`
                        }}
                    />
                :
                    <div
                        className={classNames(classes.topPic, {[classes.topPicAnimation]:isAnimation})}
                        ref={topPic}
                        style={{
                            backgroundImage:  `url("${retina ? data.hero_image.back_img.src : data.hero_image.back_img.src}")`
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