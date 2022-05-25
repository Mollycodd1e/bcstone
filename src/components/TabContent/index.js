import classes from './style.module.scss';
import classNames from "classnames";
import {offices} from "../../data/offices";
import {OfficesFormats} from "../OfficesFormats";
import {OfficesLocations} from "../OfficesLocations";
import {OfficesPurposes} from "../OfficesPurposes";

export const TabContent = ({className, currentTab, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });

    return (
        <div className={cls}>
            {
                currentTab === offices[0].type ?
                    <OfficesFormats />
                : currentTab === offices[1].type ?
                    <OfficesLocations setIsPopUpVisible={setIsPopUpVisible} />
                : currentTab === offices[2].type ?
                    <OfficesPurposes />
                : null
            }
        </div>
    )
}