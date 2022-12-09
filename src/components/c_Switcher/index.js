import classes from './style.module.scss';
import classNames from "classnames";
import {list, map} from "../../img/svgInlineImg";
import { useRef } from 'react';

export const C_Switcher = ({className, isListView, setIsListView, setIsSwitcher, isSubTitle}) => {
    const cls = classNames(classes.root, {[classes.listViewActive]: isListView, [classes.mapViewActive]: !isListView, [className]: className });

    const switcherRef = useRef();

    function onEntrySwitcher(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            isSubTitle ? setIsSwitcher(true) : null;
          } else {
            // setIsSwitcher(false);
          }
        });
    }

    let optionsSwitcher = { rootMargin: '-230px', threshold: [0.5] };
    let observerSwitcher = new IntersectionObserver( onEntrySwitcher, optionsSwitcher);

    if (switcherRef.current) {
        observerSwitcher.observe(switcherRef.current);
    }
    
    return (
        <div className={cls} onClick={() => setIsListView(prev => !prev)} ref={switcherRef}>
            <span className={classes.list}>списком</span>
            <span className={classes.map}>на карте</span>
            {/*<div className={classes.first} dangerouslySetInnerHTML={{ __html: list}} />*/}
            {/*<div className={classes.second} dangerouslySetInnerHTML={{ __html: map}} />*/}
            {/*<div className={classes.activeBg} />*/}
        </div>
    )
}