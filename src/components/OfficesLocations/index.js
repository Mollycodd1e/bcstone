import classes from './style.module.scss';
import classNames from "classnames";
import {offices} from "../../data/offices";
import {OfficesList} from "../OfficesList";
import {useState} from "react";
import {OfficesSlider} from "../OfficesSlider";
import {locationsMaps} from "../../complexComponents/locationsMaps";
import {OfficesDescription} from "../OfficesDescription";

export const OfficesLocations = ({className, setIsPopUpVisible}) => {
    const cls = classNames(classes.root, { [className]: className });
    const list = offices[1].data.map((el) => el.title);
    const description = offices[1].data;

    const [activeElement, setActiveElement] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const slideTo = (index) => {
        swiperInstance.slideTo(index - 1, 0);
    };

    return (
        <div className={cls}>
            <div className={classes.wrapMiddleBlock}>
                <OfficesList
                    elements={list}
                    activeElement={activeElement}
                    setActiveElement={setActiveElement}
                    slideTo={slideTo}
                />
                {/*<OfficesDescription />*/}
                <OfficesDescription
                    className={classes.OfficesDescription}
                    description={description}
                    activeElement={activeElement}
                />
            </div>
            <OfficesSlider
                className={classes.map_mode}
                items={locationsMaps(setIsPopUpVisible)}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
                isMapMode={true}
            />
        </div>
    )
}