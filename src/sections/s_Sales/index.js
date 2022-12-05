import React, {useRef, useState} from "react";
import classes from './style.module.scss';
import classNames from "classnames";
import {C_Transit_Sale} from "../../components/c_Transit_Sale";

export const S_Sales = ({className, data}) => {
    const cls = classNames(classes.root, {[className]: className});
    const [selectedType, setSelectedType] = useState('')
    const [isHover, setIsHover] = useState(false);
    const [isTitle, setIsTitle] = useState(false);
    const [isHoveredItem, setIsHoveredItem] = useState(0);
    const titleRef = useRef();

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsTitle(true);
          } else {
            setIsTitle(false);
          }
        });
    }
  
    let options = { rootMargin: '0px 0px -50px 0px', threshold: [0.5] };
  
    let observer = new IntersectionObserver( onEntry, options);
  
    if (titleRef.current) {
        observer.observe(titleRef.current);
    }

    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <div className={classNames(classes.wrapper, {[classes.centerLine]: !isHover}, {[classes.titleSlides]: isTitle})} ref={titleRef}>
                    {data.sales.map((el, i) => {
                        const {type, name, url, picture} = el;
                        return (<C_Transit_Sale type={type} name={name} url={url} picture={picture} key={i} number={i} setIsHover={setIsHover} setIsHoveredItem={setIsHoveredItem}/>)
                    })}
                </div>
                {isHover ? 
                    <div className={classes.dots}>
                        <div className={classNames(classes.sliderDot, {[classes.sliderToRight]: isHover && isHoveredItem === 1}, {[classes.sliderToLeft]: isHover && isHoveredItem === 0})}></div>
                    </div> 
                : null}    
            </div>
        </div>
    )
}