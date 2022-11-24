import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useState} from 'react';

export const C_SavingCard = ({className, image, description, title}) => {
    
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
            <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}  onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>   
                <h3>{title}</h3>     
                <Image src={image} layout='fill'/>
                {/* <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Подробнее</a> */}
                {/* <a href='#'>{isHover === false && window.innerWidth >=1440 ? null : 'Подробнее'}</a> */}
                <a href='#'>Подробнее</a>
                <div className={classes.card_shadow}></div>
            </div>
            <p>{description}</p>
        </div>
    )
}