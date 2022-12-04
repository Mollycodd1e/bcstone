import classes from './style.module.scss';
import classNames from "classnames";

export const C_ContactsMenu = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls}>
            <a href={"#"} className={classes.callMe} />
            <a href={"https://api.whatsapp.com/send?phone=79645640722"} className={classes.whatsapp} />
            <a href={`tel:${data.phone.phone_number}`} className={classes.phone}>{data.phone.phone_number_decoration}</a>
        </div>
    )
}