import classes from './style.module.scss';
import classNames from "classnames";
import {cards} from "../../data/helper";

export const CardInfo = ({className, title, list}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.title}>{title}</div>
            <ul className={classes.list}>
            {list.map((item, i) => {
                return (
                    <li className={classes.item} key={item + i} dangerouslySetInnerHTML={{ __html: item}} />
                )
            })}
            </ul>
        </div>
    )
}