import classes from './style.module.scss';
import React, {useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {C_MainMarker} from "../c_MainMarker";
import useSupercluster from "use-supercluster";

export const C_BasicMap = ({initialSlide, setInitialSlide, setIsCardVisible, isCardVisible, data}) => {
    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(12);

    const points = data.projects.filter(el => el.isShownOnMap).map(project => {
        return ({
            type: "Feature",
            properties: {
                cluster: false,
                order: project.order,
                defaultPin: project.pin.default.src,
                activePin: project.pin.active.src,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    parseFloat(project.coordinates.lat),
                    parseFloat(project.coordinates.lng)
                ]
            }
        })
    });

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 }
    });

        return (
            <div className={classes.wrapMap}>
                {points.length !== 0 ? <GoogleMapReact
                    defaultCenter={{lat: 55.75, lng: 37.615}}
                    defaultZoom={12}
                    options={{styles: mapStyles.styles}}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => {
                        mapRef.current = map;
                    }}
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom);
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat
                        ]);
                    }}
                >
                    {
                        points.map((project, i) => {
                            const [ latitude, longitude ] = project.geometry.coordinates;
                            return (
                                <C_MainMarker
                                    key={i}
                                    lat={latitude}
                                    lng={longitude}
                                    onClick={() => {
                                        setInitialSlide(prev => project.properties.order - 1);
                                        setIsCardVisible(prev => true)
                                    }}
                                    imgDefault={project.properties.defaultPin}
                                    imgActive={project.properties.activePin}
                                    isPinActive={isCardVisible && project.properties.order - 1 === initialSlide}
                                />
                            )
                        })
                    }

                </GoogleMapReact> : null}
            </div>
        );
}