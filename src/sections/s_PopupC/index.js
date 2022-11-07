import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_PopupC = ({className, isAboutPopupClose, setIsAboutPopupClose, children}) => {
    const cls = classNames(classes.root, {[className]: className, [classes.closePopup]:isAboutPopupClose});

    return (
        <div className={cls}>
            <button className={classes.closeIcon} onClick={() => setIsAboutPopupClose(true)}/>
            {children}
        </div>
    )
}