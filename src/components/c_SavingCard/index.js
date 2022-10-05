import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

export const C_SavingCard = ({className, url, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
            <div className={classes.card_wrapper}>      
                <Image src={url} layout='fill'/>
                <a href='#'>Подробнее</a>
            </div>
            <p>{description}</p>
        </div>
    )
}