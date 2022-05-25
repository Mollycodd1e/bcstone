import offices_11 from '../img/ofiices_11@2x.jpg';
import offices_12 from '../img/ofiices_12@2x.jpg';
import offices_13 from '../img/ofiices_13@2x.jpg';
import offices_14 from '../img/ofiices_14@2x.jpg';
import offices_15 from '../img/ofiices_15@2x.jpg';
import offices_16 from '../img/ofiices_16@2x.jpg';
import offices_31 from '../img/ofiices_31@2x.jpg';
import offices_32 from '../img/ofiices_32@2x.jpg';
import offices_33 from '../img/ofiices_33@2x.jpg';
import offices_34 from '../img/ofiices_34@2x.jpg';
import {coordinates} from "./constants";

export const offices = [
    {
        type: 'formats',
        mainTitle: 'Все форматы',
        mainTitleMobile: 'Форматы',
        icon: `<svg height=\"21\" viewBox=\"0 0 28 21\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#7e7e7e\" transform=\"translate(-319 -1072)\"><g fill=\"none\"><path d=\"m319 1072h13v21h-13z\" stroke=\"none\"/><path d=\"m319.5 1072.5h12v20h-12z\" fill=\"none\"/></g><g fill=\"none\" transform=\"matrix(0 1 -1 0 347 1080)\"><path d=\"m0 0h13v21h-13z\" stroke=\"none\"/><path d=\"m.5.5h12v20h-12z\" fill=\"none\"/></g></g></svg>`,
        data: [
            {
                title: 'Офисные здания целиком',
                img: offices_11,
            },
            {
                title: 'Видовые офисные этажи',
                img: offices_12,
            },
            {
                title: 'Офисы в мелкую нарезку',
                img: offices_13,
            },
            {
                title: 'Клиентские офисы с отдельным входом',
                img: offices_14,
            },
            {
                title: 'Торговые помещения с ремонтом',
                img: offices_15,
            },
            {
                title: 'Ритейл с отдельным входом',
                img: offices_16,
            },
        ],

    },
    {
        type: 'locations',
        mainTitle: 'В лучших локациях',
        mainTitleMobile: 'Локация',
        icon: `<svg height=\"21.299\" viewBox=\"0 0 15.513 21.299\" width=\"15.513\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m4510 1507.4 7.822-20.3 6.691 20.3-6.691-5.2z\" fill=\"none\" stroke=\"#7e7e7e\" stroke-linejoin=\"round\" transform=\"translate(-4509.5 -1486.599)\"/></svg>`,
        data: [
            {
                title: 'STONE Towers',
                lat: coordinates.towers.lat,
                lng: coordinates.towers.lng,
                id: 0,
                type: 'Премиальный офисный квартал',
                info: [
                    {
                        text: '4 мим. м. «Савеловская»',
                        metroLines: [
                            9,
                            11,
                        ],
                    },
                    {
                        text: '12 мин. м. «Белорусская»',
                        metroLines: [
                            2,
                            5,
                        ],
                    },
                ],
            },
            {
                title: 'STONE Савеловская',
                lat: coordinates.savelovskaya.lat,
                lng: coordinates.savelovskaya.lng,
                id: 1,
                type: 'Бизнес-центр. Класс А',
                info: [
                    {
                        text: '4 мим. м. «Савеловская»',
                        metroLines: [
                            9,
                            11,
                        ],
                    },
                    {
                        text: '12 мин. м. «Марьина Роща»',
                        metroLines: [
                            10,
                        ],
                    },
                ],
            },
            {
                title: 'STONE Курская',
                lat: coordinates.kurskaya.lat,
                lng: coordinates.kurskaya.lng,
                id: 3,
                type: 'Премиальное офисное здание',
                info: [
                    {
                        text: '10 мин. м. «Курская»',
                        metroLines: [
                            5,
                            3,
                        ],
                    },
                    {
                        text: '10 мин. м. «Чкаловкая»',
                        metroLines: [
                            10,
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'purposes',
        mainTitle: 'Для вас',
        mainTitleMobile: 'Для вас',
        icon: `<svg height=\"20.114\" viewBox=\"0 0 27 20.114\" width=\"27\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" stroke=\"#7e7e7e\" transform=\"translate(-567 -1045.886)\"><g><rect height=\"17\" rx=\"1\" stroke=\"none\" width=\"27\" x=\"567\" y=\"1049\"/><rect fill=\"none\" height=\"16\" rx=\".5\" width=\"26\" x=\"567.5\" y=\"1049.5\"/></g><path d=\"m4585.466 1048.049v-2.614h8.119v2.614\" stroke-linejoin=\"round\" transform=\"translate(-4009 .951)\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m579 1054h4v3h-4z\" stroke=\"none\"/><path d=\"m579.5 1054.5h3v2h-3z\" fill=\"none\"/></g><path d=\"m4576.687 1056.161s6.738 3.29 13.216 3.29 12.7-3.29 12.7-3.29\" transform=\"translate(-4009)\"/></g></svg>`,
        data: [
            {
                title: 'С целью перепродажи',
                img: offices_31,
                text: '1 Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации.',
            },
            {
                title: 'Для сдачи в аренду',
                img: offices_32,
                text: '2 Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации.',
            },
            {
                title: 'Для собственного бизнеса',
                img: offices_33,
                text: '3 Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации.',
            },
            {
                title: 'Для арендаторов',
                img: offices_34,
                text: '4 Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации.',
            },
        ],
    },
]