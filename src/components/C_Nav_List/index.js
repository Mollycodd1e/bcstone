import classes from './style.module.scss';
import classNames from "classnames";
import main_data from "../../data/main.json";
import {C_Nav_Element} from "../C_Nav_Element";

export const C_Nav_List = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <ul className={cls}>
            {main_data.menu.nav.map((el, item) => {
                return <C_Nav_Element
                    el={el}
                    item={item}
                />
            })}
        </ul>
    )
}