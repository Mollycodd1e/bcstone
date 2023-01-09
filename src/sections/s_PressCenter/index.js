import React, { useEffect } from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import { C_Slider } from "@/components/c_Slider";
import { C_PressCard } from "@/components/c_PressCard";
import {sizes} from "@/data/sizes";
import { useState } from "react";
import { useRef } from "react";
import {Context} from "../../library";
import { useContext} from 'react';

export const S_PressCenter = ({className, data}) => {
    const {width, height} = useContext(Context);
    const cls = classNames(classes.root, {[className]: className });
    const allCards = [];

    const [isCenter, setIsCenter] = useState(false);
    const [isTitle, setIsTitle] = useState(false);
    const centerRef = useRef();
    const titleRef = useRef();

    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }  

    let cuttedElements = data.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, 6);
    
    if (width < sizes.widthTabletMd) {
      cuttedElements.forEach(item => {
        allCards.push(<C_PressCard newsId={item.id} date={item.date} image={retina ? item.image : item.image} title={item.title} description={item.fullTextWithoutImg}/>)
      }); 
    } else {
      cuttedElements.forEach(item => {
        allCards.push(<C_PressCard newsId={item.id} date={item.date} image={retina ? item.image : item.image} title={item.title} description={item.fullTextWithoutImg}/>)
      });
    }


    useEffect(() => {
      function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsTitle(true);
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
    })

    return (
        <div className={classes.wrapRoot} id={'press-center'}>
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
                            width < sizes.widthTabletSm ? -255 :
                            (width >= sizes.widthTabletMd && width < sizes.widthNotebook) ? -513 :
                            (width >= sizes.widthNotebook && width < sizes.widthDesktopSm) ? -520 :
                            (width >= sizes.widthDesktopSm && width < sizes.widthDesktopMd) ? 15 :
                            (width >= sizes.widthDesktopMd && width < sizes.widthDesktopLg) ? -30 :
                             width >= sizes.widthDesktopLg ? -15 : -170}
                            slidesPerView = {3} press={true} loop={true} loopedSlides={6}/>
                    </div>
                </div>
            </div>
        </div>
    )
}