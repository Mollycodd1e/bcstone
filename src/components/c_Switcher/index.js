import classes from './style.module.scss';
import classNames from "classnames";
import {list, map} from "../../img/svgInlineImg";

export const C_Switcher = ({className, isListView, setIsListView}) => {
    const cls = classNames(classes.root, {[classes.listViewActive]: isListView, [classes.mapViewActive]: !isListView, [className]: className });
    return (
        <div className={cls} onClick={() => setIsListView(prev => !prev)}>
            <span className={classes.list}>списком</span>
            <span className={classes.map}>на карте</span>
            {/*<div className={classes.first} dangerouslySetInnerHTML={{ __html: list}} />*/}
            {/*<div className={classes.second} dangerouslySetInnerHTML={{ __html: map}} />*/}
            {/*<div className={classes.activeBg} />*/}
        </div>
    )
}