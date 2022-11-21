import {cards} from "../../data/helper";
import {C_RegularCard} from "../../components/c_RegularCard";
import React from "react";

export const CC_regularCards = (className, isBtnClose, onBtnCloseClick, onCardCloseClick, setIsPopUpVisible, isMapMode, data) => {
    const {projects} = data;
    const rCards = projects.map((card, i) => <C_RegularCard
            isMapMode={isMapMode}
            key={card.name + i}
            logo={card.logo.src}
            alt={card.name}
            img={card.img.src}
            img2x={card.img.src}
            imgMob={card.img.src}
            img2xMob={card.img.src}
            extraInfo={card.extraInfo}
            title={card.name}
            list={card.descriptionList}
            bgColorFirst={card.brandColor.first}
            bgColorSecond={card.brandColor.first}
            textColor={card.brandColor.text}
            className={className}
            isBtnClose={isBtnClose}
            onBtnCloseClick={onBtnCloseClick}
            link={card.link}
            i={i}
            onCardCloseClick={onCardCloseClick}

            // setIsPopUpVisible={setIsPopUpVisible}
        />
    // const rCards = cards.map((card, i) => <C_RegularCard
    //         isMapMode={isMapMode}
    //         key={card.alt + i}\shenty
    //         logo={card.logo}
    //         alt={card.alt}
    //         img={card.img}
    //         img2x={card.img2x}
    //         imgMob={card.imgMob}
    //         img2xMob={card.img2xMob}
    //         extraInfo={card.extraInfo}
    //         title={card.info.title}
    //         list={card.info.list}
    //         bgColorFirst={card.brandColor.first}
    //         bgColorSecond={card.brandColor.second}
    //         textColor={card.brandColor.text}
    //         className={className}
    //         isBtnClose={isBtnClose}
    //         onBtnCloseClick={onBtnCloseClick}
    //         link={card.link}
    //         setIsPopUpVisible={setIsPopUpVisible}
    //         data={data}
    //     />
    );
    return rCards;
}