import classes from './style.module.scss';
import classNames from 'classnames';

import { C_Slider } from '../../components/c_Slider';
import { C_SavingCard } from '../../components/c_SavingCard';
import {sizes} from "../../data/sizes";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Context} from "../../library";
import { useContext } from 'react';
import {useStore} from "../../store/stores";

export const S_Bottom_Commercial = ({className, data}) => {

    const cls = classNames(classes.root, {[className]: className});
    const data_3 = data.bottom_commercial;
    const ref= useRef();
    const store = useStore();
    const isWebp = store.isWebp;
    const {width, height} = useContext(Context);
    const [isLine, setIsLine] = useState(false);
    const allCards = [];
    let cuttedElements = data_3 && data_3.list.length !==0 && data_3.list.slice(0, data_3.config.shownElements);
    cuttedElements.sort(function (a, b) {
        return a.order - b.order;
    })

    cuttedElements.forEach(item => {
        allCards.push(<C_SavingCard item={item}  image={isWebp ? item.pic.srcWebp : item.pic.srcWebp} title={item.title} description={item.content}/>)
    });

    useEffect(() => {
        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                setIsLine(true);
              } else {
                // setIsLine(false);
              }
            });
        }
    
        let options = { rootMargin: '-140px', threshold: [0.5] };
    
        let observer = new IntersectionObserver( onEntry, options);
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    })
    

    return (
        <div className={classes.wrapRoot}>
            <div className={classNames(cls,{[classes.lineShown]: isLine})} ref={ref}>
                <h2>Сохраните сбережения в недвижимости</h2>
                <div className={classes.sliderWrapper}>
                    <C_Slider className={classes.saving} items={allCards} initialSlide={0} slidesPerView={2}
                    slidersSpaceBetween={
                        (width >= sizes.widthMobilePreMd && width < sizes.widthTabletSm) ? -225 :
                        (width >= sizes.widthTabletSm && width < sizes.widthTabletMd) ? 15 :
                        (width >= sizes.widthTabletMd && width < sizes.widthNotebook) ? -130 :
                        (width >= sizes.widthNotebook && width < sizes.widthDesktopSm) ? 89 :
                        (width >= sizes.widthDesktopSm && width < sizes.widthDesktopMd) ? -288 :
                        (width >= sizes.widthDesktopMd && width < sizes.widthDesktopLg) ? -137 :
                        width >= sizes.widthDesktopLg ? -137 :
                        -215}
                    saving={true} centered={true}/>
                </div>
            </div>
        </div>
    )
}