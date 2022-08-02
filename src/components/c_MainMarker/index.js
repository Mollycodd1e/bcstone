import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';

export const C_MainMarker = ({className, onClick, imgDefault, imgActive, isPinActive}) => {

    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls} onClick={onClick}>
            <Image src={isPinActive ? imgActive : imgDefault}
                   layout="fixed"
                   height={41}
                   width={361}
            />
        </div>
    )
}