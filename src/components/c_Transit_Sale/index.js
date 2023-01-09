import classes from './style.module.scss';
import classNames from "classnames";
import Link from "next/link";

export const C_Transit_Sale = ({className, url, name, type, picture, setIsHover, number, setIsHoveredItem}) => {
    const cls = classNames(classes.root, {[classes.reverse]: type === "retail", [className]: className});

    return (
        <>
            {(typeof window !== 'undefined') &&
            <a className={cls} href={url}
               onMouseOver={() => (setIsHover(true), setIsHoveredItem(number))} onMouseOut={() => setIsHover(false)}>
                <div className={classes.picture}
                     style={{backgroundImage: `url("${picture.src}")`}}/>

                <div className={classes.link}>
                    <svg className={classes.roundButton} xmlns="http://www.w3.org/2000/svg" width="52" height="52"
                         viewBox="0 0 52 52">
                        <g id="кнопка_Перейти" data-name="кнопка Перейти" transform="translate(-276 -1037)">
                            <g id="Эллипс_15" data-name="Эллипс 15" transform="translate(276 1037)" fill="none"
                               stroke="#c4c4c4" strokeWidth="1">
                                <circle cx="26" cy="26" r="26" stroke="none"/>
                                <circle cx="26" cy="26" r="25.5" fill="none"/>
                            </g>
                            <path id="Контур_60" data-name="Контур 60" d="M0,0,11.263,11.264,22.528,0"
                                  transform="translate(298.298 1074.58) rotate(-90)" fill="none" stroke="#c4c4c4"
                                  strokeWidth="1"/>
                        </g>
                    </svg>
                    <svg className={classes.arrowButton} xmlns="http://www.w3.org/2000/svg" width="34.465"
                         height="14.284" viewBox="0 0 34.465 14.284">
                        <g id="стрелка" transform="translate(0.5 0.707)">
                            <path id="Контур_11189" data-name="Контур 11189" d="M9233.406,11434h33.258"
                                  transform="translate(-9233.406 -11427.565)" fill="none" stroke="#c4c4c4"
                                  strokeLinecap="round" strokeWidth="1"/>
                            <path id="Контур_11190" data-name="Контур 11190" d="M0,0H9.436"
                                  transform="translate(26.357 0) rotate(43)" fill="none" stroke="#c4c4c4"
                                  strokeLinecap="round" strokeWidth="1"/>
                            <path id="Контур_11191" data-name="Контур 11191" d="M0,0H9.437"
                                  transform="translate(26.356 12.87) rotate(-43)" fill="none" stroke="#c4c4c4"
                                  strokeLinecap="round" strokeWidth="1"/>
                        </g>
                    </svg>

                    <span className={classes.buttonText}>перейти</span>
                </div>
                <h2 className={classes.title}>{name}</h2>
            </a>
            }
        </>
    )
}