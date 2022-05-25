import {cards} from "../../data/helper";
import {RegularCard} from "../../components/RegularCard";
import React from "react";

export const regularCards = (className, isBtnClose, onBtnCloseClick, setIsPopUpVisible) => {
    const rCards = cards.map((card, i) => <RegularCard
            key={card.alt + i}
            logo={card.logo}
            alt={card.alt}
            img={card.img}
            img2x={card.img2x}
            imgMob={card.imgMob}
            img2xMob={card.img2xMob}
            extraInfo={card.extraInfo}
            title={card.info.title}
            list={card.info.list}
            bgColorFirst={card.brandColor.first}
            bgColorSecond={card.brandColor.second}
            textColor={card.brandColor.text}
            className={className}
            isBtnClose={isBtnClose}
            onBtnCloseClick={onBtnCloseClick}
            link={card.link}
            setIsPopUpVisible={setIsPopUpVisible}
        />
    );
    return rCards;
}