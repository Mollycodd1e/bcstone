import classes from './style.module.scss';
import classNames from "classnames";
import {С_CardFace} from "../c_CardFace";
import {С_CardInfo} from "../c_CardInfo";
import {С_CloseBtn} from "../c_CloseBtn";
import {С_CardBtn} from "../c_CardBtn";

export const C_RegularCard = ({
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
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            { isBtnClose ?
                <С_CloseBtn
                    className={classes.CloseBtn}
                    mode={'dark'}
                    onClick={onBtnCloseClick}
                />
                : null
            }
            <div className={classes.wrapper}>
                <С_CardFace
                    logo={logo}
                    alt={alt}
                    img={img}
                    img2x={img2x}
                    imgMob={imgMob}
                    img2xMob={img2xMob}
                    extraInfo={extraInfo}
                />
                <С_CardInfo
                    title={title}
                    list={list}
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
            <div
                className={classes.decor}
                style={{
                    backgroundColor: bgColorFirst,
                }}
            />
        </div>
    )
}