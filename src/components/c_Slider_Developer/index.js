import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../library";
import classes from './style.module.scss';
import classNames from "classnames";
import {sizes} from "../../data/sizes";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";
import { useRef } from "react";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderDeveloper = ({className, isBtnClose, items, initialSlide, onBtnCloseClick, setIsPopUpVisible, slidersSpaceBetween = -225, slidesPerView = 3, loop, onClick}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(null);
    const [width, height] = useContext(Context);
    // const [isLeftClick, setIsLeftClick] = useState(false);
    // const [isRightClick, setIsRightClick] = useState(false);
    // const kokok = useRef();

    const numSlider = (selected, nums) => {
        return (
            <div className={classes.numbersWrapper} >
                {/* <div className={classNames(classes.slideDot, {[classes.animateDot]: isRightClick}, {[classes.animateDotReverse]: isLeftClick})}  */}
                 {/* onAnimationEnd={() => (top=top +15 )} style={{top: `${top}px`}}  ref={kokok}></div> */}
                {nums.map((el, i) => {
                    const paginationClass = selected === i ? 'regular__selected' : 'regular';
                    return <div key={i} className={classes[`${paginationClass}`]} />
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
            <button className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? (setSlide(slide - 1)) : setSlide(slide))}
                    disabled={slide === 0}/>
            <Swiper
                onClick={onClick}
                slidesPerView={slidesPerView}
                spaceBetween={slidersSpaceBetween}
                centeredSlides={true}
                pagination={{
                    // el:'.swiper-paginations',
                    "clickable": true,
                    // renderBullet: (index, className) => {
                    //      return '<span class="' + className + '">' + (index + 1) + "</span>";
                    // },
                    }}
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
            {/* <div className={`swiper-paginations + ${classes.swiper_pagination_custom}`}>        
                <div className={classNames(classes.LiquidDot)}></div>
            </div> */}
            {numSlider(selectedSlide, items)}
        </div>
    )
}