import classes from './style.module.scss';
import classNames from "classnames";
import React from "react";

export const AdvTopItem = ({className, icon, title, text, code}) => {
    const cls = classNames(classes.root, classes[`${code}Area`], { [className]: className });
    return (
        <div className={cls}>
            <div className={classNames(classes.icon, classes[code])} dangerouslySetInnerHTML={{ __html: icon}} />
            <div className={classes.title} dangerouslySetInnerHTML={{ __html: title}} />
            <div className={classes.text} dangerouslySetInnerHTML={{ __html: text}} />
        </div>
    )
}