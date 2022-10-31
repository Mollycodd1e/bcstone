import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import { C_Slider } from "../../components/c_Slider";
import { C_PressCard } from "../../components/c_PressCard";
import { C_MainButton } from "../../components/c_MainButton";
import {sizes} from "../../data/sizes";

export const S_PressCenter = ({className, data}) => {
    
    const cls = classNames(classes.root, {[className]: className });
    const data_4 = data.news;
    
    const allCards = [];

    let cuttedElements = data_4 && data_4.list.length !==0 && data_4.list.slice(0, data_4.config.shownElements);
    cuttedElements.sort(function (a, b) {
        return a.order - b.order;
    })

    cuttedElements.forEach(item => {
      allCards.push(<C_PressCard date={item.date} image={item.pic.src} title={item.title} description={item.content}/>)
    });

    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <div className={classes.wrapper}>
                <div className={classes.PressCenterTitle}>
                    <div className={classes.bg_text}>Новости</div>
                    <div className={classes.wrap_title}>
                        <span>Пресс</span>
                        <span>-центр</span>
                    </div>
                </div>
                <div className={classes.sliderWrapper}>
                  <C_Slider className={classes.pressing} items={allCards} initialSlide={0} slidersSpaceBetween={
                        window.innerWidth < sizes.widthTabletSm ? -255 :
                        (window.innerWidth >= sizes.widthTabletMd && window.innerWidth < sizes.widthNotebook) ? -513 :
                        (window.innerWidth >= sizes.widthNotebook && window.innerWidth < sizes.widthDesktopSm) ? -520 :
                        (window.innerWidth >= sizes.widthDesktopSm && window.innerWidth < sizes.widthDesktopMd) ? 15 :
                        (window.innerWidth >= sizes.widthDesktopMd && window.innerWidth < sizes.widthDesktopLg) ? -30 :
                         window.innerWidth >= sizes.widthDesktopLg ? 0 : -170}
                        slidesPerView = {3} press={true}/>
                </div>
                {/* <div className={classes.btnWrapper}>
                    <a href="#">Подробнее</a>
                </div> */}
                <C_MainButton className={classes.C_MainButton} text={'Подробнее'}/>
                </div>
            </div>
        </div>
    )
}