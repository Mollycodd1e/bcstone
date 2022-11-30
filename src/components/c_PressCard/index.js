import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const C_PressCard = ({className, date, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});
    const textRef = useRef();
    const [isHover, setHover] = useState(false);

    const onHover = function() {
        setHover(true);
    }
    
    const onLeave = function() {
        setHover(false)
    }

    const newText = description.slice(0, 100);
    const spaceNumber = newText.lastIndexOf(' ');
    const cropText = newText.slice(0, spaceNumber) + '...';

    const [isVisible, setVisible] = useState(false);

    const dayOfNews = new Date(date).getDate();
    const monthOfNews = new Date(date).getMonth() + 1;
    
    return (
        <div className={classNames(cls, {[classes.element_show]: isVisible})}>
            <div className={classNames(classes.data, {[classes.data_hover]: isHover})}>{dayOfNews}/{monthOfNews}</div>
            <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>      
                <Image src={image} layout='fill'/>
                {/* <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Читать</a> */}
                <a href='#'>Читать</a>
            </div>  
            <div className={classes.description_wrapper}>
              <h3>{title}</h3>
              <p ref={textRef} dangerouslySetInnerHTML={{ __html: cropText}}></p>
            </div>
        </div>
    )
}