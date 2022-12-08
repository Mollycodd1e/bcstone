import classes from './style.module.scss';
import classNames from "classnames";
// import main_data from "../../data/main.json";
import {C_Nav_Element} from "../c_Nav_Element";

export const C_Nav_List = ({className, data,  briefing}) => {
    const cls = classNames(classes.root, {[className]: className});
    console.log(data)
    return (
        <ul className={cls}>
            {data.nav.map((el, item) => {
                return <C_Nav_Element
                    el={el}
                    item={item}
                    key={el+item}
                    briefing={briefing}
                />
            })}
        </ul>
    )
}