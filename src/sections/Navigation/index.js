import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {navigation} from "../../data/navigation";
import {useContext} from "react";

export const Navigation = ({className, isActive, setIsActive}) => {
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    return (
        <div className={cls}>
            <ul className={classes.navList}>
                {navigation.map((el) => {
                    const {id, name, linkTo, img, mark} = el;

                    return (
                        <li key={id} className={classNames(classes.navItem, {[classes.mark]: mark})}>
                            <a className={classes.link} href={`#${linkTo}`} onClick={() => setIsActive(false)}>{name}</a>
                            {img && isDesktop?
                                <Image
                                    className={classes.image}
                                    alt={name}
                                    src={img}
                                    layout="fixed"
                                    width={471}
                                    height={974}
                                /> : null
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}