import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_Slider = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3, saving}) => {
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
                loop={saving ? false : true}
                pagination={{"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperSaving]: saving}, {[classes.swiperMode]: isBtnClose})}
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
        </div>
    )
}