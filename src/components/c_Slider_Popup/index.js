import React, {useEffect, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
import { sizes } from "../../data/sizes";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderPopup = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, pagination, slidersSpaceBetween, slidesPerView = 1, loop}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);

    const numSlider = (selected, nums) => {
        return (
            <div className={classes.numbersWrapper} >
                {nums.map((el, i) => {
                    const paginationClass = selected === i ? 'regular__selected' : 'regular';
                    return <div key={i} className={classes[`${paginationClass}`]} />
                })}
            </div>
        )
    }

    return (
        <div className={cls}>
            <button className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}
                    disabled={slide === 0}/>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}
                pagination={pagination}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                initialSlide={Number(initialSlide) || 0}
                onSlideChange={
                    (data) => {
                        setSelectedSlide(data.realIndex);
                    }
                }
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => {
                    set_my_swiper(evt)
                }}
                loop={loop}
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
            <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}
                 disabled={(slide === (items.length-1))}/>
            {numSlider(selectedSlide, items)}
        </div>
    )
}