import Image from "next/image";
import React from "react";
import {offices} from "../../data/offices";
import {contentOfficesMaxMobSizes} from "../../data/constants";

export const purposesRenders = () => {
    return offices[2].data.map((el, i) => {
        const {img} = el;
            return (
                <Image
                    key={i}
                    src={img}
                    layout="intrinsic"
                    width={contentOfficesMaxMobSizes.width}
                    height={contentOfficesMaxMobSizes.height}
                />
            )
        }
    )
}