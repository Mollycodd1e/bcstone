import classNames from 'classnames';
import { C_Description } from '../../components/c_Description';
import classes from './style.module.scss';
// import Image from 'next/image';
// import { sizes } from '../../data/sizes';
// import {Context} from "../../library";
// import {useContext, useEffect, useState} from "react";

export const S_Picture = ({className, src, description}) => {
    
    const cls = classNames(classes.root, {[className]: className});
    // const [width, height] = useContext(Context);

    // let retina;

    // if (typeof window !== "undefined") {
    //     retina = window.devicePixelRatio > 1;
    // }

    // const [isWebp, setIsWebp] = useState(false);

    // useEffect(() => {
    //     setIsWebp(false);
    //     function canUseWebp() {
    //         // Создаем элемент canvas
    //         let elem = document.createElement('canvas');
    //         // Приводим элемент к булеву типу
    //         if (!!(elem.getContext && elem.getContext('2d'))) {
    //             // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
    //             setIsWebp(true);
    //             return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    //         }
    //         // Иначе Webp не используем
    //         return false;
    //     };
    //     canUseWebp();
    // },[])
  
    return (
        <div className={cls}>
          <div className={classes.image_wrapper}>
            <picture>
              <source type="image/webp" media="(min-width: 1000px)" srcSet={src} />
              <source media="(min-width: 1000px)" srcSet={src} />
              <source type="image/webp" srcSet={src}/>
              <img src={src} srcSet={src} alt="Фото новости про бизнес-центр"/>
            </picture>
            {/* {width < sizes.widthTabletMd ?
              <Image src={isWebp ? `${retina ? src : src}` : `${retina ? src : src}`} layout='fill' alt="Фото новости про бизнес-центр"/>
            :
              <Image src={isWebp ? `${retina ? src : src}` : `${retina ? src : src}`} layout='fill' alt="Фото новости про бизнес-центр"/>
            } */}
          </div>
          <C_Description description={description} />
        </div>
    )
}