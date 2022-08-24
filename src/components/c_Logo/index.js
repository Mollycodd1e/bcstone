import classes from './style.module.scss';
import classNames from "classnames";
import {links} from "../../data/stoneLinks";

export const C_Logo = ({className}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        <a className={cls} href={"#"} rel="noreferrer" />
    )
}