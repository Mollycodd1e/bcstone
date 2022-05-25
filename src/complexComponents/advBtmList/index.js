import React, {useContext, useEffect} from "react";
import {advantagesBtm} from "../../data/advantages";
import {AdvBtmItem} from "../../components/AdvBtmItem";
import {Context} from "../../library";
import {sizes} from "../../data/sizes";

export const AdvBtmList = () => {
    const [width, height] = useContext(Context);
    const isDesktop = width >= sizes.widthNotebook;

    return advantagesBtm.map((el, i) => {
        const {img, imgDesk, signature, title, reason, extraText} = el;
            return (
                <AdvBtmItem key={i} img={isDesktop ? imgDesk : img} signature={signature} title={title} reason={reason} isDesktop={isDesktop} mode={i+1} extraText={extraText}/>
            )
        }
    )
}