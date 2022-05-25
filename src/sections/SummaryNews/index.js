import classes from './style.module.scss';
import classNames from "classnames";
import EllipsisText from "react-ellipsis-text";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext} from "react";

export const SummaryNews = ({className, newsList}) => {
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;
    const cls = classNames(classes.events, { [className]: className });
    return (
        <div className={cls} id={"news"}>
            <div className={classes["events__container"]}>
                <h2 className={classes["events__title"]}>
                    <a href="#" className={classes["events__title-link"]}>
                        {isDesktop ? "Все новости STONE" : "Новости STONE"}
                    </a>
                </h2>
                <ul className={classes["events__list"]}>
                    {
                        newsList.slice(0, 6).map((el, i) => {
                            return (
                                <li
                                    key={i}
                                    className={classes["events__item"]}
                                >
                                    <p className={classes["events__item-date"]}>
                                        {el.date}
                                    </p>
                                    <h3 className={classes["events__item-title"]}>
                                        <a href="#" className={classes["events__item-link"] }>
                                            <EllipsisText text={el.title} length={60}/>
                                        </a>
                                    </h3>
                                    <p className={classes["events__item-text"]}>
                                        <EllipsisText text={el.previewText} length={75}/>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}