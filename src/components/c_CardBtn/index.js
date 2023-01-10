import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "@/data/sizes";
import {Context} from "../../library";
import {useContext} from "react";
import React from "react";
import {useStore} from "../../store/stores";

export const C_CardBtn = ({className, bgColorFirst, bgColorSecond, textColor, isMainCardBtn, link, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[classes.mainCardBtn]: isMainCardBtn, [classes.secondaryCardBtn]: !isMainCardBtn, [className]: className });
    const {width, height} = useContext(Context);
    const store = useStore();
    
    return (
        <React.Fragment>
            {
                link === "" ? <button
                    className={cls}
                    style={{
                        backgroundColor: !isMainCardBtn && width < sizes.widthTabletMd ? bgColorSecond : bgColorFirst,
                        color: textColor,
                    }}
                    onClick={() => store.switchPopUpFormState()}
                >
                        Оставить заявку
                </button> :
                <a
                    href={link}
                    target={"_blank"}
                    rel="noreferrer"
                    className={cls}
                    style={{
                        backgroundColor: !isMainCardBtn && width < sizes.widthTabletMd ? bgColorSecond : bgColorFirst,
                        color: textColor,
                    }}
                >
                    Подробнее
                </a>
            }
        </React.Fragment>
    )
}