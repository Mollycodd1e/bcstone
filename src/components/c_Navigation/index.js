import classes from './style.module.scss';
import classNames from "classnames";
import { C_Logo } from "../c_Logo";
import { C_MainButton } from "../c_MainButton";
import { C_Nav_List } from "../c_Nav_List";
import { useEffect, useRef, useState } from "react";
import {useMobxStores} from "../../store/stores";


export function C_Navigation({className, data, setIsPopupClose,  briefing}) {
    const cx = classNames(classes.root, { [className]: className });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const burgerRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', function (evt) {
            if (burgerRef.current) {
                if (burgerRef.current.classList.contains(classes.showElements) && 
                    !evt.target.classList.contains(classes.burger) &&
                    !evt.target.classList.contains(classes.elements) &&
                    evt.target.textContent !== 'Проекты') {
                        setIsMobileMenuOpen(false);
                }
            }
        })
    })


    let x1 = null;
    let y1 = null;
  
    function handleTouchStart(evt) {
      x1 = evt.touches[0].clientX;
      y1 = evt.touches[0].clientY;
    }
  
    function handleTouchMove(evt) {
      if (!x1 || !y1) {
        return false;
      }

      let x2 = evt.touches[0].clientX;
      let y2 = evt.touches[0].clientY;
  
      let xDiff = x2 - x1;
  
      if (xDiff < -30) {
        setIsMobileMenuOpen(false);
      }
    }
  
    return (
        <nav className={cx}>
            <div
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className={
                    classNames(
                        classes.burger,
                        {[classes.openBurger]: isMobileMenuOpen})}
            />
            <div className={classNames(
                classes.elements,
                {[classes.showElements]: isMobileMenuOpen})}
                ref={burgerRef}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
            >
                <C_Logo className={classes.C_Logo} />
                <C_Nav_List className={classes.C_Nav_List} data={data} briefing={ briefing} setIsMobileMenuOpen={setIsMobileMenuOpen} setIsPopupClose={setIsPopupClose}/>
                <C_MainButton text={"Оставить заявку"} onClick={() => (setIsPopupClose(false), setIsMobileMenuOpen(false))} className={classes.C_MainButton} mode={true} />
                {/*<c_MainButton text={"Оставить заявку"} onClick={() => console.log('click')} className={classes.c_MainButton} mode={true} />*/}
            </div>
        </nav>
    )
}