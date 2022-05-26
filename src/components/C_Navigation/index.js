import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import main_data from "../../data/main.json"


export function C_Navigation({className, actFooter, actServices, actMain, activeItem, setActiveItem, isClosed, setIsClosed}) {
    const cx = classNames(classes.navigation, { [className]: className });

    return (
        <nav className={cx}>
            <div className={classes.burger}>
                <div>Burger icon</div>
                <div>Close icon</div>
            </div>

            <div className={classNames(classes.elements)}>
                <C_Logo className={classes.C_Logo} />
                {main_data.menu.nav.map((el, i) => {
                    return (
                        <div key={i}>{el.name}</div>
                    )
                })}
                <div>Оставить заявку</div>
            </div>
        </nav>
    )
}