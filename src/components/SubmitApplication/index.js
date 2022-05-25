import classes from './style.module.scss';
import classNames from "classnames";
import {Phone} from "../Phone";
import {OpenPopupBtn} from "../OpenPopupBtn";

export const SubmitApplication = ({className, isActive, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <Phone isHeaderSection={true} isActive={isActive}/>
            <OpenPopupBtn isActive={isActive} className={classes.OpenPopupBtn} setIsPopUpVisible={setIsPopUpVisible} />
        </div>
    )
}