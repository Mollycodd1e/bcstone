import classes from './style.module.scss';
import classNames from "classnames";

export const C_ContactsMenu = ({className}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls}>
            <div className={classes.whatsup}>icon whatsup</div>
            <div className={classes.phone}>+7 (495) 023-10-65</div>
        </div>
    )
}