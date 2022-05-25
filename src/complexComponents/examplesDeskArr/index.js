import React from "react";
import {exampleProjectsDesktop} from "../../data/examples";
import {ExamplesDesktopItem} from "../../components/ExamplesDesktopItem";

export const examplesDeskArr = () => {
    return exampleProjectsDesktop.map((el, i) => {
        const {img, logo, type, year, code} = el;
            return (
                <ExamplesDesktopItem
                    key={i}
                    imgBefore={img[0]}
                    imgAfter={img[1]}
                    logo={logo}
                    typeBefore={type[0]}
                    typeAfter={type[1]}
                    yearBefore={year[0]}
                    yearAfter={year[1]}
                    code={code}
                />
            )
        }
    )
}