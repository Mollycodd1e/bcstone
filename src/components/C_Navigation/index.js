import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import main_data from "../../data/main.json"
import {useState} from "react";


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
                <ul className={classes.firstLvlMenuList}>
                    {main_data.menu.nav.map((el, item) => {
                        const [toggle, setToggle] = useState(false);

                        return (
                            <li
                                key={el.name + item}
                                className={classes.firstLvlMenuEl}
                                onClick={() => setToggle(prev => !prev)}
                            >
                                <span>{el.name}</span>
                                <ul key={"list" + item} className={classNames(classes.secondLvlMenuEl, {[classes.secondLvlMenuElActive]:toggle && el.sub.length !== 0})}>
                                    {el.sub.length !== 0 && el.sub.map((el, i) => {
                                        return (
                                            <li
                                                key={el.name + i}
                                            >
                                                {el.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
                <div>Оставить заявку</div>
            </div>
        </nav>
    )
}