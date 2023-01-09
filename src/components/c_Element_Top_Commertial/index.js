import classes from './style.module.scss';
import classNames from "classnames";

import { useContext} from 'react';
import { sizes } from '../../data/sizes';
import {Context} from "../../library";

export const C_Element_Top_Commertial = ({className, element}) => {
    const cls = classNames(classes.root, {[className]: className});
    const {title, content, link, link_text, color} = element;

    const {width, height} = useContext(Context);

    let newTitle = title;
    let spaceNumberTitle;
    let cropTitle;
    let newContent = content;
    let spaceNumberContent;
    let cropContent;


    if ((newTitle.length <= 22) && (newContent.length < 75)) {
        cropTitle = title;
        cropContent = content;
    } else if ((newTitle.length <= 35) && (newContent.length >= 75)) {
        cropTitle = title;
        spaceNumberContent = newContent.slice(0, 75).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length <= 35) && (newContent.length < 40)) {
        cropTitle = title;
        cropContent = content;
    } else if ((newTitle.length <= 35) && (newContent.length < 75)) {
        cropTitle = title;
        spaceNumberContent = newContent.slice(0, 44).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';  
    } else if ((newTitle.length > 35) && (newTitle.length < 50) && (newContent.length >= 50)) {
        spaceNumberTitle = newTitle.slice(0, 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        spaceNumberContent = newContent.slice(0, width < sizes.widthTabletMd ? 50 : width >= sizes.widthDesktopSm ? 46 : 70).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length > 35) && (newContent.length >= 50)) {
        spaceNumberTitle = newTitle.slice(0, 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        spaceNumberContent = newContent.slice(0, width < sizes.widthTabletMd ? 50 : width >= sizes.widthDesktopSm ? 46 : 70).lastIndexOf(' ');
        cropContent = newContent.slice(0, spaceNumberContent) + '...';
    } else if ((newTitle.length > 35) && (newContent.length <= 50)) {
        spaceNumberTitle = newTitle.slice(0, 40).lastIndexOf(' ');
        cropTitle = newTitle.slice(0, spaceNumberTitle) + '...';
        cropContent = content;
    }

    return (
       <div className={cls}>
            <div
                className={classes.decor}
                style={{backgroundColor: `${color}`}}
            />
            <div className={classes.wrap}>
                <span className={classes.title}>
                    {cropTitle}
                </span>
                <span className={classes.content}>
                    {cropContent}
                </span>
                    <a className={classes.link}
                        href={`/${link}`}>
                        Подробнее
                    </a>
            </div>
       </div>
    )
}