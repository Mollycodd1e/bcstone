import React, {useContext} from "react";
import {offices} from "../../data/offices";
import MapType2 from "../../components/MapType2";
import {Context} from "../../library";

export const locationsMaps = (setIsPopUpVisible) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {width, height} = useContext(Context);
    return offices[1].data.map((el, i) => {
        const {id, lat, lng} = el;
            return (
                <MapType2 key={i} id={id} lat={lat} lng={lng} width={width} height={height} setIsPopUpVisible={setIsPopUpVisible} />
            )
        }
    )
}