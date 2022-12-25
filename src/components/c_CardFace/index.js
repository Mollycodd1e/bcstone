import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext, useEffect} from "react";

export const С_CardFace = ({className, logo, alt, img, img2x, imgMob, img2xMob, extraInfo, link, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    // const isDesktop = width >= sizes.widthTabletMd;

    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }

    return (
        link === '' ? 
            <div className={cls} onClick={() =>  setIsPopupClose(false)}>
                {width < sizes.widthTabletMd ? 
                <div
                    className={classes.pic}
                    style={{ backgroundImage:  `url("${retina ? img : img}")`}}
                />
                : <div
                    className={classes.pic}
                    style={{ backgroundImage:  `url("${retina ? img : img}")`}}
                  />
                }
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}

            </div> : 

            <a href={link}> 
                <div className={cls}>
                {width < sizes.widthTabletMd ? 
                    <div
                        className={classes.pic}
                        style={{ backgroundImage:  `url("${retina ? img : img}")`}}
                    />
                :
                    <div
                        className={classes.pic}
                        style={{ backgroundImage:  `url("${retina ? img : img}")`}}
                    />
                }
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}
                </div>
            </a>

    )
}