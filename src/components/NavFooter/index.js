import classes from './style.module.scss';
import classNames from "classnames";
import {footer} from "../../data/footer";

export const NavFooter = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <ul className={cls}>
            {footer.navs.map((el, i) => {
                const {name, code, moveTo} = el;
                return (
                    <a
                        href={`#${moveTo}`}
                        className={classNames(classes.item, classes[code])}
                        key={i}>
                        {name}
                    </a>
                )
            })}
        </ul>
    )
}