import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useState} from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import {Context} from "../../library";
import { useContext} from 'react';
import {sizes} from "../../data/sizes";

export const C_SavingCard = ({className, image, description, title, item}) => {
    const {link} = item;
    const cls = classNames(classes.root, {[className]: className});

    const [isHover, setHover] = useState(false);
    const cardRef = useRef();
    const [isCard, setIsCard] = useState(false);
    const [width, height] = useContext(Context);
    const [isWebp, setIsWebp] = useState(false);

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
    
    let retina;

    if (typeof window !== "undefined") {
        retina = window.devicePixelRatio > 1;
    }  

    useEffect(() => {
        setIsWebp(false);
        function canUseWebp() {
            // Создаем элемент canvas
            let elem = document.createElement('canvas');
            // Приводим элемент к булеву типу
            if (!!(elem.getContext && elem.getContext('2d'))) {
                // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
                setIsWebp(true);
                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
            }
            // Иначе Webp не используем
            return false;
        };
        canUseWebp();
    },[])

    return (
        <div className={classNames(cls,{[classes.cardShown]: isCard})} ref={cardRef}>
            {(typeof window !== 'undefined') && 
                <a href={window.location.hostname === 'localhost' ? `/${link}` : `/${link}.html`}>
                    <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})}  onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>   
                        <h3>{title}</h3>
                        {width < sizes.widthTabletMd ?   
                            <Image src={isWebp ? `${retina ? image : image}` : `${retina ? image : image}`} layout='fill' alt="Фото новости"/>
                        :
                            <Image src={isWebp ? `${retina ? image : image}` : `${retina ? image : image}`} layout='fill' alt="Фото новости"/>
                        }
                        <button href={window.location.hostname === 'localhost' ? `/${link}` : `/${link}.html`}>Подробнее</button>
                        <div className={classes.card_shadow}></div>
                    </div>
                </a>
            }
            <p>{description}</p>
        </div>
    )
}