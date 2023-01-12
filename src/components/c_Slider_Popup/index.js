import React, {useState, useRef, useEffect} from "react";
import useOnScreen from "../../hooks/useOnScreen";
import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
//СЛАЙДЕР Попап
export const C_SliderPopup = ({className, isBtnClose, items, initialSlide, pagination, slidersSpaceBetween, slidesPerView = 1, loop}) => {

    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [my_swiper, set_my_swiper] = useState({});

  const [swiper, setSwiper] = React.useState();
    const ref = useRef(null);
         const isVisible = useOnScreen(ref);
         useEffect(
             ()=>{
    if (swiper && !isVisible) {

        swiper.slideToLoop(initialSlide);
        swiper.updateSlides()
    }
             }
         )



   /* const [slide, setSlide] = useState(0);*/
    const numSlider = (selected, nums) => {
        return (
            <div className={classes.numbersWrapper} >
                {nums.map((el, i) => {
                    const paginationClass = selected-1 === i ? 'regular__selected' : 'regular';
                    return <div key={i} className={classes[`${paginationClass}`]} />
                })}
            </div>
        )
    }

    return (
        <div className={cls}  ref={ref}>
            <button className={classes.swiper_button_prev} onClick={() => (swiper.slidePrev())}/>
            <Swiper
                /*observer={true}
                observeParents={true}*/
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
               /* centeredSlides={true}*/
                pagination={true}
                initialSlide={initialSlide}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                loopPreventsSlide={false}
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => {
                    /*set_my_swiper(evt)*/
                    setSwiper(evt)
                }}
                onSwiper={(evt) => {


                }}
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
            <div className={classes.swiper_button_next} onClick={() => {
                swiper.slideNext()
            }}/>
        </div>
    )
}