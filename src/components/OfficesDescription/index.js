import classes from './style.module.scss';
import classNames from "classnames";
import {Fragment} from "react";


export const OfficesDescription = ({className, description, activeElement}) => {
    const cls = classNames(classes.root, { [className]: className });
    return (
        <div className={cls}>
            <div className={classes.buildingType}>{description[activeElement].type}</div>
            {description[activeElement].info.map((el, ind) => {
                return (
                    <div className={classes.rowLine} key={ind}>
                        <div className={classes.text}>{el.text}</div>
                        <>
                            {
                                el.metroLines.map((line, i) => {
                                    return (
                                        <div
                                            key={i}
                                             className={classNames(classes.metroLine, classes[`currentLine_${line}`])}
                                        >
                                            {line}
                                        </div>
                                    )
                                })
                            }
                        </>
                    </div>
                )
            })}
        </div>
    )
}