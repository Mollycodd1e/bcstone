import classNames from 'classnames';
import classes from './style.module.scss';
import {useState} from "react";

export const S_Popup = ({className, data, isPopupClose, setIsPopupClose, children}) => {
    const cls = classNames(classes.root, {[className]: className, [classes.closePopup]:isPopupClose});

    return (
        <div className={cls}>
            <button onClick={() => setIsPopupClose(true)}/>
            {children}
        </div>
    )
}