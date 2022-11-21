import classes from './style.module.scss';
import classNames from "classnames";

export const С_CloseBtn = ({className, mode, onClick, setIsCloseAllBtn, i}) => {
    
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
        <button className={cls} onClick={(evt) => onClick === null ?  evt.target.parentNode.style='display: none;' : onClick()} onMouseEnter={() => setIsCloseAllBtn(true)}/>
        // <button className={cls} onClick={(e) => e.target.parentNode.style='display: none;'} />
    )
}