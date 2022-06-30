import classes from './style.module.scss';
import classNames from "classnames";
import { C_Navigation } from "../../components/C_Navigation";
import { C_ContactsMenu } from "../../components/C_ContactsMenu";
import { C_Logo } from "../../components/C_Logo";

export const S_Menu = ({className, menuOnTop}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});
    return (
        <div className={cls}>
            <C_Logo className={classes.C_Logo_Menu} />
            <C_Navigation className={classes.C_Navigation} />
            <C_ContactsMenu className={classes.C_ContactsMenu} />
        </div>
    )
}