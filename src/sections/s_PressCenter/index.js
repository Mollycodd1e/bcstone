import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import { C_Slider } from "../../components/c_Slider";
import { C_PressCard } from "../../components/c_PressCard";
import { C_MainButton } from "../../components/c_MainButton";
import {sizes} from "../../data/sizes";
import { useState } from "react";
import { useRef } from "react";

export const S_PressCenter = ({className, data}) => {
    
    const cls = classNames(classes.root, {[className]: className });
    // const data_4 = data.news;
    const data_4 = data;
    const allCards = [];
    const [isCenter, setIsCenter] = useState(false);
    const [isTitle, setIsTitle] = useState(false);
    const centerRef = useRef();
    const titleRef = useRef();
    // let cuttedElements = data_4 && data_4.list.length !==0 && data_4.list.slice(0, data_4.config.shownElements);
    // cuttedElements.sort(function (a, b) {
    //     return a.order - b.order;
    // })

    // cuttedElements.forEach(item => {
    //   allCards.push(<C_PressCard date={item.date} image={item.pic.src} title={item.title} description={item.content}/>)
    // });

    let cuttedElements = data_4.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, 6);
    
    cuttedElements.forEach(item => {
      allCards.push(<C_PressCard newsId={item.id} date={item.date} image={item.image} title={item.title} description={item.fullTextWithoutImg}/>)
    });

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsTitle(true);
          } else {
            // setIsTitle(false);
          }
        });
    }
    function onEntryCenter(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsCenter(true);
          } else {
            // setIsCenter(false);
          }
        });
    }
    let options = { rootMargin: '50px', threshold: [0.5] };
    let optionsCenter = { threshold: [0.5] };

    let observer = new IntersectionObserver( onEntry, options);
    let observerCenter = new IntersectionObserver( onEntryCenter, optionsCenter);

    if (titleRef.current) {
        observer.observe(titleRef.current);
    }

    if (centerRef.current) {
        observerCenter.observe(centerRef.current);
    }

    return (
        <div className={classes.wrapRoot} id={'Пресс-центр'}>
            <div className={classNames(cls,{[classes.lineShown]: isCenter})}>
                <div className={classes.wrapper}>
                    <div className={classNames(classes.PressCenterTitle,{[classes.titleShown]: isTitle})} ref={titleRef}>
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
                             window.innerWidth >= sizes.widthDesktopLg ? -15 : -170}
                            slidesPerView = {3} press={true} loop={true} loopedSlides={2}/>
                    </div>
                    {/* <div className={classes.btnWrapper}>
                        <a href="#">Подробнее</a>
                    </div> */}
                    <div ref={centerRef}>
                      <C_MainButton className={classes.C_MainButton} text={'Подробнее'} link={window.location.hostname === 'localhost' ? `/news` : `/news.html`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}