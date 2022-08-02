import classes from './style.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {C_MainMarker} from "../c_MainMarker";
import useSupercluster from "use-supercluster";

export const C_BasicMap = ({initialSlide, setInitialSlide, setIsCardVisible, isCardVisible, data}) => {

    const {map_settings} = data;
    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(map_settings.defaultZoom);

    const points = data.projects.filter(el => el.isShownOnMap).map(project => {
        return ({
            type: "Feature",
            properties: {
                cluster: false,
                category: project.name,
                order: project.order,
                defaultPin: project.pin.default.src,
                activePin: project.pin.active.src,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    parseFloat(project.coordinates.lng),
                    parseFloat(project.coordinates.lat),
                ]
            }
        })
    });

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 70, maxZoom: 15 }
    });

        return (
            <div className={classes.wrapMap}>
                {points.length !== 0 ? <GoogleMapReact
                    defaultCenter={{lat: parseFloat(map_settings.lat), lng: parseFloat(map_settings.lng)}}
                    defaultZoom={parseFloat(map_settings.defaultZoom)}
                    options={
                        {
                            styles: mapStyles.styles,
                            minZoom: 10,
                            maxZoom: 13
                        }
                    }
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => {
                        mapRef.current = map;
                    }}
                    onChange={({ zoom, bounds }) => {
                        setZoom(zoom)
                        setBounds([
                            bounds.nw.lng,
                            bounds.se.lat,
                            bounds.se.lng,
                            bounds.nw.lat
                        ]);
                    }}
                >
                    {
                        clusters.map((project, i) => {
                            const [ longitude, latitude ] = project.geometry.coordinates;
                            const {
                                cluster: isCluster,
                                point_count: pointCount
                            } = project.properties;


                            if (isCluster) {
                                return (
                                    // <Marker
                                    //     key={`cluster-${project.id}`}
                                    //     lat={latitude}
                                    //     lng={longitude}
                                    // >
                                    //     <div
                                    //         className={classes.clusterMarker}
                                    //         style={{
                                    //             width: `${10 + (pointCount / points.length) * 20}px`,
                                    //             height: `${10 + (pointCount / points.length) * 20}px`
                                    //         }}
                                    //         onClick={() => {
                                    //             const expansionZoom = Math.min(
                                    //                 supercluster.getClusterExpansionZoom(project.id),
                                    //                 20
                                    //             );
                                    //             mapRef.current.setZoom(expansionZoom);
                                    //             mapRef.current.panTo({ lat: latitude, lng: longitude });
                                    //         }}
                                    //     >
                                    //         {pointCount}
                                    //     </div>
                                    // </Marker>

                                    <C_MainMarker
                                        key={`cluster-${project.id}`}
                                        lat={latitude}
                                        lng={longitude}
                                        onClick={() => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(project.id),
                                                20
                                            );
                                            mapRef.current.setZoom(expansionZoom);
                                            mapRef.current.panTo({ lat: latitude, lng: longitude });
                                            // получает данные карточек нажатого кластера
                                            // const clickedCluster = supercluster.getLeaves(project.id);
                                            // console.log('clickedCluster', clickedCluster)
                                        }}
                                        imgDefault={map_settings.defaultPin.src}
                                        imgActive={map_settings.activePin.src}
                                        isPinActive={true}
                                        pointCount={pointCount}
                                    />
                                );
                            }



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