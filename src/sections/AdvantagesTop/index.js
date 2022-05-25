import classes from './style.module.scss';
import classNames from "classnames";
import {OfficesSlider} from "../../components/OfficesSlider";
import {advTopList} from "../../complexComponents/advTopList";
import {useContext, useState} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";


export const AdvantagesTop = ({className}) => {
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;
    const cls = classNames(classes.root, { [className]: className });
    const [activeElement, setActiveElement] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className={cls}>
            <div className={classes.title}>Почему выбирают <br/>бизнес-центры STONE</div>
            <OfficesSlider
                className={classes.slider}
                items={advTopList()}
                setActiveElement={setActiveElement}
                setSwiperInstance={setSwiperInstance}
                isAutoplay={false}
                isHelper={false}
            />
            <div className={classes.desktop}>
                {advTopList().map(el => el)}
            </div>
        </div>
    )
}