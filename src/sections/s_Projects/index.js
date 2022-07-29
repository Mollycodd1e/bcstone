import React, {useContext, useState} from "react";

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
    const cls = classNames(classes.root, { [classes.mapView]: !isListView, [className]: className });
    return (
        <div className={cls}>
            <div className={classes.ProjectTitle}>
                <div className={classes.bg_text}>Проекты</div>
                <div className={classes.wrap_title}>
                    <span>Бизнес</span>
                    <span>-центры</span>
                </div>

            </div>
            <div className={classes.sub_title}>
                <span>Продажа и аренда</span>
                <span>Офисы и ритейл</span>
            </div>
            <C_Switcher
                className={classes.Switcher}
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
                />
            }
            <C_MainButton text={"Получить предложение"} onClick={() => console.log('click from project')} className={classes.C_MainButton} />
        </div>
    )
}