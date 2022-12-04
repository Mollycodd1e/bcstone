import classes from './style.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import {useRef, useState } from 'react';
import { useContext} from 'react';
import { sizes } from '../../data/sizes';
import {Context} from "../../library";
import Link from 'next/link';

export const C_PressCard = ({className, date, image, title, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});
    const textRef = useRef();
    const [isHover, setHover] = useState(false);
    const [width, height] = useContext(Context);

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
        spaceNumberTitle = newTitle.slice(0, 50).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle);
        spaceNumberContent = newContent.slice(0, width < sizes.widthTabletMd ? 95 : width >= sizes.widthDesktopLg ? 90 : width >= sizes.widthDesktopSm ? 86 : 105).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length >= 22) && (newContent.length >= 50)) {
        spaceNumberTitle = newTitle.slice(0, 30).lastIndexOf(' ');
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
    
    return (
        <div className={classNames(cls, {[classes.element_show]: isVisible})}>
            <div className={classNames(classes.data, {[classes.data_hover]: isHover})}>{dayOfNews}/{monthOfNews}</div>
            <Link href={'#'}>
                <div className={classNames(classes.card_wrapper, {[classes.card_wrapper_hover]: isHover})} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>      
                    <Image src={image} layout='fill'/>
                    {/* <a href='#' onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>Читать</a> */}
                    <a href=''>Читать</a>
                </div>
            </Link>  
            <div className={classes.description_wrapper}>
              <h3>{cropTitle}</h3>
              <p ref={textRef} dangerouslySetInnerHTML={{ __html: cropContent}}></p>
            </div>
        </div>
    )
}