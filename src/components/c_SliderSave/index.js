import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";

// // install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderSave = ({className, items, initialSlide, slidersSpaceBetween = 200}) => {
    const cls = classNames(classes.root, { [className]: className });
    console.log(items)
    return (
        <div className={cls}>
            <Swiper
                speed={700}
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}                
                pagination={{"clickable": true}}
                className={classNames(classes.swiper)}
                initialSlide={Number(initialSlide) || 0}
            >     
                {items.map((item, i) => {
                        return (
                             <SwiperSlide className = {classes.swiperSlide} key={i}>
                                <div className={classes.image_wrapper}>
                                  <Image src={item} layout='fill'/>
                                </div> 
                             </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}    