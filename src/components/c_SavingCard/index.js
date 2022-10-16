import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import savePic from '../../img/save.png';
import {useState} from 'react';

export const C_SavingCard = ({className, url, description}) => {
    
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
            <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}>   
                <h3>Сохраните сбережения в&nbsp;недвижимости</h3>     
                <Image src={savePic} layout='fill'/>
                <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Подробнее</a>
            </div>
            <p>{description}</p>
        </div>
    )
}