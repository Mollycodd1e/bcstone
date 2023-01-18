import classes from './style.module.scss';
import classNames from "classnames";
import React, { useRef, useState } from "react";
import {C_ContentAbout} from "@/components/c_ContentAbout";
import { useEffect } from 'react';

export const S_About = ({className, menuOnTop, data, width, setIsAboutPopupClose, popup, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[classes.menuOnTop]:menuOnTop, [className]: className});

    const title = useRef();
    const lineRef = useRef();
    const [isAboutTitle, setIsAboutTitle] = useState(false);
    const [isAboutLine, setIsAboutLine] = useState(false);

    useEffect(() => {
      function onEntryTitle(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                setIsAboutTitle(true);
            }
        })
      }

      function onEntryLine(entry) {
          entry.forEach(change => {
              if (change.isIntersecting) setIsAboutLine(true);
          })
      }

      let options = { rootMargin: '0px', threshold: [0] };
      let optionsLine = { rootMargin: '100px 0px -950px 0px', threshold: [0] };

      let observer = new IntersectionObserver( onEntryTitle, options);
      let observerLine = new IntersectionObserver( onEntryLine, optionsLine);

      if (title.current) {
          observer.observe(title.current);
      }

      if (lineRef.current) {
          observerLine.observe(lineRef.current);
      }
    })
    
    return (
        <div className={classes.wrapRoot} id={'developer'}>
            <div className={classNames(cls,{[classes.lineShown]: isAboutLine})} ref={lineRef}>
                <div className={classNames(classes.frame,{[classes.titleShown]: isAboutTitle})} ref={title}>
                  {/* обертка для титула */}
                    <div className={classes.AboutTitle}>
                      <div className={classes.bg_text}>
                          О нас
                      </div>
                      <div className={classes.title}>
                          Девелопер
                      </div>
                    </div>
                    <C_ContentAbout data={data} setIsPopupClose={setIsPopupClose} setIsAboutPopupClose={setIsAboutPopupClose} popup={popup}/>
                </div>
            </div>
        </div>
    )
}