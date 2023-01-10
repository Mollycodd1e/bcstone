import classes from './style.module.scss';
import classNames from "classnames";
import {С_CardFace} from "../c_CardFace";
import {С_CardInfo} from "../c_CardInfo";
import {С_CloseBtn} from "../c_CloseBtn";
import {C_CardBtn} from "../c_CardBtn";
import { useState, useContext, useEffect } from 'react';
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import Link from 'next/link';

export const C_RegularCard = ({
    isMapMode,
    className,
    logo,
    alt,
    img,
    img_not_retina,
    img2x,
    imgMob,
    img2xMob,
    extraInfo,
    title,
    list,
    bgColorFirst,
    bgColorSecond,
    textColor,
    onBtnCloseClick,
    isBtnClose,
    link,
    setIsPopupClose,
    onCardCloseClick,
    i,
    cardsAmount,
    imgWebp,
    img_not_retina_Webp,
}) => {
    const [isWebp, setIsWebp] = useState(false);
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
        }
        canUseWebp();
    }, [])

    const [isCardHovered, setIsCardHovered] = useState(false);
    const cls = classNames(classes.root, { [classes.map_mod]: isMapMode});
    const [isCloseAllBtn, setIsCloseAllBtn] = useState(false);
    const {width, height} = useContext(Context);

    return (
        <div className={cls}>
            <div className={classes.closeBtnWrapper} onClick={ (evt) => onBtnCloseClick === null ?  evt.target.parentNode.parentNode.style='display: none;' : onBtnCloseClick} onMouseLeave={() => setIsCloseAllBtn(false)}>
            { isBtnClose ?
                
                <С_CloseBtn
                    className={classes.CloseBtn}
                    mode={isMapMode ? 'dark' : 'light'}
                    onClick={onBtnCloseClick}
                    setIsCloseAllBtn={setIsCloseAllBtn}
                    i={i}
                />
                : null
            }
            {width >= sizes.widthDesktopSm && cardsAmount > 1 ? 
                <button className={classNames(classes.closeAllBtn,{[classes.closeAllBtnShown]: isCloseAllBtn})} onClick={() => (setIsCloseAllBtn(false), (onCardCloseClick()))}>Закрыть все</button>
                : null
            }
            {/* add button link */}
            </div>
            <div className={classes.wrapper} onClick={() => isCardHovered ? '' : null}>
                    <div className={classes.faceWrap} onMouseEnter={() => setIsCardHovered(true)} onMouseOut={() => setIsCardHovered(false)}>
                        <С_CardFace
                            className={classes.С_CardFace}
                            logo={logo}
                            alt={alt}
                            img={img}
                            img_not_retina={img_not_retina}
                            img2x={img2x}
                            imgMob={imgMob}
                            img2xMob={img2xMob}
                            extraInfo={extraInfo}
                            link={link}
                            setIsPopupClose={setIsPopupClose}
                            isWebp={isWebp}
                            imgWebp={imgWebp}
                            img_not_retina_Webp={img_not_retina_Webp}
                        />
                        <C_CardBtn
                            bgColorFirst={bgColorFirst}
                            bgColorSecond={bgColorSecond}
                            textColor={textColor}
                            isMainCardBtn={true}
                            className={classes.CardBtn}
                            link={link}
                            setIsPopupClose={setIsPopupClose}
                        />
                    </div>
                <С_CardInfo
                    className={classes.С_CardInfo}
                    title={title}
                    list={list}
                    logo={logo}
                />
            </div>
            {/*<div*/}
            {/*    className={classes.decor}*/}
            {/*    style={{*/}
            {/*        backgroundColor: bgColorFirst,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    )
}