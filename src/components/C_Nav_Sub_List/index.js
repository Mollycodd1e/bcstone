import classes from './style.module.scss';
import classNames from "classnames";
import {C_Nav_Sub_Element} from "../C_Nav_Sub_Element";

export const C_Nav_Sub_List = ({className, item, toggle, setToggle, el}) => {
    const cls = classNames(classes.root, {[classes.secondLvlMenuElWrapperActive]:toggle && el.sub.length !== 0, [className]: className});
    return (
        <div
            key={"list" + item}
            className={cls}
            onMouseOver={() => setToggle(prev => true)}
            onMouseOut={() => setToggle(prev => false)}
        >
            <ul
                key={"list" + item}
                className={classNames(classes.secondLvlMenuEl)}

            >
                {el.sub.length !== 0 && el.sub.map((el, i) => {
                    return <C_Nav_Sub_Element
                        el={el}
                        i={i}
                    />
                })}
            </ul>
        </div>
    )
}