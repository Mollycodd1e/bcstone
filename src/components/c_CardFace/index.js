import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext, useEffect, useState} from "react";

export const С_CardFace = ({className, logo, alt, img, img2x, imgMob, img2xMob, extraInfo, link, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className });
    const [width, height] = useContext(Context);
    const [isWebp, setIsWebp] = useState(false);
    // const isDesktop = width >= sizes.widthTabletMd;

    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }

    useEffect(() => {
        setIsWebp(false);
        function canUseWebp() {
            // Создаем элемент canvas
            let elem = document.createElement('canvas');
            // Приводим элемент к булеву типу
            if (!!(elem.getContext && elem.getContext('2d'))) {
                // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
                setIsWebp(true);
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
            }
            // Иначе Webp не используем
            return false;
        };
        canUseWebp();
    },[])

    return (
        link === '' ? 
            <div className={cls} onClick={() =>  setIsPopupClose(false)}>
                {width < sizes.widthTabletMd ?
                    <div
                        className={classes.pic}
                        style={{backgroundImage:  isWebp ? `url("${retina ? img : img}")` : `url("${retina ? img : img}")`}}
                    />  
                : 
                    <div
                        className={classes.pic}
                        style={{ backgroundImage:  isWebp ? `url("${retina ? img : img}")` : `url("${retina ? img : img}")`}}
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