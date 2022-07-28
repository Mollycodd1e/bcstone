import {
    heroIcon_1,
    heroIcon_2,
    heroIcon_3,
    heroIcon_4,
    stoneKurskayaLogo,
    stoneLeninskiyLogo,
    stoneSavelLogo,
    stoneTowersLogo
} from '../img/svgInlineImg';

import img_stoneTwrsBuilding from '../img/stoneTwrsBuilding.jpg';
import img2x_stoneTwrsBuilding from '../img/stoneTwrsBuilding@2x.jpg';
import imgMob_stoneTwrsBuilding from '../img/stoneTwrsBuildingMob.jpg';
import img2xMob_stoneTwrsBuilding from '../img/stoneTwrsBuildingMob@2x.jpg';

import img_stoneSav from '../img/stoneSav.jpg';
import img2x_stoneSav from '../img/stoneSav@2x.jpg';
import imgMob_stoneSav from '../img/stoneSavMob.jpg';
import img2xMob_stoneSav from '../img/stoneSavMob@2x.jpg';

import img_stoneTwrsOffice from '../img/stoneTwrsOffice.jpg';
import img2x_stoneTwrsOffice from '../img/stoneTwrsOffice@2x.jpg';
import imgMob_stoneTwrsOffice from '../img/stoneTwrsOfficeMob.jpg';
import img2xMob_stoneTwrsOffice from '../img/stoneTwrsOfficeMob@2x.jpg';

import img_stoneKur from '../img/stoneKur.jpg';
import img2x_stoneKur from '../img/stoneKur@2x.jpg';
import imgMob_stoneKur from '../img/stoneKurMob.jpg';
import img2xMob_stoneKur from '../img/stoneKurMob@2x.jpg';

import img_stoneLen from '../img/stoneLen.jpg';
import img2x_stoneLen from '../img/stoneLen@2x.jpg';
import imgMob_stoneLen from '../img/stoneLenMob.jpg';
import img2xMob_stoneLen from '../img/stoneLenMob@2x.jpg';
import {brandColors} from "./brandColors";

export const contacts = {
    OpenPopupBtn: {
        text: 'Оставить заявку',
    },
}

export const hero = {
    firstBlock: {
        text: `Аренда или продажа <br>премиальной офисной <br>недвижимости`,
    },
    secondBlock: [
        {
            icon: heroIcon_1,
            textTop: `до 45%`,
            textBtm: `Доходность`,
        },
        {
            icon: heroIcon_2,
            textTop: `6 лет`,
            textBtm: `Окупаемость`,
        },
        {
            icon: heroIcon_3,
            textTop: `от 6 млн руб.`,
            textBtm: `Вложения`,
        },
        {
            icon: heroIcon_4,
            textTop: `STONE HEDGE`,
            textBtm: `Девелопер`,
        },
    ],
}

export const cardsTitle = {
    text: `Проекты <br class="brMobile">списком/на карте`,
    textMap: `Аренда или продажа бизнес-центров STONE ↓`,
}

export const moreInfoBtn = {
    text: 'Оставить заявку',
    textLink: 'Подробнее',
}

const entireBuilding = `Здание целиком`;
const officesAndRetail = `Офисы и ритейл`;
const justOffices = `Офисы`;

