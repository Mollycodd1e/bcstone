import classes from './style.module.scss';
import classNames from "classnames";
import {useState} from "react";
import {Tabs} from "../../components/Tabs";
import {TabContent} from "../../components/TabContent";

export const Offices = ({className, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [currentTab, setCurrentTab] = useState('formats');
    return (
        <div className={cls}>
            <Tabs
                className={classes.Tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <TabContent
                className={classes.TabContent}
                currentTab={currentTab}
                setIsPopUpVisible={setIsPopUpVisible}
            />
        </div>
    )
}