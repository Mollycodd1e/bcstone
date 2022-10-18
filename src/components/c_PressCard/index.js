import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import homePic from '../../img/press-present.png';

export const C_PressCard = ({className, data, image, title, description}) => {
    
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
            <div className={classNames(classes.data, {[classes.data_hover]: isHover})}>{data}</div>
            <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}>      
                <Image src={homePic} layout='fill'/>
                <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Читать</a>
            </div>  
            <div className={classes.description_wrapper}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
    )
}