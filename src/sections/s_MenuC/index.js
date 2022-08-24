import classes from './style.module.scss';
import classNames from "classnames";
import { C_Navigation } from "../../components/c_Navigation";
import { C_ContactsMenu } from "../../components/c_ContactsMenu";
import { C_Logo } from "../../components/c_Logo";

export const S_MenuC = ({className, menuOnTop, data}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});
    return (
        <div className={cls}>
            <C_Logo className={classes.C_Logo_Menu} />
            <C_Navigation className={classes.C_Navigation} data={data} />
            <C_ContactsMenu className={classes.C_ContactsMenu} data={data} />
        </div>
    )
}