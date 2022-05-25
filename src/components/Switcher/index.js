import classes from './style.module.scss';
import classNames from "classnames";
import {list, map} from "../../img/svgInlineImg";

export const Switcher = ({className, isListView, setIsListView}) => {

    const cls = classNames(classes.root, {[classes.mapView]: !isListView, [className]: className });
    return (
        <div className={cls} onClick={() => setIsListView(prev => !prev)}>
            <div className={classes.first} dangerouslySetInnerHTML={{ __html: list}} />
            <div className={classes.second} dangerouslySetInnerHTML={{ __html: map}} />
            <div className={classes.activeBg} />
        </div>
    )
}