export const cards = [
    {
        alt: 'Stone Towers - здание целиком',
        logo: stoneTowersLogo,
        img: img_stoneTwrsBuilding,
        img2x: img2x_stoneTwrsBuilding,
        imgMob: imgMob_stoneTwrsBuilding,
        img2xMob: img2xMob_stoneTwrsBuilding,
        extraInfo: '',
        info: {
            title: entireBuilding,
            list: [
                `Отдельно стоящее <br>здание`,
                `4 минуты от м. «Савеловская», <br>«Белорусская»`,
                `Общая площадь 14 000 м<sup>2</sup>`,
                `Готовность: III кв. 2022`,
            ],
        },
        brandColor: {
            first: brandColors.towers.first,
            second: brandColors.towers.second,
            text: brandColors.towers.text,
        },
        link: 'https://stone-tws.ru/tower_a.html',
    },
    {
        alt: 'Stone Савёловская',
        logo: stoneSavelLogo,
        img: img_stoneSav,
        img2x: img2x_stoneSav,
        imgMob: imgMob_stoneSav,
        img2xMob: img2xMob_stoneSav,
        extraInfo: '',
        info: {
            title: officesAndRetail,
            list: [
                `Бизнес-центр. Класс А`,
                `7 минут от м. «Савеловская», <br>500 метров от ТТК`,
                `От 8 до 20 000 м<sup>2</sup>`,
                `Готовность: 2024`,
            ],
        },
        brandColor: {
            first: brandColors.savelovskaya.first,
            second: brandColors.savelovskaya.second,
            text: brandColors.savelovskaya.text,
        },
        link: 'https://stone-svl.ru/',
    },
    {
        alt: 'Stone Towers - офисы',
        logo: stoneTowersLogo,
        img: img_stoneTwrsOffice,
        img2x: img2x_stoneTwrsOffice,
        imgMob: imgMob_stoneTwrsOffice,
        img2xMob: img2xMob_stoneTwrsOffice,
        extraInfo: '',
        info: {
            title: officesAndRetail,
            list: [
                `Премиальный офисный <br>квартал`,
                `4 минут от м. «Савеловская», <br>«Белорусская»`,
                `От 30 до 34 500 м<sup>2</sup>`,
                `Готовность: 2022`,
            ],
        },
        brandColor: {
            first: brandColors.towers.first,
            second: brandColors.towers.second,
            text: brandColors.towers.text,
        },
        link: 'https://stone-tws.ru/',
    },
    {
        alt: 'Stone Курская',
        logo: stoneKurskayaLogo,
        img: img_stoneKur,
        img2x: img2x_stoneKur,
        imgMob: imgMob_stoneKur,
        img2xMob: img2xMob_stoneKur,
        extraInfo: 'Tower A',
        info: {
            title: entireBuilding,
            list: [
                `Премиальное офисное здание`,
                `5 минут от м. «Курская»`,
                `Общая площадь 10 000 м<sup>2</sup>`,
                `Готовность: 2025`,
            ],
        },
        brandColor: {
            first: brandColors.kurskaya.first,
            second: brandColors.kurskaya.second,
            text: brandColors.kurskaya.text,
        },
        link: '',
    },
    {
        alt: 'Stone Ленинский',
        logo: stoneLeninskiyLogo,
        img: img_stoneLen,
        img2x: img2x_stoneLen,
        imgMob: imgMob_stoneLen,
        img2xMob: img2xMob_stoneLen,
        extraInfo: 'Скоро в продаже',
        info: {
            title: justOffices,
            list: [
                `Премиальный бизнес-центр`,
                `4 минуты от метро<br>«Лениниский проспект»<br>и «Площадь Гагарина»`,
                `От 70 м<sup>2</sup>`,
                `Готовность: 2025`,
            ],
        },
        brandColor: {
            first: brandColors.leninskiy.first,
            second: brandColors.leninskiy.second,
            text: brandColors.leninskiy.text,
        },
        link: '',
    },
    {
        alt: 'Stone Ленинский',
        logo: stoneLeninskiyLogo,
        img: img_stoneLen,
        img2x: img2x_stoneLen,
        imgMob: imgMob_stoneLen,
        img2xMob: img2xMob_stoneLen,
        extraInfo: 'Скоро в продаже',
        info: {
            title: justOffices,
            list: [
                `Премиальный бизнес-центр`,
                `4 минуты от метро<br>«Лениниский проспект»<br>и «Площадь Гагарина»`,
                `От 70 м<sup>2</sup>`,
                `Готовность: 2025`,
            ],
        },
        brandColor: {
            first: brandColors.leninskiy.first,
            second: brandColors.leninskiy.second,
            text: brandColors.leninskiy.text,
        },
        link: '',
    },

]