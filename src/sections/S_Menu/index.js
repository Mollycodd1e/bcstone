import classes from './style.module.scss';
import classNames from "classnames";
import { C_Navigation } from "../../components/C_Navigation";
import { C_ContactsMenu } from "../../components/C_ContactsMenu";


export const S_Menu = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <div className={cls}>
            <C_Navigation />
            <C_ContactsMenu />
        </div>
    )
}