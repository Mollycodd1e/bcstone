import classNames from 'classnames';
import classes from './style.module.scss';
import {useEffect, useRef} from "react";

export const S_Popup = ({className, data, isPopupClose, setIsPopupClose, children}) => {
    const cls = classNames(classes.root, {[className]: className, [classes.closePopup]:isPopupClose});

    const ref = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        ref.current.focus();
      }, [isPopupClose]);

    const closePopup = (evt) => {
        if (evt.key === 'Escape') {
            setIsPopupClose(true);
        }
    }

    const closePopupAgain = (evt) => {
        formRef.current.contains(evt.target) ? null : setIsPopupClose(true);
    }
    
    return (
        <div className={cls} onKeyDown={(e) => closePopup(e)} tabIndex={-1} ref={ref} onClick={(e) => closePopupAgain(e)}>
            <button className={classes.closeIcon} onClick={() => setIsPopupClose(true)}/>
            <div className={classes.formWrapper} ref={formRef}>
              {children}  
              </div>  
        </div>
    )
}