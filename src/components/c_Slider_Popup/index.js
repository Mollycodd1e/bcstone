import React, {useState, useRef} from "react";
import useOnScreen from "../../hooks/useOnScreen";
import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const C_SliderPopup = ({className, isBtnClose, items, initialSlide, pagination, slidersSpaceBetween, slidesPerView = 1, loop}) => {

    const cls = classNames(classes.root, { [className]: className });
    const [selectedSlide, setSelectedSlide] = useState(0);

    const [swiper, setSwiper] = React.useState(initialSlide);
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    if (swiper && !isVisible) {
        swiper.slideTo(initialSlide);
    }
/*useRef(()=>{
    swiper.slideTo(initialSlide);
    },[])*/
    const [my_swiper, set_my_swiper] = useState({});
    const [slide, setSlide] = useState(initialSlide);
    const numSlider = (selected, nums) => {
        console.log('sel'+selected)
        console.log('len' + nums.length)
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
        <div className={cls}  ref={ref}>
            <button className={classes.swiper_button_prev} onClick={() => (my_swiper.slidePrev(), slide > 0 ? setSlide(slide - 1) : setSlide(slide))}/>
            <Swiper
                /*observer={true}
                observeParents={true}*/
                slidesPerView={1}
                spaceBetween={slidersSpaceBetween}
               /* centeredSlides={true}*/
                pagination={true}
                initialSlide={Number(initialSlide) || 0}
                className={classNames(classes.swiper, {[classes.swiperMode]: isBtnClose})}
               /* initialSlide={0}*/
                onSlideChange={
                    (data) => {
                        console.log(data.realIndex)
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
                onSwiper={(s) => {
                    setSwiper(s);
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
            <div className={classes.swiper_button_next} onClick={() => (my_swiper.slideNext(), slide < items.length -1 ? setSlide(slide + 1) : setSlide(slide))}/>
            {numSlider(selectedSlide, items)}
        </div>
    )
}