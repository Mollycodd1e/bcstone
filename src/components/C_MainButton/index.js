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
                    spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                    spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                }
            }}
            onMouseOut={(e) => {
                if (width <= sizes.widthDesktopLg) {
                    e.preventDefault()
                } else {
                    spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                    spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                }
            }}
        >
            <span ref={spanEl} className={classes.span}/>
            <span className={classes.text}>{text}</span>
        </button>
    )
}