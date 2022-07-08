import classes from './style.module.scss';
import classNames from "classnames";
import {moreInfoBtn} from "../../data/helper";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {useContext} from "react";
import React from "react";

export const С_CardBtn = ({className, bgColorFirst, bgColorSecond, textColor, isMainCardBtn, link, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, {[classes.mainCardBtn]: isMainCardBtn, [classes.secondaryCardBtn]: !isMainCardBtn, [className]: className });
    const [width, height] = useContext(Context);
    // const {setIsPopUpVisible} = useContext(Context);
    return (
        <React.Fragment>
            {
                link === "" ? <button
                    className={cls}
                    style={{
                        backgroundColor: !isMainCardBtn && width < sizes.widthNotebook ? bgColorSecond : bgColorFirst,
                        color: textColor,
                    }}
                    onClick={() => setIsPopUpVisible(true)}
                >
                    {moreInfoBtn.text}
                </button> :
                <a
                    href={link}
                    target={"_blank"}
                    rel="noreferrer"
                    className={cls}
                    style={{
                        backgroundColor: !isMainCardBtn && width < sizes.widthNotebook ? bgColorSecond : bgColorFirst,
                        color: textColor,
                    }}
                >
                    {moreInfoBtn.textLink}
                </a>
            }
        </React.Fragment>
    )
}