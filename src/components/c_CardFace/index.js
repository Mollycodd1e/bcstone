import classes from './style.module.scss';
import classNames from "classnames";

export const С_CardFace = ({className, logo, alt, img, img2x, imgMob, img2xMob, extraInfo, link, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className });
    // const isDesktop = width >= sizes.widthTabletMd;

    return (
        link === '' ? 
            <div className={cls} onClick={() =>  setIsPopupClose(false)}>
                <div
                    className={classes.pic}
                    style={{backgroundImage:  `url("${img}")`}}
                />   
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}

            </div> : 

            <a href={link}> 
                <div className={cls}>
                    <div
                        className={classes.pic}
                        style={{backgroundImage:  `url("${img}")`}}
                    />
                {extraInfo !== '' ? <div className={classes.extraInfo} dangerouslySetInnerHTML={{ __html: extraInfo}} /> : null}
                </div>
            </a>

    )
}