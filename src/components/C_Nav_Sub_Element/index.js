import classes from './style.module.scss';
import classNames from "classnames";

export const C_Nav_Sub_Element = ({className, el, i}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {name, color} = el;

    return (
        <li
            className={cls}
            key={name + i}
        >
            <a href="#" className={classes.projectName}>
                <span className={classes.marked}>STONE </span>
                <span>{name}</span>
                <span
                    className={classes.underline}
                    style={{backgroundColor: `${color}`}}
                />
            </a>
        </li>
    )
}