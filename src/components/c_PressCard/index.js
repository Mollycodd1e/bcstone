import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

export const C_PressCard = ({className, data, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    return (
        <div className={cls}>
            <div className={classes.data}>{data}</div>
            <div className={classes.card_wrapper}>      
                <Image src={image} layout='fill'/>
                <a href='#'>Подробнее</a>
            </div>  
            <div className={classes.description_wrapper}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
    )
}