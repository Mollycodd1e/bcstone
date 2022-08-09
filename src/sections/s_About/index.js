import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";

export const S_About = ({className, menuOnTop, data}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});
    return (
        <div className={cls}>
            <div className={classes.frame}>
                <div className={classes.bg_text}>
                    О нас
                </div>
                <div className={classes.title}>
                    Девелопер
                </div>
            </div>
        </div>
    )
}