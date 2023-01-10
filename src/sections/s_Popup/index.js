import classNames from 'classnames';
import classes from './style.module.scss';
import {useRef} from "react";
import SiteStore from "../../store/SiteStore";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export const S_Popup = ({className, children}) => {

    const cls = classNames(classes.root, {[className]: className, [classes.closePopup]:SiteStore.popUpFormState});
    const formRef = useRef();

    useOnClickOutside(formRef, () => {if(!SiteStore.popUpFormState) SiteStore.switchPopUpFormState()});

    return (
        <div className={cls} tabIndex={-1}>
            <div className={classes.formWrapper} ref={formRef}>
                <button className={classes.closeIcon} onClick={(e) => SiteStore.switchPopUpFormState()}/>
                {children}
            </div>  
        </div>
    )
}