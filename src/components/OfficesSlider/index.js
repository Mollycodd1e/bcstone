import React from "react";

import classes from './style.module.scss';
import classNames from "classnames";

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs.js";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export const OfficesSlider = ({className, items, setActiveElement, setSwiperInstance, isAutoplay, isHelper, isMapMode, isNavigation}) => {
    const cls = classNames(classes.root, { [className]: className, [classes.mapMode]: isMapMode });

    return (
        <div className={cls}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{"clickable": true}}
                className={classes.swiper}
                initialSlide={0}
                autoplay={isAutoplay && {
                        "delay": 5000,
                        "disableOnInteraction": false
                    }
                }
                onSlideChange={
                    (data) => {
                        setActiveElement(data.activeIndex);
                    }
                }
                onSwiper={setSwiperInstance}
                navigation={isNavigation || false}
            >
                {isHelper ?
                    <div
                        dangerouslySetInnerHTML={{ __html: `CLASS&nbsp;<b>A</b>`}}
                        className={classes.helper}
                    /> : null
                }
                {items.map((item, i) => {
                    return (
                        <SwiperSlide className={classes.swiperSlide} key={i}>
                            {item}
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
            {isHelper ?
                <div
                    dangerouslySetInnerHTML={{ __html: `CLASS&nbsp;<b>A</b>`}}
                    className={classes.helper_desktop}
                /> : null
            }
        </div>
    )
}