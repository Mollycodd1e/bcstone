import classes from './style.module.scss';
import classNames from "classnames";
import {OfficesList} from "../OfficesList";
import {OfficesSlider} from "../OfficesSlider";
import {offices} from "../../data/offices";
import {useState} from "react";
import {formatsRenders} from "../../complexComponents/formatsRenders";

export const OfficesFormats = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    const list = offices[0].data.map((el) => el.title);

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
            </div>
            <OfficesSlider
                items={formatsRenders()}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
                isAutoplay={true}
                isHelper={true}
            />
        </div>
    )
}