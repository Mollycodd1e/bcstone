import classes from './style.module.scss';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {C_MainMarker} from "../c_MainMarker";

export const C_BasicMap = ({initialSlide, setInitialSlide, setIsCardVisible, isCardVisible, data}) => {

        return (
            <div className={classes.wrapMap}>
                {data.projects.length !== 0 ? <GoogleMapReact
                    defaultCenter={{lat: 55.75, lng: 37.615}}
                    defaultZoom={12}
                    options={{styles: mapStyles.styles}}
                >
                    {
                        data.projects.filter(el => el.isShownOnMap).map((project, i) => {
                            return (
                                <C_MainMarker
                                    key={i}
                                    lat={project.coordinates.lat}
                                    lng={project.coordinates.lng}
                                    onClick={() => {
                                        setInitialSlide(prev => project.order - 1);
                                        setIsCardVisible(prev => true)
                                    }}
                                    imgDefault={project.pin.default.src}
                                    imgActive={project.pin.active.src}
                                    isPinActive={isCardVisible && project.order - 1 === initialSlide}
                                />
                            )
                        })
                    }

                </GoogleMapReact> : null}
            </div>
        );
}