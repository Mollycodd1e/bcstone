import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import {C_MainButton} from "../C_MainButton";
import {C_Nav_List} from "../C_Nav_List";


export function C_Navigation({className}) {
    const cx = classNames(classes.root, { [className]: className });
    return (
        <nav className={cx}>
            <div className={classes.burger}>
                <div>Burger icon</div>
                <div>Close icon</div>
            </div>
            <div className={classNames(classes.elements)}>
                <C_Logo className={classes.C_Logo} />
                <C_Nav_List />
                <C_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} />
            </div>
        </nav>
    )
}