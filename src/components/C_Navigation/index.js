import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import { C_MainButton } from "../C_MainButton";
import { C_Nav_List } from "../C_Nav_List";
import { useState } from "react";


export function C_Navigation({className, data}) {
    const cx = classNames(classes.root, { [className]: className });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className={cx}>
            <div
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className={
                    classNames(
                        classes.burger,
                        {[classes.openBurger]: isMobileMenuOpen})}
            />
            <div className={classNames(
                classes.elements,
                {[classes.showElements]: isMobileMenuOpen})}
            >
                <C_Logo className={classes.C_Logo} />
                <C_Nav_List className={classes.C_Nav_List} data={data} />
                <C_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} className={classes.C_MainButton} mode={true} />
                {/*<C_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} className={classes.C_MainButton} mode={true} />*/}
            </div>
        </nav>
    )
}