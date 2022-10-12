import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
import { useState } from "react";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_Slider = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3, saving, press}) => {
    const cls = classNames(classes.root, { [className]: className });
    // autoplay={{
    //     delay: 10000,
    //         disableOnInteraction: false,
    // }}

    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);

    return (
        <div className={cls}>
            {press ? <div className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}
            disabled={slide === 0}></div> : null}
            <Swiper
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
                loop={saving && window.innerWidth < 768? false : true}
                
                pagination={saving && window.innerWidth >= 768 ? false : {"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperSaving]: saving}, {[classes.swiperMode]: isBtnClose},{[classes.swiperPress]: press})}
                initialSlide={Number(initialSlide) || 0}
            >
                {items.map((item, i) => {
                        return (
                            <SwiperSlide className = {classes.swiperSlide} key={i}>
                                {item}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            {press ? <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}
            disabled={(slide === (items.length-1))}></div> : null}
        </div>
    )
}