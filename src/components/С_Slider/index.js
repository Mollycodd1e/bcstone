import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const С_Slider = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <Swiper
                slidesPerView={3}
                spaceBetween={-225}
                // spaceBetween={0}
                centeredSlides={true}
                loop
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                initialSlide={Number(initialSlide) || 0}
            >
                {items.map((item, i) => {
                        return (
                            <SwiperSlide className = {classes.swiperSlide} key={i}>
                                {item}
                            < /SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}