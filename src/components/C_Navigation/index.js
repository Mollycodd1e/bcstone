import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import {C_MainButton} from "../C_MainButton";
import {C_Nav_List} from "../C_Nav_List";
import {useState} from "react";


export function C_Navigation({className}) {
    const cx = classNames(classes.root, { [className]: className });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className={cx}>
            <div
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className={
                    classNames(
                        classes.burger,
                        {
                            [classes.openBurger]: isMobileMenuOpen
                        })
                }
            />
            <div className={classNames(classes.elements)}>
                <C_Logo className={classes.C_Logo} />
                <C_Nav_List />
                <C_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} />
            </div>
        </nav>
    )
}