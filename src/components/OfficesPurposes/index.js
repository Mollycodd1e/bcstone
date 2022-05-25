import classes from './style.module.scss';
import classNames from "classnames";
import {offices} from "../../data/offices";
import {useState} from "react";
import {OfficesList} from "../OfficesList";
import {purposesRenders} from "../../complexComponents/purposesRenders";
import {OfficesSlider} from "../OfficesSlider";
import {formatsRenders} from "../../complexComponents/formatsRenders";
import {PurposesHelperText} from "../PurposesHelperText";

export const OfficesPurposes = ({className}) => {
    const {data} = offices[2]
    const list = data.map((el) => el.title);
    const texts = data.map((el) => el.text);

    const [activeElement, setActiveElement] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const slideTo = (index) => {
        swiperInstance.slideTo(index - 1, 0);
    };

    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.wrapMiddleBlock}>
                <OfficesList
                    elements={list}
                    activeElement={activeElement}
                    setActiveElement={setActiveElement}
                    slideTo={slideTo}
                />
                <PurposesHelperText
                    texts={texts}
                    activeElement={activeElement}
                />
            </div>
            <OfficesSlider
                items={purposesRenders()}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
            />
        </div>
    )
}