import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const C_PressCard = ({className, date, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const [isHover, setHover] = useState(false);

    const onHover = function() {
        setHover(true);
    }
    
    const onLeave = function() {
        setHover(false)
    }

    const [isVisible, setVisible] = useState(false);
    // const ref = useRef();

    // useEffect(() => {
    //   if (ref.current) {
    //     observer.observe(ref.current)
    //   }
    // },[])

    // function onEntry(entry) {
    //     entry.forEach(change => {
    //       if (change.isIntersecting) {
    //         setVisible(true)
    //       } else {
    //         setVisible(false);
    //       }
    //     });
    // }
    
    // let options = { threshold: [0.5] };
    // let observer = new IntersectionObserver( onEntry, options);

    // if (ref.current) {
    //   observer.observe(ref.current)
    // }

    return (
        <div className={classNames(cls, {[classes.element_show]: isVisible})}>
            <div className={classNames(classes.data, {[classes.data_hover]: isHover})}>{date}</div>
            <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>      
                <Image src={image} layout='fill'/>
                {/* <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Читать</a> */}
                <a href='#'>Читать</a>
            </div>  
            <div className={classes.description_wrapper}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
    )
}