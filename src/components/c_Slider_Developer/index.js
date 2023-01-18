import React, {useContext, useEffect, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Slides} from "../../library";
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
//СЛАЙДЕР На Главной
export const C_SliderDeveloper = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, pagination, slidersSpaceBetween = -225, slidesPerView = 3, loop, onClick, onChange}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [swiper, setSwiper] = React.useState();
    //TODO  вынести toSlide в пропс useEffetc перенести в c_SliderVideoAbout
    let [slideIndex, setSlideIndex] = useContext(Slides);
    useEffect(()=>{
        if (swiper) {
            swiper.slideToLoop(slideIndex);
        }
    }, [slideIndex])

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
            <button className={classes.swiper_button_prev} onClick={() => (swiper.slidePrev())}/>
            <Swiper
                pagination={pagination}
                onClick={onClick}
                slidesPerView={slidesPerView}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                initialSlide={0}
                onSlideChange={
                    (data) => {
                        setSelectedSlide(data.realIndex);
                        onChange(data);
                    }
                }
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => setSwiper(evt)}
                loop={true}
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
            <div className={classes.swiper_button_next} onClick={() => (swiper.slideNext())}/>

            {numSlider(selectedSlide, items)}
        </div>
    )
}