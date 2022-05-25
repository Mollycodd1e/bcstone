import classes from './style.module.scss';
import classNames from "classnames";

export const OfficesLI = ({className, element, isActive, onClick}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <div className={cls} onClick={onClick}>
            <div className={classes.decor}
                 dangerouslySetInnerHTML={{__html: `<svg height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8 16 8-8-8-8-8 8z\" fill=\"#f7f7f7\" fill-rule=\"evenodd\"/><circle cx=\"8\" cy=\"8\" fill=\"#2b2c2d\" r=\"3\"/></svg>`}}
            />
            <div>{element}</div>
        </div>
    )
}