import classes from './style.module.scss';
import classNames from "classnames";

export const С_CardInfo = ({className, title, list, logo}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div
                className={classes.logo}
                style={{
                    backgroundImage:  `url("${logo}")`
                }}
            />
            <ul className={classes.list}>
            {list.slice(0, 4).map((item, i) => {
                return (
                    <li className={classes.item} key={item + i} dangerouslySetInnerHTML={{ __html: item}} />
                )
            })}
            </ul>
        </div>
    )
}