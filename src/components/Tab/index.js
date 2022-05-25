import classes from './style.module.scss';
import classNames from "classnames";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext} from "react";

export const Tab = ({className, tab, setCurrentTab, isActive}) => {
    const cls = classNames(classes.root, {[classes.active]: isActive, [className]: className });
    const [width, height] = useContext(Context);
    return (
        <div className={cls} onClick={() => setCurrentTab(prev => tab.type)}>
            <span className={classes.tabTitle}>
                {width >= sizes.widthNotebook ? tab.mainTitle : tab.mainTitleMobile}
            </span>
            <div className={classes.tabIcon} dangerouslySetInnerHTML={{ __html: tab.icon}} />
        </div>
    )
}