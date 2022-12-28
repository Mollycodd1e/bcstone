import React, { useState, useContext } from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';
import {Context} from "../../library";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
import { sizes } from "../../data/sizes";
// // install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderC = ({className, isBtnClose, items, initialSlide}) => {
    const cls = classNames(classes.root, { [className]: className });

    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(0);
    const [width, height] = useContext(Context);

    const [swiperInstance, setSwiperInstance] = useState(null);


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
    const [selectedSlide, setSelectedSlide] = useState(0);
    return (
        <div className={cls}>
            <button className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}/>

            <Swiper
                onSwiper={setSwiperInstance}
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}

                speed={700}
                slidesPerView={'auto'}
                spaceBetween={width > sizes.widthTabletMd ? 200 : 7}
                onSlideChange={
                    (data) => {
                        setSelectedSlide(data.realIndex);
                    }
                }
                centeredSlides={true}
                pagination={{
                    el: '.swiper-pagination'
                }}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                onInit={(evt) => {
                    set_my_swiper(evt)
                }}
                loop={true}
                initialSlide={Number(initialSlide) || 0}
            >   
                {items.map((item, i) => {
                        return (
                             <SwiperSlide className = {classes.swiperSlide} key={i}>
                                  {width < sizes.widthTabletMd ?
                                    <div className={classes.pic} style={{backgroundImage: `url(${item.src})`}}>  
                                     </div>     
                                  :
                                    <div className={classes.image_wrapper}>
                                        <Image src={item} layout='fill' alt="Фото бизнес-центра"/>
                                    </div> 
                                  }
                                
                             </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}/>
            {numSlider(selectedSlide, items)}
        </div>
    )
}