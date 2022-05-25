import classes from './style.module.scss';
import classNames from "classnames";

export const Promo = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });

    return (
        <div className={cls}>
            <div className={classes.top}>Лучше</div>
            <div className={classes.btm}>Чем обещали!</div>
        </div>
    )
}