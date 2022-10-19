import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export const C_PressCard = ({className, date, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const [isHover, setHover] = useState(false);

    const onHover = function() {
        setHover(true);
    }
    
    const onLeave = function() {
        setHover(false)
    }

    return (
        <div className={cls}>
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