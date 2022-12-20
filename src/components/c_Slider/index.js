import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
import { useState, useRef } from "react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_Slider = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3, saving, press, map, loop, loopedSlides}) => {
    const cls = classNames(classes.root, { [className]: className });
    // autoplay={{
    //     delay: 10000,
    //         disableOnInteraction: false,
    // }}

    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

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

    var func = function(i) {
        setTimeout(function(){
            console.log(i)
        }, 10000 * i)
      };

    return (
        <div className={cls}>
            {press ? <div className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}
            disabled={slide === 0}></div> : null}
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
                centeredSlides={true}
                allowTouchMove={saving && window.innerWidth >= 768 ? false : true}
                loop={loop}
                pagination={(saving && window.innerWidth) >= 768 || map && (window.innerWidth < 768) ? false : {"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperSaving]: saving}, {[classes.swiperMode]: isBtnClose},{[classes.swiperPress]: press}, {[classes.swiperShow]: isVisible && press},{[classes.mapShow]: isVisible && map})}
                initialSlide={Number(initialSlide) || 0}
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
            disabled={(slide === (items.length-1))}></div> : null}
        </div>
    )
}