import classes from './style.module.scss';
import classNames from "classnames";

export const С_CloseBtn = ({className, mode, onClick}) => {
    
    const cls = classNames(
        classes.root,
        {
            [classes.dark]: mode === `dark`,
            [classes.light]: mode === `light`,
            [classes.transparent]: mode === `transparent`,
            [className]: className,
        }
    );
    return (
        <button className={cls} onClick={() => onClick()} />
    )
}