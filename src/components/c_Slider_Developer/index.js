import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_Slider_Developer = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = 100, slidesPerView = 1}) => {
    const cls = classNames(classes.root, { [className]: className });
    // autoplay={{
    //     delay: 10000,
    //         disableOnInteraction: false,
    // }}
    return (
        <div className={cls}>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}
                loop
                pagination={{
                    el:'.swiper-pagination',
                    "clickable": true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                }}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
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
            <div className={`swiper-pagination + ${classes.swiper_pagination_custom}`}/>
        </div>
    )
}