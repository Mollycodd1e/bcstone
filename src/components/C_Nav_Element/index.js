import classes from './style.module.scss';
import classNames from "classnames";
import {useState} from "react";
import {C_Nav_Sub_List} from "../C_Nav_Sub_List";

export const C_Nav_Element = ({className, item, el, key}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [toggle, setToggle] = useState(false);
    const {name, sub} = el;
    return (
        <li
            key={key}
            className={cls}
        >
            <span className={classNames({[classes.chevronWrapper]: toggle && sub.length !== 0})}>
                <span
                    className={classes.firstLvlMenuName}
                    onMouseOver={() => setToggle(prev => true)}
                    onMouseOut={() => setToggle(prev => false)}
                    // onClick={() => setToggle(prev => !prev)}
                >
                    {name}
                </span>
                {sub.length !== 0 && <div
                    className={classNames({
                        [classes.chevron]: sub.length !== 0,
                        [classes.chevronActive]: toggle && sub.length !== 0
                    })}
                />}
            </span>
            <C_Nav_Sub_List
                item={item}
                toggle={toggle}
                setToggle={setToggle}
                el={el}
            />
        </li>
    )
}