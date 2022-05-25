import classes from './style.module.scss';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import {mapType1Pins} from "../../data/mapType1";
import {SecondaryMarker} from "../SecondaryMarker";
import {SecondaryCard} from "../SecondaryCard";
import {sizes} from "../../data/sizes";
import {cards} from "../../data/helper";

class MapType2 extends React.Component {
    static defaultProps = {
        zoom: 13,
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: null,
        };
    }
    render() {
        return (
            <div className={classes.wrapMap}>
                <GoogleMapReact
                    defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                    defaultZoom={this.props.width <= 1200 ? this.props.zoom : 14}
                    options={{styles: mapStyles.styles}}
                >
                    {
                        mapType1Pins.map((pin, i) => {
                            return (
                                <SecondaryMarker
                                    className={classes.SecondaryMarker}
                                    key={i}
                                    lat={pin.lat}
                                    lng={pin.lng}
                                    imgMarker={pin.iconSecondary}
                                    id={pin.id}
                                    isCardDefaultVisible={pin.id === this.props.id}
                                    selectedCard={ () => {
                                        this.setState({
                                                selectedCard: pin.id,
                                            }
                                        )
                                    }}
                                    // link={cards[this.state.selectedCard].link || ""}
                                    setIsPopUpVisible={this.props.setIsPopUpVisible}
                                />
                            )
                        })
                    }
                </GoogleMapReact>
                {
                    this.props.width < sizes.widthNotebook && Number.isInteger(this.state.selectedCard)
                        ? <div className={classes.wrapCard}>
                            <SecondaryCard
                                className={classes.SecondaryCard}
                                logo={cards[this.state.selectedCard].logo}
                                alt={cards[this.state.selectedCard].alt}
                                img={cards[this.state.selectedCard].img}
                                img2x={cards[this.state.selectedCard].img2x}
                                imgMob={cards[this.state.selectedCard].imgMob}
                                img2xMob={cards[this.state.selectedCard].img2xMob}
                                bgColorFirst={cards[this.state.selectedCard].brandColor.first}
                                bgColorSecond={cards[this.state.selectedCard].brandColor.second}
                                textColor={cards[this.state.selectedCard].brandColor.text}
                                isBtnClose={true}
                                onBtnCloseClick={() => this.setState({
                                        selectedCard: undefined,
                                    }
                                )}
                                closeBtnColor={`dark`}
                                link={cards[this.state.selectedCard].link || ""}
                                setIsPopUpVisible={this.props.setIsPopUpVisible}
                            /></div> : null
                }
            </div>
        );
    }
};

export default MapType2;