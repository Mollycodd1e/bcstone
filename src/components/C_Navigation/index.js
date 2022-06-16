import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../C_Logo";
import main_data from "../../data/main.json"
import {useState} from "react";
import {C_MainButton} from "../C_MainButton";


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

                            >
                                <span className={classNames({[classes.chevronWrapper]: toggle && el.sub.length !== 0})}>
                                    <span onClick={() => setToggle(prev => !prev)}>{el.name}</span>
                                    {el.sub.length !== 0 && <div
                                        className={classNames({
                                            [classes.chevron]: el.sub.length !== 0,
                                            [classes.chevronActive]: toggle && el.sub.length !== 0
                                        })}
                                    />}
                                </span>
                                <ul key={"list" + item} className={classNames(classes.secondLvlMenuEl, {[classes.secondLvlMenuElActive]:toggle && el.sub.length !== 0})}>
                                    {el.sub.length !== 0 && el.sub.map((el, i) => {
                                        return (
                                            <li
                                                className={classes.subEl}
                                                key={el.name + i}
                                            >
                                                <a href="#">
                                                    <span className={classes.marked}>STONE </span>
                                                    <span>{el.name}</span>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
                <C_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} />
            </div>
        </nav>
    )
}