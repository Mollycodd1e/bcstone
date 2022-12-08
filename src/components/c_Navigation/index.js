import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../c_Logo";
import { C_MainButton } from "../c_MainButton";
import { C_Nav_List } from "../c_Nav_List";
import { useState } from "react";


export function C_Navigation({className, data, setIsPopupClose,  briefing}) {
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
                <C_Nav_List className={classes.C_Nav_List} data={data} briefing={ briefing}/>
                <C_MainButton text={"Оставить заявку"} onClick={() => setIsPopupClose(false)} className={classes.C_MainButton} mode={true} />
                {/*<c_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} className={classes.c_MainButton} mode={true} />*/}
            </div>
        </nav>
    )
}