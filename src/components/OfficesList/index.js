import classes from './style.module.scss';
import classNames from "classnames";
import {OfficesLI} from "../OfficesLI";

export const OfficesList = ({className, elements, activeElement, setActiveElement, slideTo}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.wrapper}>
                {elements.map((el, i) => {
                    return (
                        <OfficesLI key={i} className={classes.OfficesLI} element={el} isActive={activeElement === i} onClick={() => {
                            setActiveElement(i);
                            slideTo(i + 1)
                        }} />
                    )
                })}
            </div>
        </div>
    )
}