import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";
import Image from "next/image";

export const AdvBtmItem = ({className, img, signature, title, reason, isDesktop, mode, extraText}) => {
    let widthValue = isDesktop ? 1200 : 576;
    let heightValue = isDesktop ? 542 : 450;

    const cls = classNames(classes.root, classes[`rootMode_${mode}`], { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.imgWrapper}>
                <Image
                    src={img}
                    layout="intrinsic"
                    width={widthValue}
                    height={heightValue}
                    alt={reason}
                />
            </div>
            <div className={classes.signature}>{signature}</div>
            <div className={classes.title} dangerouslySetInnerHTML={{ __html: title}} />
            <div className={classes.extraText} dangerouslySetInnerHTML={{ __html: extraText}} />
            <div className={classes.reason}>{reason}</div>
        </div>
    )
}