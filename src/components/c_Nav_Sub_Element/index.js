import classes from './style.module.scss';
import classNames from "classnames";

export const C_Nav_Sub_Element = ({className, el, i, _key}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {name, color, link} = el;

    return (
        <li
            className={cls}
            key={_key}
        >
            <a
                href={`${link}`}
                // target={"_blank"}
                className={classes.projectName} onClick={() => setTimeout(() => document.location.assign(`${link}`), 500)}>
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