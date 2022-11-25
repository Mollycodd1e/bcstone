import classes from './style.module.scss';
import classNames from "classnames";
import React, { useRef, useState } from "react";
import {C_ContentAbout} from "../../components/c_ContentAbout";
// import {C_MainButton} from "../../components/c_MainButton";
// import {sizes} from "../../data/sizes";

export const S_About = ({className, menuOnTop, data, width, setIsAboutPopupClose, popup}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});

    const title = useRef();
    const [isAboutTitle, setIsAboutTitle] = useState(false);

    function onEntryTitle(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            setIsAboutTitle(true);
          } else {
            // setIsAboutTitle(false);
          }
        });
    }

    let options = { rootMargin: '300px', threshold: [0.5] };

    let observer = new IntersectionObserver( onEntryTitle, options);

    if (title.current) {
        observer.observe(title.current);
    }

    return (
        <div className={classes.wrapRoot}>
            <div className={cls}>
                <div className={classNames(classes.frame,{[classes.titleShown]: isAboutTitle})} ref={title}>
                    <div className={classes.bg_text}>
                        О нас
                    </div>
                    <div className={classes.title}>
                        Девелопер
                    </div>
                    <C_ContentAbout data={data} setIsAboutPopupClose={setIsAboutPopupClose} popup={popup}/>
                </div>
            </div>
        </div>
    )
}