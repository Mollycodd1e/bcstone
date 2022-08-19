import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderC = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = 200}) => {
    const cls = classNames(classes.root, { [className]: className });

    return (
        <div className={cls}>
            {console.log(<Navigation/>)}
            <Swiper
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
                //centeredSlides={true}
                //loop
                navigation
                pagination={{"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                initialSlide={Number(initialSlide) || 1}
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