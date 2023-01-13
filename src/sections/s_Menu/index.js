import classes from './style.module.scss';
import classNames from "classnames";
import { C_Navigation } from "../../components/c_Navigation";
import { C_ContactsMenu } from "../../components/c_ContactsMenu";
import { C_Logo } from "../../components/c_Logo";
import {useRef} from "react";
import MenuOnTop from "../../hooks/MenuOnTop";

export const S_Menu = ({className, data, setIsPopupClose}) => {
    const topMenuEl = useRef(null);
    const cls = classNames(classes.root, {[classes.menuOnTop]:MenuOnTop(topMenuEl), [className]: className});
    return (
        <div className={cls} ref={topMenuEl}>
            <C_Logo className={classes.C_Logo_Menu} />
            <C_Navigation className={classes.C_Navigation} data={data} setIsPopupClose={setIsPopupClose}/>
            <C_ContactsMenu className={classes.C_ContactsMenu} data={data} />
        </div>
    )
}