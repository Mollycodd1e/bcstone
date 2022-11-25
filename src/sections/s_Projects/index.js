import React, {useContext, useRef, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {C_Switcher} from "../../components/c_Switcher";
import {cardsTitle} from "../../data/helper";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {C_RegularMap} from "../../components/c_RegularMap";
import {C_CombineRegularCards} from "../../components/c_CombineRegularCards";
import {C_MainButton} from "../../components/c_MainButton";

export const S_Projects = ({className, setIsPopUpVisible, data}) => {
    const [isListView, setIsListView] = useState(true);
    const [width, height] = useContext(Context);
    const ref = useRef();
    const subRef = useRef();
    const cls = classNames(classes.root, { [classes.mapView]: !isListView, [className]: className });
    const [isTitle, setIsTitle] = useState(false);
    const [isSubTitle, setSubIsTitle] = useState(false);
    const [isSwitcher, setIsSwitcher] = useState(false);

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsTitle(true);
          } else {
            // setIsTitle(false);
          }
        });
    }

    function onEntrySub(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setSubIsTitle(true);
          } else {
            // setSubIsTitle(false);
          }
        });
    }

    let options = { rootMargin: '-170px', threshold: [0.5] };
    let optionsSub = { rootMargin: '-200px', threshold: [0.5] };

    let observer = new IntersectionObserver( onEntry, options);
    let observerSub = new IntersectionObserver( onEntrySub, optionsSub);

    if (ref.current) {
        observer.observe(ref.current);
    }

    if (subRef.current) {
        observerSub.observe(subRef.current);
    }

    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <div className={classNames(classes.ProjectTitle,{[classes.titleShown] : isTitle})} ref={ref}>
                    <div className={classes.bg_text}>Проекты</div>
                    <div className={classes.wrap_title}>
                        <span>Бизнес</span>
                        <span>-центры</span>
                    </div>

                </div>
                <div className={classNames(classes.sub_title,{[classes.subTitleShown]: isSubTitle})} ref={subRef}>
                    <span>Продажа и аренда</span>
                    <span>Офисы и ритейл</span>
                </div>
                <C_Switcher
                    className={classNames(classes.Switcher,{[classes.SwitcherShown]: isSwitcher})} setIsSwitcher={setIsSwitcher}
                    isListView={isListView}
                    setIsListView={() => setIsListView(prev => !prev)}
                />
                {isListView
                    ?
                        <C_CombineRegularCards
                            className={classes.CombineRegularCards}
                            isBtnClose={false}
                            onBtnCloseClick={() => {}}
                            setIsPopUpVisible={setIsPopUpVisible}
                            isMapMode={false}
                            data={data}
                        />
                    : <C_RegularMap
                        className={classes.RegularMap}
                        isBtnClose={true}
                        onBtnCloseClick={() => {}}
                        setIsPopUpVisible={setIsPopUpVisible}
                        isMapMode={true}
                        data={data}
                    />
                }
                <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')} className={classes.C_MainButton} />
            </div>
        </div>
    )
}