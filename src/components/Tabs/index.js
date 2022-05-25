import classes from './style.module.scss';
import classNames from "classnames";
import {offices} from "../../data/offices";;
import {Tab} from "../Tab";

export const Tabs = ({className, currentTab, setCurrentTab}) => {
    const cls = classNames(classes.root, { [className]: className });

    return (
        <div className={cls}>
            <div className={classes.wrapper}>
                {offices.map((tab, i) => {
                        return (
                            <Tab
                                key={i}
                                tab={tab}
                                setCurrentTab={setCurrentTab}
                                isActive={currentTab === tab.type}
                            />
                        )
                    }
                )}
            </div>
        </div>
    )
}