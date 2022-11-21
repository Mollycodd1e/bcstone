import React, {useContext, useEffect, useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Slider} from "../c_Slider";
import {C_SliderElementAbout} from "../c_SliderElementAbout";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import { C_SliderDeveloper } from "../c_Slider_Developer";

export const C_SliderVideoAbout = ({className, data, setIsAboutPopupClose, popup, setIsVideo}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [width, height] = useContext(Context);

    const {slider, video} = data.about_company.variableContent;

    const divBlock = useRef(null);
    const showDivWidth = () => {
        // console.log(divBlock.current.getBoundingClientRect().width);
        // console.log(divBlock.current.getBoundingClientRect());
        // console.log(divBlock.current.getBoundingClientRect());
    }

    const [heightBlock, setHeightBlock] = useState(0);
    useEffect(() => {
        showDivWidth()
        setHeightBlock(divBlock.current.getBoundingClientRect().width / 1.4756)
    }, [width])

    const elements = slider.gallery.map((el, i) => {
        return <C_SliderElementAbout key={i} img={el.src} popup={popup}/>
    })

    video.isVisible ? setIsVideo(true) : setIsVideo(false);
    return (
        // <div className={cls} ref={divBlock}
        <div className={classNames(classes.root, {[classes.videoWrapper]: !slider.isVisible && video.isVisible})} ref={divBlock}
        // style={{ height:  `${width < sizes.widthTabletMd ? 190 : heightBlock}px`}}
        >
            {slider.isVisible && !video.isVisible
                ? <C_SliderDeveloper
                    onClick={() => popup ? null : setIsAboutPopupClose(false)}
                    className={classes.С_Slider}
                    isBtnClose={false}
                    items={elements}
                    initialSlide={0}
                    slidesPerView={width < sizes.widthTabletSm ? 3 : 1}
                    slidersSpaceBetween={width < sizes.widthMobilePreMd ? -215 : width < sizes.widthTabletSm ? -120 : 0}
                    loop={true}
                    />
                :  (video.isVisible ? setIsVideo(true) : setIsVideo(false),
                        <div className={classes.iframeWrapper}>
                            <div className={classes.popupLink} onClick={() => popup ? null : setIsAboutPopupClose(false)}></div>
                            <iframe  src={'https://www.youtube.com/embed/watch?v=t7BmHgAsodU&list=RDuL68nVQkbL4&index=3'} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        </div>)
            }
        </div>
    )
}