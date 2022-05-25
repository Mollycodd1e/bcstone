import classes from './style.module.scss';
import React, {useContext, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {mapType1Pins} from "../../data/mapType1";
import {MainMarker} from "../MainMarker";

class MapType1 extends React.Component {
    static defaultProps = {
        center: {lat: 55.75, lng: 37.615},
        zoom: 12,
    };

    render() {

        return (
            <div className={classes.wrapMap}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{styles: mapStyles.styles}}
                >
                    {
                        mapType1Pins.map((pin, i) => {
                            return (
                                <MainMarker
                                    key={i}
                                    lat={pin.lat}
                                    lng={pin.lng}
                                    onClick={() => {
                                        this.props.setInitialSlide(prev => pin.id);
                                        this.props.setIsCardVisible(prev => true)
                                    }}
                                    imgDefault={pin.iconDefault}
                                    imgActive={pin.iconActive}
                                    isPinActive={this.props.isCardVisible && pin.id === this.props.initialSlide}
                                />
                            )
                        })
                    }

                </GoogleMapReact>
            </div>
        );
    }
};

export default MapType1;