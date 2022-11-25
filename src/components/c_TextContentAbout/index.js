import classes from './style.module.scss';
import classNames from "classnames";
import React, {useContext, useRef, useState} from "react";
import {C_SliderVideoAbout} from "../c_SliderVideoAbout";
import {C_MainButton} from "../c_MainButton";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";

export const C_TextContentAbout = ({className, data}) => {
    const [width, height] = useContext(Context);
    const cls = classNames(classes.root, {[className]: className});
    const isTablet = width >= sizes.widthTabletMd;
    const {description, plans} = data.about_company;
    const [isLogo, setIsLogo] = useState(false);
    const logo = useRef();
    const [isDescription, setIsDescription] = useState(false);
    const [isPlans, setIsPlans] = useState(false);
    const text = useRef();
    const subDescription = useRef();

    function onEntryLogo(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsLogo(true);
          } else {
            // setIsLogo(false);
          }
        });
    }

    let options = { rootMargin: '-20px', threshold: [0.5] };

    let observer = new IntersectionObserver( onEntryLogo, options);

    if (logo.current) {
        observer.observe(logo.current);
    }

    function onEntryDescription(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsDescription(true);
          } else {
            // setIsDescription(false);
          }
        });
    }

    let optionsDescription = { rootMargin: '-30px', threshold: [0.5] };

    let observerDescription = new IntersectionObserver( onEntryDescription, optionsDescription);

    if (subDescription.current) {
        observerDescription.observe(subDescription.current);
    }

    function onEntryPlans(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsPlans(true);
          } else {
            // setIsPlans(false);
          }
        });
    }

    let optionsPlans = { rootMargin: '250px', threshold: [0.5] };

    let observerPlans = new IntersectionObserver( onEntryPlans, optionsPlans);

    if (text.current) {
        observerPlans.observe(text.current);
    }

    return (
        <div className={cls}>
            <div className={classNames(classes.stoneHedgeLogo,{[classes.stoneHedgeLogoShown]: isLogo})} ref={logo}/>
            <div className={classNames(classes.description,{[classes.descriptionShown]: isDescription})} dangerouslySetInnerHTML={{ __html: description}} ref={subDescription}/>
            <div className={classNames(classes.plans,{[classes.plansShown]: isPlans})} dangerouslySetInnerHTML={{ __html: plans}} ref={text}/>
            {isTablet ? <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')}
                                      className={classes.C_MainButton}/> : null}
        </div>
    )
}