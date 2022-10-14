import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import savePic from '../../img/save.png';

export const C_SavingCard = ({className, url, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
            <div className={classes.card_wrapper}> 
                <h3>Сохраните сбережения в&nbsp;недвижимости</h3>     
                <Image src={savePic} layout='fill'/>
                <a href='#'>Подробнее</a>
            </div>
            <p>{description}</p>
        </div>
    )
}