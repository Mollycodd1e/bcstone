import kur_default from '../img/kur_default.svg';
import kur_active from '../img/kur_active.svg';
import kur_mini from '../img/kur_mini.svg';

import sav_default from '../img/sav_default.svg';
import sav_active from '../img/sav_active.svg';
import sav_mini from '../img/sav_mini.svg';

import tow_default from '../img/tow_default.svg';
import tow_active from '../img/tow_active.svg';
import tow_mini from '../img/twr_mini.svg';

import len_default from '../img/len_default.svg';
import len_active from '../img/len_active.svg';
import {coordinates} from "./constants";

export const mapType1Pins = [
    {
        lat: coordinates.towers.lat,
        lng: coordinates.towers.lng,
        id: 0,
        iconDefault: tow_default,
        iconActive: tow_active,
        iconSecondary: tow_mini,
    },
    {
        lat: coordinates.savelovskaya.lat,
        lng: coordinates.savelovskaya.lng,
        id: 1,
        iconDefault: sav_default,
        iconActive: sav_active,
        iconSecondary: sav_mini,
    },
    {
        lat: coordinates.kurskaya.lat,
        lng: coordinates.kurskaya.lng,
        id: 3,
        iconDefault: kur_default,
        iconActive: kur_active,
        iconSecondary: kur_mini,
    },
    {
        lat: coordinates.leninskiy.lat,
        lng: coordinates.leninskiy.lng,
        id: 4,
        iconDefault: len_default,
        iconActive: len_active,
        iconSecondary: tow_mini,
    },
]