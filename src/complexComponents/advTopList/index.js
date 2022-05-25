import React from "react";
import {advantagesTop} from "../../data/advantages";
import {AdvTopItem} from "../../components/AdvTopItem";

export const advTopList = () => {
    return advantagesTop.map((el, i) => {
        const {icon, code, text, title} = el;
            return (
                <AdvTopItem key={i} icon={icon} code={code} text={text} title={title} />
            )
        }
    )
}