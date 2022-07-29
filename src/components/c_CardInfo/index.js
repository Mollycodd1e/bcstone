import classes from './style.module.scss';
import classNames from "classnames";
import {cards} from "../../data/helper";

const example = {
    logo: 'https://stone-svl.ru/_nuxt/img/logo_sav_short.63c76f8.svg',
    list: [
        `Ленинский проспект`,
        `4 минуты`,
        `Готовность: 2025`,
        `От 70 м&#178;`,
    ],
}
// &nbsp;000 м&#178;

export const С_CardInfo = ({className, title, list, data, logo}) => {
    const cls = classNames(classes.root, { [className]: className });
    // console.log('data 666', data.projects[1].descriptionList)
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