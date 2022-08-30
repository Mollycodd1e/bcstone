import React, {useEffect, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderDeveloper = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);

    const numSlider = (selected, nums) => {
        return (
            <div className={classes.numbersWrapper} >
                {nums.map((el, i) => {
                    const paginationClass = selected === i ? 'regular__selected' : 'regular';
                    return <div key={i} className={classes[`${paginationClass}`]} >{i + 1}</div>
                })}
            </div>
        )
    }

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
                pagination={{"clickable": true}}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                initialSlide={Number(initialSlide) || 0}
                onSlideChange={
                    (data) => {
                        setSelectedSlide(data.realIndex);
                    }
                }
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
            {numSlider(selectedSlide, items)}
        </div>
    )
}