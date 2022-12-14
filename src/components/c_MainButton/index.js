import classes from './style.module.scss';
import classNames from "classnames";
import {useContext, useRef} from "react";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";

export const C_MainButton = ({className, text, onClick, mode = false}) => {
    const btnEl = useRef(null);
    const spanEl = useRef(null);
    const cls = classNames(
        classes.root,
        {[className]: className,
        [classes.mode]: mode}
    );
    const [width, height] = useContext(Context);

    return (
        <button
            ref={btnEl}
            className={cls}
            onClick={() => onClick()}
            onMouseOver={(e) => {
                if (width <= sizes.widthDesktopLg) {
                    e.preventDefault()
                } else {
                    let rect = btnEl.current.getBoundingClientRect();
                    let xBlockPercent = 0;
                    let yBlockPercent = 0;
                    xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(btnEl.current.clientWidth / 100))
                    yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(btnEl.current.clientHeight / 100))
                    // spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                    // spanEl.current.style.left = e.pageX - btnEl.current.getBoundingClientRect().x + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.getBoundingClientRect().y + "px";

                    spanEl.current.style.left = xBlockPercent + "%";
                    spanEl.current.style.top = yBlockPercent + "%";

                    // console.log('1 spanEl.current.style.top', spanEl.current.style.top)
                    // console.log('2 e.pageY', e.pageY)
                    // console.log('3 btnEl.current.offsetTop', btnEl.current.offsetTop)
                    // console.log('4 btnEl.current.getBoundingClientRect()', btnEl.current.getBoundingClientRect())
                }
            }}
            onMouseOut={(e) => {
                if (width <= sizes.widthDesktopLg) {
                    e.preventDefault()
                } else {
                    // spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                    // spanEl.current.style.left = e.pageX - btnEl.current.getBoundingClientRect().x + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.getBoundingClientRect().y + "px";

                    let rect = btnEl.current.getBoundingClientRect();
                    let xBlockPercent = 0;
                    let yBlockPercent = 0;
                    xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(btnEl.current.clientWidth / 100))
                    yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(btnEl.current.clientHeight / 100))

                    // spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                    // spanEl.current.style.left = e.pageX - btnEl.current.getBoundingClientRect().x + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                    // spanEl.current.style.top = e.pageY - btnEl.current.getBoundingClientRect().y + "px";

                    spanEl.current.style.left = xBlockPercent + "%";
                    spanEl.current.style.top = yBlockPercent + "%";
                }
            }}
        >
            <span ref={spanEl} className={classes.span}/>
            <span className={classes.text}>{text}</span>
        </button>
    )
}