import classes from './style.module.scss';
import classNames from "classnames";

export const PurposesHelperText = ({className, texts, activeElement}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <span>{texts[activeElement]}</span>
        </div>
    )
}