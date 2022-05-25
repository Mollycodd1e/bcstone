import classes from './style.module.scss';
import classNames from "classnames";
import {CardFace} from "../CardFace";
import {CardInfo} from "../CardInfo";
import {CardBtn} from "../CardBtn";
import {CloseBtn} from "../CloseBtn";

export const RegularCard = ({
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
                <CloseBtn
                    className={classes.CloseBtn}
                    mode={'dark'}
                    onClick={onBtnCloseClick}
                />
                : null
            }
            <div className={classes.wrapper}>
                <CardFace
                    logo={logo}
                    alt={alt}
                    img={img}
                    img2x={img2x}
                    imgMob={imgMob}
                    img2xMob={img2xMob}
                    extraInfo={extraInfo}
                />
                <CardInfo
                    title={title}
                    list={list}
                />
                <CardBtn
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