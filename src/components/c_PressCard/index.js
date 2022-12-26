import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useEffect, useRef, useState } from 'react';
import { useContext} from 'react';
import { sizes } from '../../data/sizes';
import {Context} from "../../library";

export const C_PressCard = ({className, newsId, date, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});
    const textRef = useRef();
    const [isHover, setHover] = useState(false);
    const [width, height] = useContext(Context);
    const [isWebp, setIsWebp] = useState(false);

    const onHover = function() {
        setHover(true);
    }
    
    const onLeave = function() {
        setHover(false)
    }

    let newTitle = title;
    let spaceNumberTitle;
    let cropTitle;
    let newContent = description;
    let spaceNumberContent;
    let cropContent;

    if ((newTitle.length < 22) && (newContent.length >= 75)) {
        cropTitle = title;
        spaceNumberContent = newContent.slice(0, 150).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length < 22) && (newContent.length < 75)) {
        cropTitle = title;
        cropContent = description;
    } else if ((newTitle.length >= 22) && (newTitle.length < 50) && (newContent.length >= 50)) {
        spaceNumberTitle = newTitle.slice(0, width >= sizes.widthDesktopSm ? 35 : 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        spaceNumberContent = newContent.slice(0, width < sizes.widthTabletMd ? 95 : width >= sizes.widthDesktopLg ? 90 : width >= sizes.widthDesktopSm ? 86 : 105).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length >= 22) && (newContent.length >= 50)) {
        spaceNumberTitle = newTitle.slice(0, 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        spaceNumberContent = newContent.slice(0, width < sizes.widthTabletMd ? 90 :width >= sizes.widthDesktopLg ? 90 : width >= sizes.widthDesktopSm ? 70 : 105).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length >= 22) && (newContent.length <= 50)) {
        spaceNumberTitle = newTitle.slice(0, 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        cropContent = description;
    }

    const [isVisible, setVisible] = useState(false);

    const dayOfNews = new Date(date).getDate();
    const monthOfNews = new Date(date).getMonth() + 1;

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
        <div className={classNames(cls, {[classes.element_show]: isVisible})}>
            <div className={classNames(classes.data, {[classes.data_hover]: isHover})}>{dayOfNews}/{monthOfNews}</div>
                <a href={window.location.hostname === 'localhost' ? `/news?id=${newsId}` : `/news.html?id=${newsId}`}>
                    <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>
                        {width < sizes.widthTabletMd ?        
                            <Image src={isWebp ? `${retina ? image : image}` : `${retina ? image : image}`} layout='fill' alt="Фото новости"/>
                        :
                            <Image src={isWebp ? `${retina ? image : image}` : `${retina ? image : image}`} layout='fill' alt="Фото новости"/>
                        }    
                        <button href={window.location.hostname === 'localhost' ? `/news?id=${newsId}` : `/news.html?id=${newsId}`}>Читать</button>
                    </div>
                </a>
            <div className={classes.description_wrapper}>
              <h3>{cropTitle}</h3>
              <p ref={textRef} dangerouslySetInnerHTML={{ __html: cropContent}}></p>
            </div>
        </div>
    )
}