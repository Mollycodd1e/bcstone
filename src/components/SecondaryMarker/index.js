import classes from './style.module.scss';
import classNames from "classnames";
import Image from 'next/image';
import {Context} from "../../library";
import {sizes} from "../../data/sizes";
import {useContext, useEffect, useState} from "react";
import {SecondaryCard} from "../SecondaryCard";
import {cards} from "../../data/helper";

export const SecondaryMarker = ({
    className,
    imgMarker,
    id,
    isCardDefaultVisible,
    selectedCard,
    setIsPopUpVisible,
}) => {

    const {
        alt,
        logo,
        img,
        img2x,
        imgMob,
        img2xMob,
        brandColor,
        link,
    } = cards[id];

    const [width, height] = useContext(Context);
    const cls = classNames(classes.root, { [className]: className });
    const [isCardVisible, setIsCardVisible] = useState(false);
    useEffect(() => {
        setIsCardVisible(prev => isCardDefaultVisible)
    },[])
    return (
        <div className={cls}>
            <Image
                className={classes.image}
                src={imgMarker}
                layout="fixed"
                height={width >= sizes.widthNotebook ? 40 : 25}
                onClick={() => {
                    setIsCardVisible(true);
                    selectedCard();
                }}
            />
            {
                width >= sizes.widthNotebook && isCardVisible ? <SecondaryCard
                    className={
                        classNames(
                            classes.SecondaryCard,
                            {
                                [classes.cardTwr]: id === 0,
                                [classes.cardSav]: id === 1,
                                [classes.cardKur]: id === 3,
                            })}
                    logo={logo}
                    alt={alt}
                    img={img}
                    img2x={img2x}
                    imgMob={imgMob}
                    img2xMob={img2xMob}
                    bgColorFirst={brandColor.first}
                    bgColorSecond={brandColor.second}
                    textColor={brandColor.text}
                    isBtnClose={true}
                    onBtnCloseClick={() => setIsCardVisible(false)}
                    link={link}
                    setIsPopUpVisible={setIsPopUpVisible}
                /> : null
            }

        </div>
    )
}