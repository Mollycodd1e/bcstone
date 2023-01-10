import classes from './style.module.scss';
import classNames from "classnames";
import { C_Navigation } from "@/components/c_Navigation";
import { C_ContactsMenu } from "@/components/c_ContactsMenu";
import { C_Logo } from "@/components/c_Logo";
import {useRef, useState} from "react";
import menuOnTop from "../../hooks/MenuOnTop";

export const S_MenuC = ({className, data}) => {
    const topMenuEl = useRef(null);
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop(topMenuEl), [className]: className});
    return (
        <div className={cls} ref={topMenuEl}>
            <C_Logo className={classes.C_Logo_Menu} />
            <C_Navigation className={classes.C_Navigation} data={data}/>
            <C_ContactsMenu className={classes.C_ContactsMenu} data={data} />
        </div>
    )
}