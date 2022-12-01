import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useState} from 'react';
import { useRef } from 'react';
import Link from 'next/link';

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

    return (
        <div className={classNames(cls,{[classes.cardShown]: isCard})} ref={cardRef}>
            <Link href={window.location.hostname === 'localhost' ? `/${link}` : `/${link}.html`}>
                <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}  onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>   
                    <h3>{title}</h3>     
                    <Image src={image} layout='fill'/>
                    {/* <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Подробнее</a> */}
                    {/* <a href='#'>{isHover === false && window.innerWidth >=1440 ? null : 'Подробнее'}</a> */}
                    <a>Подробнее</a>
                    <div className={classes.card_shadow}></div>
                </div>
            </Link>
            <p>{description}</p>
        </div>
    )
}