import classes from './style.module.scss';
import classNames from "classnames";

export const C_LogoSH = ({className}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <a className={cls} href={"#"} rel="noreferrer" />
    )
}