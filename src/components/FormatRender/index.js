import classes from './style.module.scss';
import classNames from "classnames";
import Image from "next/image";
import {contentOfficesMaxMobSizes} from "../../data/constants";
import React from "react";

export const FormatRender = ({className, img}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <Image
                src={img}
                layout="intrinsic"
                width={contentOfficesMaxMobSizes.width}
                height={contentOfficesMaxMobSizes.height}
            />
        </div>
    )
}