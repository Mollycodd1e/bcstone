import React, {useEffect, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderDeveloper = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(1);

    useEffect(() => {
        setSelectedSlide(1)
    },[])

    const [swiperInstance, setSwiperInstance] = useState(null);
    // const slideTo = (index) => {
    //     swiperInstance.slideTo(index - 1, 0);
    // };

    const numSlider = (selected, nums) => {
        // const nums = [1,2,3,4,5];
        return (
            <div className={classes.numbersWrapper} >
                {nums.map((el, i) => {
                    const selected = selected === i + 1 ? 'regular__selected' : 'regular';
                    return <div key={i} className={classes[`${selected}`]} >{i + 1}</div>
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
                        if (data.activeIndex === items.length + 1) {
                            setSelectedSlide(1);
                        }
                        else if (data.activeIndex === 0) {
                            setSelectedSlide(items.length);
                        } else {
                            setSelectedSlide(data.activeIndex - 1);
                        }
                        console.log("")
                        console.log("=============================")
                        console.log("data.activeIndex     = ", data.activeIndex)
                        console.log("selectedSlide        = ", selectedSlide)
                        console.log("=============================")
                        console.log("")
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