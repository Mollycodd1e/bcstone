import classes from './style.module.scss';
import classNames from "classnames";

export const Burger = ({className, isActive, setIsActive}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <div className={cls} onClick={() => setIsActive(prev => !prev)} >
            <div/>
            <div/>
            <div/>
        </div>
    )
}