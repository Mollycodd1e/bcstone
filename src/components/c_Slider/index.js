import React, { useEffect } from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef } from "react";
import {Context} from "../../library";
import { useContext } from 'react';
import {sizes} from "../../data/sizes";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_Slider = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3, saving, press, map, loop, loopedSlides, centered}) => {
    const cls = classNames(classes.root, { [className]: className });

    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();
    const {width, height} = useContext(Context);

    useEffect(() => {
        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                  setVisible(true);
              } else {
                setVisible(false);
              }
            });
        }
        
        let options = {threshold: [0] };
        let observer = new IntersectionObserver( onEntry, options);
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    })

/*    var func = function(i) {
        setTimeout(function(){
            // console.log(i)
        }, 10000 * i)
      };*/

    return (
        <div className={cls}>
            {press ? <div className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}
            disabled={slide === 0}/> : null}
            <Swiper
                ref={ref}
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => {
                    set_my_swiper(evt)
                }}
                slidesPerView={slidesPerView}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={centered ?? false}
                allowTouchMove={saving && width >= sizes.widthTabletSm ? false : true}
                loop={loop}
                pagination={saving && width >= sizes.widthTabletSm || map && (width < sizes.widthTabletSm) ? false : {"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperSaving]: saving}, {[classes.swiperMode]: isBtnClose},{[classes.swiperPress]: press})}
               initialSlide={0}
                loopedSlides={loopedSlides}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
                {items.map((item, i) => {
                    return (
                        <SwiperSlide className = {classNames(classes.swiperSlide,{[classes.swiperSlideActive]: activeSlide === i})} key={i}>
                            {item}
                        </SwiperSlide>    
                    )
                })}
            </Swiper>
            {press ? <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}
            disabled={(slide === (items.length-1))}/> : null}
        </div>
    )
}