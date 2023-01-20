import classNames from 'classnames';
import classes from './style.module.scss';
import {useRef} from "react";
import {useStore} from "../../store/stores";
import {observer} from "mobx-react-lite";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const S_Popup = observer(function S_Popup({className, children}) {
    const store = useStore()
    const cls = classNames(classes.root, {[className]: className, [classes.closePopup]:store.popUpFormState});
    const formRef = useRef();
    useOnClickOutside(formRef, (event) => {
        if(!store.popUpFormState) {
            store.switchPopUpFormState('false')
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    });

    return (
        <div className={cls} tabIndex={-1}>
            <div className={classes.formWrapper} ref={formRef}>
                <button className={classes.closeIcon} onClick={(e) =>  store.switchPopUpFormState()}/>
                {children}
            </div>
        </div>
    )
})

export default S_Popup