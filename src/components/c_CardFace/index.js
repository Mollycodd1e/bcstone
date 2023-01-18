import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "@/data/sizes";
import React, {useContext} from "react";
import {useStore} from "../../store/stores";

export const С_CardFace = ({className, logo, alt, img, img_not_retina, img2x, imgMob, img2xMob, extraInfo, link, setIsPopupClose, imgWebp, img_not_retina_Webp}) => {
    const cls = classNames(classes.root, {[className]: className });
    const {width, height} = useContext(Context);
    const store = useStore();
    const isWebp = store.isWebp;
    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }

    return (
        link === '' ? 
            <div className={cls} onClick={() => store.switchPopUpFormState()}>
                {width < sizes.widthTabletMd ? 
                <div
                    className={classes.pic}
                    style={{ backgroundImage: `url("${retina ? isWebp && imgWebp ? imgWebp : img : isWebp && img_not_retina_Webp ? img_not_retina_Webp : img_not_retina }")`}}
                />
                : <div
                    className={classes.pic}
                    style={{ backgroundImage: `url("${retina ? isWebp && imgWebp ? imgWebp : img : isWebp && img_not_retina_Webp ? img_not_retina_Webp : img_not_retina }")`}}
                  />
                }
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}

            </div> : 

            <a href={link} target={"_blank"} rel="noreferrer">
                <div className={cls}>
                {width < sizes.widthTabletMd ? 
                    <div
                        className={classes.pic}
                        style={{ backgroundImage: `url("${retina ? isWebp && imgWebp ? imgWebp : img : isWebp && img_not_retina_Webp ? img_not_retina_Webp : img_not_retina }")`}}
                    />
                :
                    <div
                        className={classes.pic}
                        style={{ backgroundImage: `url("${retina ? isWebp && imgWebp ? imgWebp : img : isWebp && img_not_retina_Webp ? img_not_retina_Webp : img_not_retina }")`}}
                    />
                }
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}
                </div>
            </a>

    )
}