import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";


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
                <div>Проекты</div>
                <div>Пресс-центр</div>
                <div>Девелопер</div>
                <div>Контакты</div>
                <div>Оставить заявку</div>
            </div>
        </nav>
    )
}