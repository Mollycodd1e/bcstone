import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';

export const C_MainMarker = ({className, onClick, imgDefault, imgActive, isPinActive, pointCount}) => {

    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls} onClick={onClick}
             style={{ backgroundImage:  `url("${isPinActive ? imgActive : imgDefault}")`}}
        >
            {pointCount}
        </div>
    )
}