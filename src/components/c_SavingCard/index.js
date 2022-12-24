import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useState} from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const C_SavingCard = ({className, image, description, title, item}) => {
    const {link} = item;
    const cls = classNames(classes.root, {[className]: className});

    const [isHover, setHover] = useState(false);
    const cardRef = useRef();
    const [isCard, setIsCard] = useState(false);

    const onHover = function() {
        setHover(true);
    }

    const onLeave = function() {
        setHover(false)
    }

    useEffect(() => {
        function onEntry(entry) {
            entry.forEach(change => {
              if (change.isIntersecting) {
                setIsCard(true);
              } else {
                // setIsCard(false);
              }
            });
        }
    
        let options = { rootMargin: '0px', threshold: [0.5] };
    
        let observer = new IntersectionObserver( onEntry, options);
    
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
    })
    

    return (
        <div className={classNames(cls,{[classes.cardShown]: isCard})} ref={cardRef}>
            {(typeof window !== 'undefined') && 
                <a href={window.location.hostname === 'localhost' ? `/${link}` : `/${link}.html`}>
                    <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}  onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>   
                        <h3>{title}</h3>     
                        <Image src={image} layout='fill'/>
                        <button href={window.location.hostname === 'localhost' ? `/${link}` : `/${link}.html`}>Подробнее</button>
                        <div className={classes.card_shadow}></div>
                    </div>
                </a>
            }
            <p>{description}</p>
        </div>
    )
}