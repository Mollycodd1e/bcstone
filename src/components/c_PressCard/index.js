import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

export const C_PressCard = ({className, data, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});

    const onHover = () => {
        const el = document.querySelector('img');
        console.log(el.closest('div'));
        el.closest('div').classList.add('cardWrapperHover')
    }
    const onLeave = () => {
        const el = document.querySelector('img');
        console.log(el.closest('div'));
        el.closest('div').classList.remove('cardWrapperHover')
    }
    return (
        <div className={cls}>
            <div className={classes.data}>{data}</div>
            <div className={classes.card_wrapper}>      
                <Image src={image} layout='fill'/>
                <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Читать</a>
            </div>  
            <div className={classes.description_wrapper}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
    )
}