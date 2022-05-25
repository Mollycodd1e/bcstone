import React, {useContext, useEffect, useLayoutEffect, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {OfficesSlider} from "../../components/OfficesSlider";
import {examplesMobArr} from "../../complexComponents/examplesMobArr";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {exampleMainTitle, exampleProjectsDesktop} from "../../data/examples";
import {examplesDeskArr} from "../../complexComponents/examplesDeskArr";
import Image from "next/image";

export const Examples = ({className}) => {
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;
    const cls = classNames(classes.root, { [className]: className });
    const [activeElementM, setActiveElementM] = useState(0);
    const [activeElement, setActiveElement] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className={cls}>
            <div className={classes.exampleMainTitle} dangerouslySetInnerHTML={{ __html: exampleMainTitle}} />
            <OfficesSlider
                className={classes.slider}
                items={examplesMobArr()}
                setActiveElement={setActiveElementM}
                setSwiperInstance={setSwiperInstance}
                isAutoplay={false}
                isHelper={false}
            />
            <OfficesSlider
                className={classes.sliderDesktop}
                items={examplesDeskArr()}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
                isAutoplay={false}
                isHelper={false}
                isNavigation={true}
            />
            <div className={classes.navigationBlock}>
                <div
                    className={classes.sliderNumber}
                >
                    {`0${activeElement + 1}`}
                </div>
                <div
                    className={classes.imgWrapper}
                >
                    <Image
                        src={exampleProjectsDesktop[activeElement].img[1]}
                        layout="intrinsic"
                        width={74}
                        height={48}
                        alt={exampleProjectsDesktop[activeElement].code}
                    />
                </div>
                <button
                    className={classNames(classes.navBtn, classes.prevBtn)}
                    onClick={() => {
                        document.querySelector('div[class*="style_sliderDesktop"] div[class*="swiper-button-prev"]').click();
                    }}
                />
                <button
                    className={classNames(classes.navBtn, classes.nextBtn)}
                    onClick={() => {
                        document.querySelector('div[class*="style_sliderDesktop"] div[class*="swiper-button-next"]').click();
                    }}
                />
            </div>
        </div>
    )
}