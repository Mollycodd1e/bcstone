import classes from './style.module.scss';
import classNames from "classnames";
import {useState} from "react";
import Link from 'next/link';
import {C_Nav_Sub_List} from "../c_Nav_Sub_List";

export const C_Nav_Element = ({className, item, el, _key, briefing, setIsMobileMenuOpen, setIsPopupClose}) => {
    const cls = classNames(classes.root, {[className]: className});

    const [toggle, setToggle] = useState(false);
    const {name, sub} = el;

    return (
        <li
            key={_key}
            className={cls}
            onClick={sub.length !== 0 ? null : () => setIsMobileMenuOpen(false)}
        >   <a href={`/#${name}`}>
            {/* <Link scroll={false} href={document.querySelector(`#${name}`) && window.location.hostname === 'localhost' ? `#${name}` : 
                !document.querySelector(`#${name}`) && window.location.hostname === 'localhost' ? `/#${name}` : `/${name}.html}`}> */}
                {/* <a href={!briefing && window.location.hostname === 'localhost' ? `/#${name}` :  */}
                {/* briefing && window.location.hostname === 'localhost' ? `/#${name}` : `/${name}.html}`}> */}
                <span className={classNames({[classes.chevronWrapper]: toggle && sub.length !== 0})} 
                onMouseOver={() => window.innerWidth >= 1200 ? setToggle(true) : null}
                onMouseOut={() => setToggle(false)}
                onClick={() => window.innerWidth < 1200 ? setToggle(prev => !prev) : null}
                >
                    <span
                        className={classes.firstLvlMenuName}
                        // onClick={() => setToggle(prev => !prev)}
                        // onClick={() => setToggle(prev => !prev)}
                    >
                        {name}
                    </span>
                    {sub.length !== 0 && <div
                        className={classNames({
                            [classes.chevron]: sub.length !== 0,
                            [classes.chevronActive]: toggle && sub.length !== 0
                        })}
                    />}
                </span>
            </a>    
                <C_Nav_Sub_List
                    item={item}
                    toggle={toggle}
                    setToggle={setToggle}
                    el={el}
                    setIsPopupClose={setIsPopupClose}
                />
            
        </li>
    )
}