import React, { useState } from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
// // install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderC = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = 200}) => {
    const cls = classNames(classes.root, { [className]: className });

    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);

    return (
        <div className={cls}>
            <button className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}
            disabled={slide === 0}></button>
            <Swiper
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => {
                    set_my_swiper(evt)
                }}
                speed={700}
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}                
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
                                <div className={classes.image_wrapper}>
                                  <Image src={item} layout='fill' alt="Фото бизнес-центра"/>
                                </div> 
                             </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}
            disabled={(slide === (items.length-1))}></div>
            <div className={`swiper-pagination + ${classes.swiper_pagination_custom}`}>
            </div>
        </div>
    )
}