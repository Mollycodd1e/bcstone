import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';

export const C_SliderPopupElement = ({className, img}) => {
    const cls = classNames(classes.root, {[className]: className});
    return (
        // <div className={cls} style={{ backgroundImage:  `url("${img}")`}} />
        <div className={cls}>
            <Image src={`${img}`} layout='fill'/>
        </div>
    )
}