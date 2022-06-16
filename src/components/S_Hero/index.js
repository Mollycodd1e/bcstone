import classes from './style.module.scss';
import classNames from "classnames";
import {logo} from '../../img/svgInlineImg.js'
import {links} from "../../data/stoneLinks";
import {C_MainButton} from "../C_MainButton";
import {useRef} from "react";

export const S_Hero = ({className}) => {
    const interactiveBlock = useRef(null);
    const topPic = useRef(null);
    const cls = classNames(classes.root, {[className]: className });
    const updateCursor = (e, topPic, interactiveBlock) => {
        const rect = interactiveBlock.current.getBoundingClientRect()

        // console.log('Координата начала блока по X относительно документа:', rect.x + pageXOffset)
        // console.log('координата начала блока по Y относительно документа:', rect.y + pageYOffset)
        // console.log('Ширина блока:', topPic.current.clientWidth)
        // console.log('Высота блока:', topPic.current.clientHeight)
        // // console.log('Координата конца блока по X относительно документа:', rect.x + pageXOffset + topPic.current.clientWidth)
        // // console.log('Координата конца блока по Y относительно документа:', rect.y + pageYOffset + topPic.current.clientHeight)
        // console.log('Позиция курсора по X', e.pageX)
        // console.log('Позиция курсора по Y', e.pageY)

        let xBlockPercent = 0
        let yBlockPercent = 0
        xBlockPercent = Math.abs((e.pageX - (rect.x + pageXOffset))/(interactiveBlock.current.clientWidth / 100))
        yBlockPercent = Math.abs((e.pageY - (rect.y + pageYOffset))/(interactiveBlock.current.clientHeight / 100))
        // console.log('Позиция курсора по X в % относительно блока', xBlockPercent)
        // console.log('Позиция курсора по Y в % относительно блока', yBlockPercent)


        // topPic.current.style.clipPath = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%);`

        // topPic.current.style['clip-path'] = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%)`
        // console.log(`circle(230px at ${xBlockPercent}% ${yBlockPercent}%)`, topPic.current.style['clip-path'])
        // todo: сделать динамический размер
        let size = 0;
        const maxCircle = 4.1;
        const limitCircle = maxCircle * 50;
        const borderX = 50;
        const borderY = 20;
        const grownSpeed = 1.6;

        if (xBlockPercent <= borderX && yBlockPercent <= borderY) {
            size =  Math.min((maxCircle * grownSpeed * Math.min(xBlockPercent, yBlockPercent * 2.5)), limitCircle)
        } else if (xBlockPercent <= borderX && yBlockPercent > borderY) {
            size = Math.min((maxCircle * grownSpeed * Math.min(xBlockPercent, (100 - yBlockPercent))), limitCircle)
        } else if  (xBlockPercent > borderX && yBlockPercent > borderY) {
            size = Math.min((maxCircle * grownSpeed * Math.min((100 - xBlockPercent), (100 - yBlockPercent))), limitCircle)
        } else {
            size = Math.min((maxCircle * grownSpeed * Math.min((100 - xBlockPercent), (yBlockPercent * 2.5))), limitCircle)
        }
        console.log(size)
        topPic.current.style['clip-path'] = `circle(${size}px at ${xBlockPercent}% ${yBlockPercent}%)`

        // if (xBlockPercent <=10 || yBlockPercent <= 10) {
        //     topPic.current.style['clip-path'] = `circle(30px at ${xBlockPercent}% ${yBlockPercent}%)`
        // }
        // else {
        //     topPic.current.style['clip-path'] = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%)`
        // }


    }
    return (
        <div className={cls} >
            <div className={classes.textBlock}>
                <div className={classes.titleHelper}>Бизнес-центры класса а</div>
                <div className={classes.mainTitle}>STONE</div>
                <div className={classes.listName}>Аренда / продажа офисов и ритейла <br/>в Москве у метро</div>
                <ul className={classes.list}>
                    <li className={classes.item}>Доходность до 45%</li>
                    <li className={classes.item}>Окупаемость 6 лет</li>
                    <li className={classes.item}>Вложения от 12 млн руб.</li>
                    <li className={classes.item}>Девелопер STONE HEDGE</li>
                </ul>
                <C_MainButton text={"Получить предложение"} onClick={() => console.log('click')} className={classes.mainButton} />
            </div>
            <div
                className={classes.interactiveBlock}
                ref={interactiveBlock}
                // onMouseMove={(e) => updateCursor(e, topPic, interactiveBlock)}
                // onMouseOut={(e) => {
                //     topPic.current.style['clip-path'] = `circle(0 at 0 0)`
                // }}
            >
                <div className={classes.btmPic}/>
                <div
                    className={classes.topPic}
                    ref={topPic}



                    // onMouseDown={(e) => {
                    //     const rect = topPic.current.getBoundingClientRect()
                    //
                    //     // console.log('Координата начала блока по X относительно документа:', rect.x + pageXOffset)
                    //     // console.log('координата начала блока по Y относительно документа:', rect.y + pageYOffset)
                    //     // console.log('Ширина блока:', topPic.current.clientWidth)
                    //     // console.log('Высота блока:', topPic.current.clientHeight)
                    //     // // console.log('Координата конца блока по X относительно документа:', rect.x + pageXOffset + topPic.current.clientWidth)
                    //     // // console.log('Координата конца блока по Y относительно документа:', rect.y + pageYOffset + topPic.current.clientHeight)
                    //     // console.log('Позиция курсора по X', e.pageX)
                    //     // console.log('Позиция курсора по Y', e.pageY)
                    //
                    //     let xBlockPercent = Math.abs(Math.round((e.pageX - (rect.x + pageXOffset))/(topPic.current.clientWidth / 100)))
                    //     let yBlockPercent = Math.abs(Math.round((e.pageY - (rect.y + pageYOffset))/(topPic.current.clientHeight / 100)))
                    //     // console.log('Позиция курсора по X в % относительно блока', xBlockPercent)
                    //     // console.log('Позиция курсора по Y в % относительно блока', yBlockPercent)
                    //
                    //
                    //     topPic.current.style.clipPath = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%);`
                    // }}
                    // onMouseUp={(e) => {
                    //     const rect = topPic.current.getBoundingClientRect()
                    //
                    //     // console.log('Координата начала блока по X относительно документа:', rect.x + pageXOffset)
                    //     // console.log('координата начала блока по Y относительно документа:', rect.y + pageYOffset)
                    //     // console.log('Ширина блока:', topPic.current.clientWidth)
                    //     // console.log('Высота блока:', topPic.current.clientHeight)
                    //     // // console.log('Координата конца блока по X относительно документа:', rect.x + pageXOffset + topPic.current.clientWidth)
                    //     // // console.log('Координата конца блока по Y относительно документа:', rect.y + pageYOffset + topPic.current.clientHeight)
                    //     // console.log('Позиция курсора по X', e.pageX)
                    //     // console.log('Позиция курсора по Y', e.pageY)
                    //
                    //     let xBlockPercent = Math.abs(Math.round((e.pageX - (rect.x + pageXOffset))/(topPic.current.clientWidth / 100)))
                    //     let yBlockPercent = Math.abs(Math.round((e.pageY - (rect.y + pageYOffset))/(topPic.current.clientHeight / 100)))
                    //     // console.log('Позиция курсора по X в % относительно блока', xBlockPercent)
                    //     // console.log('Позиция курсора по Y в % относительно блока', yBlockPercent)
                    //
                    //
                    //     topPic.current.style.clipPath = `circle(230px at ${xBlockPercent}% ${yBlockPercent}%);`
                    // }}

                />
                <div className={classes.hover}
                     onMouseMove={(e) => updateCursor(e, topPic, interactiveBlock)}
                     onMouseOut={(e) => {
                         topPic.current.style['clip-path'] = `circle(0 at 0 0)`
                     }}/>
            </div>

        </div>
    )
}