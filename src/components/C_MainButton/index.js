import classes from './style.module.scss';
import classNames from "classnames";

export const C_MainButton = ({className, onClick}) => {
    const cls = classNames(
        classes.root,
        {[className]: className}
    );
    return (
        <button className={cls} onClick={() => onClick()} >Оставить заявку</button>
    )
}