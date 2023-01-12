import classes from './style.module.scss';
import classNames from "classnames";

export const C_ContactsMenu = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls}>
            <a href={"#"} className={classes.callMe} />
            <a href={"https://api.whatsapp.com/send?phone=79645640722"} className={classes.whatsapp} />
            <a href={'tel:+74950231065'} className={classes.phone}>+7 (495) 023-10-65</a>
        </div>
    )
}