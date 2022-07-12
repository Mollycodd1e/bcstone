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

    const exmplPic ='https://stone-len.ru/_nuxt/img/slide1.ddcd6db.jpg';

    return (
        <div className={cls}>
            {/*<div className={classes.logo} dangerouslySetInnerHTML={{ __html: logo}} />*/}
            {/*<Image*/}
            {/*    className={classes.pic}*/}
            {/*    alt={alt}*/}
            {/*    src={isDesktop ? img2x : img2xMob}*/}
            {/*    layout="responsive"*/}
            {/*    // width={isDesktop ? 253 : 224}*/}
            {/*    // height={isDesktop ? 207 : 130}*/}
            {/*    width={'100w'}*/}
            {/*    height={'100w'}*/}
            {/*    // style={{width: "224px !important"}}*/}
            {/*/>*/}
            <div
                className={classes.pic}
                style={{ backgroundImage:  `url("${exmplPic}")`}}
            />
            {/*<div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} />*/}
        </div>
    )
}