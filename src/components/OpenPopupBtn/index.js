import classes from './style.module.scss';
import classNames from "classnames";
import {contacts} from "../../data/helper";

export const OpenPopupBtn = ({className, isActive, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <div className={cls} onClick={() => setIsPopUpVisible(prev => true)}>
            {contacts.OpenPopupBtn.text}
        </div>
    )
}