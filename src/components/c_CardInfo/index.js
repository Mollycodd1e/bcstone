import classes from './style.module.scss';
import classNames from "classnames";
import {cards} from "../../data/helper";

const example = {
    logo: 'https://stone-svl.ru/_nuxt/img/logo_sav_short.63c76f8.svg',
    list: [
        `Бизнес-центр`,
        `м. «Ленинский»`,
        `От 8 до 20&nbsp;000 м&#178;`,
        `Готовность: 2025`,
    ],
}

export const С_CardInfo = ({className, title, list}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            {/*<div className={classes.title}>{title}</div>*/}
            {/*<ul className={classes.list}>*/}
            {/*{list.map((item, i) => {*/}
            {/*    return (*/}
            {/*        <li className={classes.item} key={item + i} dangerouslySetInnerHTML={{ __html: item}} />*/}
            {/*    )*/}
            {/*})}*/}
            {/*</ul>*/}
            <div
                className={classes.logo}
                style={{
                    backgroundImage:  `url("${example.logo}")`
                }}
            />
            <ul className={classes.list}>
            {example.list.slice(0, 4).map((item, i) => {
                return (
                    <li className={classes.item} key={item + i} dangerouslySetInnerHTML={{ __html: item}} />
                )
            })}
            </ul>
        </div>
    )
}