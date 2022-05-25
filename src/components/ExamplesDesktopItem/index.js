import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import {Promo} from "../Promo";

export const ExamplesDesktopItem = ({className, imgBefore, imgAfter, logo, typeBefore, typeAfter, yearBefore, yearAfter, code}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.topBlock}>
                <div className={classes.project}>
                    <div className={classes.imgWrapper}>
                        <Image
                            src={imgBefore}
                            layout="intrinsic"
                            width={541}
                            height={368}
                            alt={`${code}_before`}
                        />
                    </div>
                    <div className={classes.year}>{yearBefore}</div>
                </div>
                <div className={classes.project}>
                    <div className={classes.imgWrapper}>
                        <Image
                            src={imgAfter}
                            layout="intrinsic"
                            width={541}
                            height={368}
                            alt={`${code}_after`}
                        />
                    </div>
                    <div className={classes.year}>{yearAfter}</div>
                    <Promo className={classes.Promo} />
                </div>
            </div>
            <div className={classes.btmBlock}>
                <div className={classes.typeBefore} dangerouslySetInnerHTML={{ __html: typeBefore}} />
                <div className={classNames(classes.logo, classes[`${code}Class`])} dangerouslySetInnerHTML={{ __html: logo}} />
                <div className={classes.typeAfter} dangerouslySetInnerHTML={{ __html: typeAfter}} />
            </div>
        </div>
    )
}