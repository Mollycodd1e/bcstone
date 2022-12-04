import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext} from "react";
import Link from 'next/link';

export const С_CardFace = ({className, logo, alt, img, img2x, imgMob, img2xMob, extraInfo, link, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthTabletMd;

    const exmplPic ='https://stone-len.ru/_nuxt/img/slide1.ddcd6db.jpg';

    
    return (
        link === '' ? 
            <div className={cls} onClick={() =>  setIsPopupClose(false)}>
                <div
                    className={classes.pic}
                    style={{ backgroundImage:  `url("${img}")`}}
                />
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}

            </div> : 
            <Link href={link}>
                <div className={cls}>
                <div
                    className={classes.pic}
                    style={{ backgroundImage:  `url("${img}")`}}
                />
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}

                </div>
            </Link>
    )
}