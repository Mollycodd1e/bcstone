import classes from './style.module.scss';
import classNames from "classnames";
import {advantagesBtmTitle} from "../../data/advantages";
import {useContext, useState} from "react";
import {OfficesSlider} from "../../components/OfficesSlider";
import {AdvBtmList} from "../../complexComponents/advBtmList";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";

export const AdvantagesBtm = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    const [activeElement, setActiveElement] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;

    return (
        <div className={cls}>
            <div className={classNames("visually-hidden", classes.investmentsId)} id={"investments"} />
            <div className={classes.mainTitle} dangerouslySetInnerHTML={{ __html: advantagesBtmTitle}} />
            <OfficesSlider
                className={classes.slider}
                items={AdvBtmList()}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
                isAutoplay={false}
                isHelper={false}
                isNavigation={isDesktop}
            />

        </div>
    )
}