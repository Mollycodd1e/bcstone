import React, {useContext, useState} from "react";

import classes from './style.module.scss';
import classNames from "classnames";
import {Switcher} from "../../components/Switcher";
import {cardsTitle} from "../../data/helper";
import {CombineRegularCards} from "../../components/CombineRegularCards";
import {sizes} from "../../data/sizes";
import {Context} from "../../library";
import {RegularMap} from "../../components/RegularMap";

export const Projects = ({className, setIsPopUpVisible}) => {
    const [isListView, setIsListView] = useState(true);
    const [width, height] = useContext(Context);
    const cls = classNames(classes.root, { [classes.mapView]: !isListView, [className]: className });
    return (
        <div className={cls}>
            <div
                className={classNames(classes.title, { [classes.title_mod]: !isListView && width >= sizes.widthNotebook })}
                dangerouslySetInnerHTML={{ __html: !isListView && width >= sizes.widthNotebook ? cardsTitle.textMap : cardsTitle.text}}
            />
            <Switcher
                className={classes.Switcher}
                isListView={isListView}
                setIsListView={() => setIsListView(prev => !prev)}
            />
            {isListView
                ?
                    <CombineRegularCards
                        className={classes.CombineRegularCards}
                        isBtnClose={false}
                        onBtnCloseClick={() => {}}
                        setIsPopUpVisible={setIsPopUpVisible}
                    />
                : <RegularMap
                    className={classes.RegularMap}
                    isBtnClose={true}
                    onBtnCloseClick={() => {}}
                    setIsPopUpVisible={setIsPopUpVisible}
                />
            }
        </div>
    )
}