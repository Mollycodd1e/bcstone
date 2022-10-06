import React, {useContext, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import { C_Slider } from "../../components/c_Slider";
import { C_PressCard } from "../../components/c_PressCard";

export const S_PressCenter = ({className, items}) => {
    const [isListView, setIsListView] = useState(true);

    const cls = classNames(classes.root, { [classes.mapView]: !isListView, [className]: className });

    const allCards = [];

    items.forEach(item => {
      allCards.push(<C_PressCard data={item.data} image={item.image} title={item.title} description={item.description}/>)
    });

    return (
        <div className={cls}>
            <div className={classes.PressCenterTitle}>
                <div className={classes.bg_text}>Новости</div>
                <div className={classes.wrap_title}>
                    <span>Пресс</span>
                    <span>-центры</span>
                </div>
            </div>
            <div className={classes.sliderWrapper}>
              <C_Slider items={allCards} initialSlide={0}  slidersSpaceBetween = {-183} slidesPerView = {1}/>
            </div>
        </div>
    )
}