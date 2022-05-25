import React from "react";
import {offices} from "../../data/offices";
import {FormatRender} from "../../components/FormatRender";

export const formatsRenders = () => {
    return offices[0].data.map((el, i) => {
        const {img} = el;
            return (
                <FormatRender key={i} img={img} />
            )
        }
    )
}