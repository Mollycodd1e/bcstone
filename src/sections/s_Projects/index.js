import React, {useContext, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {C_Switcher} from "../../components/c_Switcher";
import {cardsTitle} from "../../data/helper";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {C_RegularMap} from "../../components/c_RegularMap";
import {C_CombineRegularCards} from "../../components/c_CombineRegularCards";

export const S_Projects = ({className, setIsPopUpVisible}) => {
    const [isListView, setIsListView] = useState(true);
    const [width, height] = useContext(Context);
    const cls = classNames(classes.root, { [classes.mapView]: !isListView, [className]: className });
    return (
        <div className={cls}>
            <div
                className={classNames(classes.title, { [classes.title_mod]: !isListView && width >= sizes.widthNotebook })}
                dangerouslySetInnerHTML={{ __html: !isListView && width >= sizes.widthNotebook ? cardsTitle.textMap : cardsTitle.text}}
            />
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
                    />
                : <C_RegularMap
                    className={classes.RegularMap}
                    isBtnClose={true}
                    onBtnCloseClick={() => {}}
                    setIsPopUpVisible={setIsPopUpVisible}
                />
            }
        </div>
    )
}