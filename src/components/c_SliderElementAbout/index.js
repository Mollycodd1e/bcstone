import {useEffect, useRef} from "react";
import classes from './style.module.scss';
import classNames from "classnames";

export const C_SliderElementAbout = ({className, img}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <div className={cls} style={{ backgroundImage:  `url("${img}")`}} />
    )
}