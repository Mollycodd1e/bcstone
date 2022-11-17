import classes from './style.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {C_MainMarker} from "../c_MainMarker";
import useSupercluster from "use-supercluster";

export const C_BasicMap = ({initialSlide, setInitialSlide, setIsCardVisible, isCardVisible, data, clustersProjects, setClustersProjects, shownSliders, setShownSliders}) => {

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
        options: { radius: parseFloat(map_settings.clusterRadius), maxZoom: parseFloat(map_settings.maxZoom) }
    });

        return (
            <div className={classes.wrapMap}>
                {points.length !== 0 ? <GoogleMapReact
                    defaultCenter={{lat: parseFloat(map_settings.lat), lng: parseFloat(map_settings.lng)}}
                    defaultZoom={parseFloat(map_settings.defaultZoom)}
                    options={
                        {
                            styles: mapStyles.styles,
                            minZoom: parseFloat(map_settings.minZoom),
                            maxZoom: parseFloat(map_settings.maxZoom),
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
                                    <C_MainMarker
                                        key={`cluster-${project.id}`}
                                        lat={latitude}
                                        lng={longitude}
                                        onClick={() => {
                                            // приближение при нажатии на кластер
                                            // const expansionZoom = Math.min(
                                            //     supercluster.getClusterExpansionZoom(project.id),
                                            //     20
                                            // );
                                            // mapRef.current.setZoom(expansionZoom);
                                            // mapRef.current.panTo({ lat: latitude, lng: longitude });

                                            // получает данные карточек нажатого кластера
                                           
                                            setClustersProjects(supercluster.getLeaves(project.id));
                                            setIsCardVisible(prev => !prev);


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
                                    onClick={(evt) => {
                                        setInitialSlide(prev => project.properties.order - 1);
                                        setShownSliders([project.properties.order - 1]);
                                        evt.target != [project.properties.order - 1] ? setIsCardVisible(prev => !prev) : null;
                                    }}
                                    imgDefault={project.properties.defaultPin}
                                    imgActive={project.properties.activePin}
                                    isPinActive={isCardVisible && (project.properties.order - 1 === shownSliders[0]) }
                                />
                            )
                        })
                    }

                </GoogleMapReact> : null}
            </div>
        );
}