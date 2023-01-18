import React, {useRef, useEffect, useContext} from "react";
import useOnScreen from "../../hooks/useOnScreen";
import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Slides} from "../../library";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
//СЛАЙДЕР Попап
export const C_SliderPopup = ({className, isBtnClose, items, initialSlide, pagination, slidersSpaceBetween,
                                  slidesPerView = 1, loop}) => {

    const cls = classNames(classes.root, {[className]: className});
    let [slideIndex, setSlideIndex] = useContext(Slides);
    const [swiper, setSwiper] = React.useState();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    useEffect(
        () => {
            if (swiper && !isVisible) {
                swiper.slideToLoop(initialSlide);
                swiper.updateSlides()
            }
        })

    return (
        <div className={cls} ref={ref}>
            <button className={classes.swiper_button_prev} onClick={() => (swiper.slidePrev())}/>
            <Swiper
                /*observer={true}
                observeParents={true}*/
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
                /* centeredSlides={true}*/
                /* pagination={true}*/
                initialSlide={0}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
                loopPreventsSlide={false}
                navigation={{
                    prevEl: '.swiper_button_prev',
                    nextEl: '.swiper_button_next',
                }}
                onInit={(evt) => setSwiper(evt)}
                pagination={{
                    el: `.${classes.numbersWrapper}`,
                    bulletClass: `${classes.regular}`,
                    bulletActiveClass: `${classes.regular__selected}`,
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '"></span>';
                    },
                }}
                onSlideChange={(evt)=>{
                    console.log('изменен слайдер в поп-апе')
                    if (isVisible) {setSlideIndex(evt.realIndex)}
                }}
                loop={true}
            >
                {items.map((item, i) => {
                    return (
                        <SwiperSlide className={classes.swiperSlide} key={i}>{item}</SwiperSlide>
                    )
                })
                }
            </Swiper>
            <div className={classes.swiper_button_next} onClick={() => {
                swiper.slideNext()
            }}/>
            <div className={classes.numbersWrapper}/>
        </div>
    )
}