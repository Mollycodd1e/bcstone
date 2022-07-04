import classes from './style.module.scss';
import classNames from "classnames";

export const C_ContactsMenu = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls}>
            <a href={"#"} className={classes.callMe} />
            <a href={"#"} className={classes.whatsapp} />
            <a href={`tel:${data.data[0].phone.phone_number}`} className={classes.phone}>{data.data[0].phone.phone_number_decoration}</a>
        </div>
    )
}