import classes from './style.module.scss';
import classNames from "classnames";
import {CardFace} from "../CardFace";
import {CardBtn} from "../CardBtn";
import {CloseBtn} from "../CloseBtn";

export const SecondaryCard = ({
    className,
    logo,
    alt,
    img,
    img2x,
    imgMob,
    img2xMob,
    extraInfo,
    bgColorFirst,
    bgColorSecond,
    textColor,
    onBtnCloseClick,
    isBtnClose,
    closeBtnColor,
    link,
    setIsPopUpVisible,
}) => {
    const cls = classNames(classes.root, { [className]: className });
    console.log('link', link);
    return (
        <div className={cls}>
            { isBtnClose ?
                <CloseBtn
                    className={classes.CloseBtn}
                    mode={closeBtnColor || 'light'}
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
                <CardBtn
                    bgColorFirst={bgColorFirst}
                    bgColorSecond={bgColorSecond}
                    textColor={textColor}
                    isMainCardBtn={false}
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