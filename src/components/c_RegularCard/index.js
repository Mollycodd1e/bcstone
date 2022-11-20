import classes from './style.module.scss';
import classNames from "classnames";
import {С_CardFace} from "../c_CardFace";
import {С_CardInfo} from "../c_CardInfo";
import {С_CloseBtn} from "../c_CloseBtn";
import {С_CardBtn} from "../c_CardBtn";
import { useState } from 'react';
import {sizes} from "../../data/sizes";
import {Context} from "../../library";

export const C_RegularCard = ({
    isMapMode,
    className,
    logo,
    alt,
    img,
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
    setIsPopUpVisible,
}) => {
    const [isCardHovered, setIsCardHovered] = useState(false);
    const cls = classNames(classes.root, { [classes.map_mod]: isMapMode});
    const [isCloseAllBtn, setIsCloseAllBtn] = useState(false);
    const [width, height] = useContext(Context);

    return (
        <div className={cls}>
            { isBtnClose ?
                
                <С_CloseBtn
                    className={classes.CloseBtn}
                    mode={'light'}
                    onClick={onBtnCloseClick}
                    setIsCloseAllBtn={setIsCloseAllBtn}
                />
                : null
            }
            {width >= sizes.widthDesktopSm ?
                <button className={classNames(classes.closeAllBtn,{[classes.closeAllBtnShown]: isCloseAllBtn})} onClick={() => (setIsCloseAllBtn(false), onBtnCloseClick())}>Закрыть все</button>
                : null
            }
            {/* add button link */}
            <div className={classes.wrapper} onClick={() => isCardHovered ? '' : null}> 
                <div className={classes.faceWrap} onMouseEnter={() => setIsCardHovered(true)} onMouseOut={() => setIsCardHovered(false)}>
                    <С_CardFace
                        className={classes.С_CardFace}
                        logo={logo}
                        alt={alt}
                        img={img}
                        img2x={img2x}
                        imgMob={imgMob}
                        img2xMob={img2xMob}
                        extraInfo={extraInfo}
                    />
                    <С_CardBtn
                        bgColorFirst={bgColorFirst}
                        bgColorSecond={bgColorSecond}
                        textColor={textColor}
                        isMainCardBtn={true}
                        className={classes.CardBtn}
                        link={link}
                        setIsPopUpVisible={setIsPopUpVisible}
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