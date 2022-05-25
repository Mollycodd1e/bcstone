import React from "react";
import {exampleProjectsMobile} from "../../data/examples";
import {ExamplesMobileItem} from "../../components/ExamplesMobileItem";

export const examplesMobArr = () => {
    return exampleProjectsMobile.map((el, i) => {
        const {img, logo, type, year, code, isLogo, isPromo} = el;
            return (
                <ExamplesMobileItem
                    key={i}
                    img={img}
                    logo={logo}
                    type={type}
                    year={year}
                    code={code}
                    isLogo={isLogo}
                    isPromo={isPromo}
                />
            )
        }
    )
}