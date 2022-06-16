import classes from './style.module.scss';
import classNames from "classnames";
import {logo} from '../../img/svgInlineImg.js'
import {links} from "../../data/stoneLinks";
import {C_MainButton} from "../C_MainButton";

export const S_Hero = ({className}) => {
    const cls = classNames(classes.root, {[className]: className });
    return (
        <div className={cls} >
            <div className={classes.textBlock}>
                <div className={classes.titleHelper}>Бизнес-центры класса а</div>
                <div className={classes.mainTitle}>STONE</div>
                <div className={classes.listName}>Аренда / продажа офисов и ритейла <br/>в Москве у метро</div>
                <ul className={classes.list}>
                    <li className={classes.item}>Доходность до 45%</li>
                    <li className={classes.item}>Окупаемость 6 лет</li>
                    <li className={classes.item}>Вложения от 12 млн руб.</li>
                    <li className={classes.item}>Девелопер STONE HEDGE</li>
                </ul>
                <C_MainButton text={"Получить предложение"} onClick={() => console.log('click')} className={classes.mainButton} />
            </div>
            <div className={classes.interactiveBlock} >
                <div className={classes.btmPic}/>
                <div className={classes.topPic}/>
            </div>

        </div>
    )
}