import classes from './style.module.scss';
import classNames from "classnames";

export const C_MainButton = ({className, text, onClick}) => {
    const cls = classNames(
        classes.root,
        {[className]: className}
    );
    return (
        <button className={cls} onClick={() => onClick()} >
            <span className={classes.span}/>
            <span className={classes.text}>{text}</span>
        </button>
    )
}