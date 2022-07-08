import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext} from "react";

export const С_CardFace = ({className, logo, alt, img, img2x, imgMob, img2xMob, extraInfo}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;
    return (
        <div className={cls}>
            <div className={classes.logo} dangerouslySetInnerHTML={{ __html: logo}} />
            <Image
                className={classes.pic}
                alt={alt}
                src={isDesktop ? img2x : img2xMob}
                layout="fixed"
                width={isDesktop ? 253 : 274}
                height={isDesktop ? 207 : 151}
            />
            <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} />
        </div>
    )
}