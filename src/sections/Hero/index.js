import classes from './style.module.scss';
import classNames from "classnames";
import {hero} from "../../data/helper";

export const Hero = ({className}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.firstBlock} dangerouslySetInnerHTML={{ __html: hero.firstBlock.text}} />
            <div className={classes.secondBlock}>
                {
                    hero.secondBlock.map((el, i) => {
                        return (
                            <div key={el.textBtm + i} className={classes.elementContainer}>
                                <div className={classes.icon} dangerouslySetInnerHTML={{ __html: el.icon}} />
                                <div className={classes.textTop}>{el.textTop}</div>
                                <div className={classes.textBtm}>{el.textBtm}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}