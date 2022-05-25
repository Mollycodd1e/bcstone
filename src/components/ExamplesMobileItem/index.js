import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import {Promo} from "../Promo";

export const ExamplesMobileItem = ({className, img, logo, type, year, code, isLogo, isPromo}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.imgWrapper}>
                <Image
                    src={img}
                    layout="intrinsic"
                    width={1082}
                    height={736}
                    alt={code}
                />
            </div>
            <div className={classes.year}>{`${year}г.`}</div>
            {
                isLogo ?
                    <div className={classNames(classes.logo, classes[`${code}Class`])} dangerouslySetInnerHTML={{ __html: logo}} />
                : null
            }
            {
                isPromo ?
                    <Promo className={classes.Promo} />
                : null
            }
            <div className={classes.type} dangerouslySetInnerHTML={{ __html: type}} />
        </div>
    )
}