import classes from './style.module.scss';
import classNames from "classnames";
import {useRef} from "react";

export const C_MainButton = ({className, text, onClick, mode = false}) => {
    const btnEl = useRef(null);
    const spanEl = useRef(null);
    const cls = classNames(
        classes.root,
        {[className]: className}
    );
    return (
        <>
            {!mode ?
                <button
                    ref={btnEl}
                    className={cls}
                    onClick={() => onClick()}
                    onMouseOver={(e) => {
                        spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                        spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                    }}
                    onMouseOut={(e) => {
                        spanEl.current.style.left = e.pageX - btnEl.current.offsetLeft + "px";
                        spanEl.current.style.top = e.pageY - btnEl.current.offsetTop + "px";
                    }}
                >
                    <span ref={spanEl} className={classes.span}/>
                    <span className={classes.text}>{text}</span>
                </button>
                : <button
                    className={classes.mode}
                    onClick={() => onClick()}
                >
                    {text}
                </button>
            }
        </>

    )
}