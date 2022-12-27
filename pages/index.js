import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import {S_Menu} from "../src/sections/s_Menu";
import {S_Hero} from "../src/sections/s_Hero";
import axios from "axios";
import {S_Top_Commercial} from "../src/sections/s_Top_Сommercial";
import {S_Projects} from "../src/sections/s_Projects";
import {S_About} from "../src/sections/s_About";
import {S_Sales} from "../src/sections/s_Sales";
import {S_FullForm} from "../src/sections/s_FullForm";
import {S_Popup} from "../src/sections/s_Popup";
import classes from "../src/sections/s_Popup/style.module.scss";
import {C_FullForm} from "../src/components/c_FullForm";
import { S_Footer } from "../src/sections/s_Footer";
import { S_Bottom_Commercial} from '../src/sections/s_Bottom_Commercial';
import { S_PressCenter } from '../src/sections/s_PressCenter';
import { convertCompilerOptionsFromJson } from 'typescript';
import { C_SliderVideoPopup } from '../src/components/c_SliderVideoPopup';

// export async function getServerSideProps() {
//     const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
//         headers: {
//             'site-slug': 'stone'
//         }
//     });
//     return {
//         props: {data}, // will be passed to the page component as props
//     }
// }

const mocks = {
    contacts: {
        phone: '+7 (495) 124-45-67',
        mail: 'sales@bc-stone.ru',
        address: 'г. Москва, Бумажный проезд, вл. 19',
        sales: `Отдел продаж по телефону: пн.${'\u00A0'}- пт.: с${'\u00A0'}9:00 до${'\u00A0'}21:00 сб.${'\u00A0'}-${'\u00A0'}вс.:${'\u00A0'}c${'\u00A0'}9:30 до${'\u00A0'}20:00`,
        telegram: '@stone_by_stonehedge'
    },
    copyright: {
        header: `Инвестируйте Выгодно В${'\u00A0'}ликвидную недвижимость`,
        name: 'Политика конфиденциальности',
        author: '© АО «СТОУНХЕДЖ»',
        description: `Содержимое данного сайта (включая размещенную информацию и материалы) охраняется авторским${'\u00A0'}правом (ст. 1271 ГК РФ). Запрещено копирование дизайна настоящего сайта, его структуры и отдельных элементов без предварительного письменного согласия АО «СТОУНХЕДЖ»`
    },
}

const mainPageData = [
    {
        "id": 2,
        "name": "Главная страница",
        "slug": "main_page",
        "logo_title": "Бизнес-центры класса а",
        "titile_description": "Продажа / аренда офисов и ритейла <br/>в Москве у метро",
        "list_description": [
            "Доходность до 40%",
            "Рассрочка 0%",
            "Вложения от 11,6 млн руб.",
            "Офисный девелопер №1 <a href=\"https://realty.rbc.ru/news/6318526d9a794714f4879983\" target=\"_blank\" >по версии РБК</>"
        ],
        "phone": {
            "phone_number_decoration": "+7 (495) 023-10-65",
            "phone_number": "+74950231065"
        },
        "hero_image": {
            "front_img": {
                "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/64/2cedfda78dced222cef684f3905b2a/MJ7tbsIy6BTv657HbXfvTM2QIgGjUxx62oXqMhiT.png",
                "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/64/2cedfda78dced222cef684f3905b2a/MJ7tbsIy6BTv657HbXfvTM2QIgGjUxx62oXqMhiT.webp"
            },
            "back_img": {
                "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/73/14584bc58b95db0acab53efa4d6bb8/eTD1vYsMb3lEIolKXqf2oZ2LAQECfjEdFh34k5OV.png",
                "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/73/14584bc58b95db0acab53efa4d6bb8/eTD1vYsMb3lEIolKXqf2oZ2LAQECfjEdFh34k5OV.webp"
            }
        },
        "nav": [
            {
                "name": "Проекты",
                'anchor': "offers",
                "sub": [
                    {
                        "link": "https://stone-svl.ru/",
                        "name": "Савеловская",
                        "color": "#D5FD01"
                    },
                    {
                        "link": "",
                        "name": "Курская",
                        "color": "#5D6A63"
                    },
                    {
                        "link": "https://stone-len.ru/",
                        "name": "Ленинский",
                        "color": "#43111D"
                    },
                    {
                        "link": "https://stone-tws.ru/",
                        "name": "Towers",
                        "color": "#283380"
                    },
                    {
                        "link": "https://stone-tws.ru/tower_a.html",
                        "name": "Towers | Tower A",
                        "color": "#283380"
                    },
                    {
                        "link": "",
                        "name": "Дмитровская",
                        "color": "#7D5FA3"
                    }
                ]
            },
            {
                "name": "Пресс-центр",
                "anchor": "press-center",
                "sub": []
            },
            {
                "name": "Девелопер",
                "anchor": "developer",
                "sub": []
            },
            {
                "name": "Контакты",
                "anchor": "contacts",
                "sub": []
            }
        ],
        "top_commercial": {
            "config": {
                "shownElements": "3"
            },
            "list": [
                {
                    "title": "Старт продаж! Бизнес-центр Tower D",
                    "content": "Последняя очередь на «Белорусской»",
                    "link": "commercial_1",
                    "color": "#283380",
                    "order": "1"
                },
                {
                    "title": "Старт продаж! STONE Дмитровская",
                    "content": "Реализуется совместно с мэрией Москвы",
                    "link": "commercial_2",
                    "color": "#7D5FA3",
                    "order": "2"
                },
                {
                    "title": "Ход строительства проектов",
                    "content": "Для всех, кто купил или планирует покупку ",
                    "link": "commercial_3",
                    "color": "#E1FD4A",
                    "order": "3"
                }
            ]
        },
        "projects": [
            {
                "name": "Ленинский",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0c/633471f6a6fde5a9e8e017f3239d77/sPftYHeOSSXBe8DqVnUT3Imh4U08NZhttXuRttMw.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0c/633471f6a6fde5a9e8e017f3239d77/sPftYHeOSSXBe8DqVnUT3Imh4U08NZhttXuRttMw.webp"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/bb/f4e507d196788477193a92a3866f1a/Cp88s4b3dgEQC7CCjS79bZAfZpGFbFCuQmy0xe5w.jpg"
                },
                "extraInfo": "",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/d4/026dcb3e3be190f8b1393cddb5fc30/C38fcUsuslk4c1yckz4woWIEPRomvqZcxrLnXQNt.svg"
                },
                "brandColor": {
                    "first": "#43111D",
                    "text": "#FFFFFF"
                },
                "link": "https://stone-len.ru/",
                "descriptionList": [
                    "Ленинский проспект",
                    "4 минуты",
                    "Готовность: 2024",
                    "От 70 м&#178;"
                ],
                "order": "1",
                "coordinates": {
                    "lat": "55.704682",
                    "lng": "37.595046"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/44/5c90ee36cbedb025b5ed544bc7b7cc/9kUVrc5BPrSOk1M6i3aqrEbAzGtIKDGDQ9xNVMRB.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/e3/165bfb618c0f5e9fbb85c7b07b1f7b/BBuSZc55YTytL3aJrrtxkdC4rYYAebLFATW7ZeiD.svg"
                    }
                },
                "isShownOnMap": true
            },
            {
                "name": "Савёловская",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/92/5edce4c7cbe0f5674bcb7c5c8a672b/Ofaox1hghk6Zp96j79VnXyvuN8XB0jfIlwiU5HuO.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/92/5edce4c7cbe0f5674bcb7c5c8a672b/Ofaox1hghk6Zp96j79VnXyvuN8XB0jfIlwiU5HuO.webp"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/42/8a9ac3d0a422c6d6153976fbb44e25/8QePuo3mOa0ofY7HO8DosjLTdZaO5507CzNb0LEk.jpg"
                },
                "extraInfo": "",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b2/c60f9aae1b8c975274290d35946118/Ise0I51L4jSzAyIG8cq4nv5xacOejtcHmRpIWhYY.svg"
                },
                "brandColor": {
                    "first": "#D5FD01",
                    "text": "#2B2C2D"
                },
                "link": "https://stone-svl.ru/",
                "descriptionList": [
                    "Савеловская",
                    "7 минут",
                    "Готовность: 2024",
                    "От 8 до 20&nbsp;000 м&#178;"
                ],
                "order": "2",
                "coordinates": {
                    "lat": "55.79712160928146",
                    "lng": "37.595288881238915"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/e5/891c2ffe03a993dee81ec06e58379c/DlmpTNDzfNbpbYcMyqq42qDDwlGmEyGSgPYGwLje.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/86/c9d378b56ca12dfaba3e8e697a535f/e8vSI0b9kGfO5z7t6Ixd59staUDXdXvGnyQN6ddQ.svg"
                    }
                },
                "isShownOnMap": true
            },
            {
                "name": "Towers",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/17/e25aa43857149c1df733e663eaf90a/kEQtvEXysbyQTTGzpt9RbE607XhJ3YwR6tcOodCr.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/17/e25aa43857149c1df733e663eaf90a/kEQtvEXysbyQTTGzpt9RbE607XhJ3YwR6tcOodCr.webp"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/43/f92aef1db4bb3698f5e7c1bbff9b62/jEA79QxG8kP3gXlgKyMQEdkKDmPQyqxzDukasnMB.jpg"
                },
                "extraInfo": "",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/68/e7d2fe12a03cd1ef792e943e0ecd3f/1vTMp5KlV6b5vgJi40CBKhkLmbJeC8uqCyGYrBVa.svg"
                },
                "brandColor": {
                    "first": "#283380",
                    "text": "#FFFFFF"
                },
                "link": "https://stone-tws.ru/",
                "descriptionList": [
                    "Савеловская",
                    "4 минуты",
                    "Готовность: 2023",
                    "От 30 до 34&nbsp;500 м&#178;"
                ],
                "order": "3",
                "coordinates": {
                    "lat": "55.789752643698705",
                    "lng": "37.58600379646407"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/60/d5faf96999e658fba3e57a74f0af1f/3DytskNrj0K6s7n5KEs5o8isOGvr2CkkmOyIEVVv.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/c5/672d76e3292b5a3596b8f6b77ce648/MrEiZymD9Yj1pk8Mn6jBNoFvlKvlsOQ77So3x3Jl.svg"
                    }
                },
                "isShownOnMap": true
            },
            {
                "name": "Курская",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/5f/f082869ff0a15201b7757607d017db/05LWws4ce6B8VS7suylQWca3xZuA0mnRemLMtJUk.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/5f/f082869ff0a15201b7757607d017db/05LWws4ce6B8VS7suylQWca3xZuA0mnRemLMtJUk.webp"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/00/c08d7ba606d3a6c352851f164bba67/LjAAsp7Q5Ag51zV15o7w0YyrWoujjjSk0X7u8p9u.jpg"
                },
                "extraInfo": "",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/f2/2f563d455ffd753f3531b227c187dc/YDnnhn9JjSq4kWg3XCnwA0RflYy5iwHBLYatWevs.svg"
                },
                "brandColor": {
                    "first": "#5D6A63",
                    "text": "#FFFFFF"
                },
                "link": "",
                "descriptionList": [
                    "Курская",
                    "10 минут",
                    "Готовность: 2023",
                    "15&nbsp;600 м&#178;"
                ],
                "order": "4",
                "coordinates": {
                    "lat": "55.7505572423997",
                    "lng": "37.66671990027102"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/78/87a67eb71f4350466523ee7d7a779c/awO7ebFjoG0p3os8QWQQCL59jNTUSUYd0DTswP7Z.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a1/60f79052f184e71b0a9170078cab63/AXYPY7t0K3Gd2HvCzOx8X2mcn9llIhTDkVQ2KLiZ.svg"
                    }
                },
                "isShownOnMap": true
            },
            {
                "name": "Tower A",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8b/1141042c5008cfb586b64cf5f0d37f/v2wt9HlAAD6n6etavmX05UpounqJX3EMvHVwZ1kW.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8b/1141042c5008cfb586b64cf5f0d37f/v2wt9HlAAD6n6etavmX05UpounqJX3EMvHVwZ1kW.webp"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/ba/170158aee83616a87ca496aee91449/064tWEuhrjhtdH2nFhcfqtcFZpgCgcqf3dJfz3xu.jpg"
                },
                "extraInfo": "Tower A",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/89/ba41d7e9d4fe3637fb85a60af8ff49/7VMJoFEwMd57U4o4T9Kyen0fo9k1zM6jqolhHPR3.svg"
                },
                "brandColor": {
                    "first": "#283380",
                    "text": "#FFFFFF"
                },
                "link": "https://stone-tws.ru/tower_a.html",
                "descriptionList": [
                    "Савеловская",
                    "4 минуты",
                    "Готовность: III кв. 2022",
                    "14&nbsp;000 м&#178;"
                ],
                "order": "5",
                "coordinates": {
                    "lat": "55.789752643698705",
                    "lng": "37.58600379646407"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/4c/1a72496c5d77458dd3163d620167ab/QFvH4i50SklKiBgqY58MZNJWaEBglnlOuI6tIOfS.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/ad/142c2b6cb2bba5c3567a247d9e4fbc/Qw7i3BrfbKvWumhClZDzpQIN3p9GkcSoQT2FLFzZ.svg"
                    }
                },
                "isShownOnMap": false
            },
            {
                "name": "STONE Дмитровская",
                "img": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a3/b1864303ad6641112955abf9aacf11/YYVSMYUzrrkUSXlNsg03LGrhTJhDuGhKhaOMYnyA.jpg"
                },
                "img_not_retina": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/df/d165435f1b447567dfd0fb27f6db32/AN1muY0w9nhlQyHn83VQ4GmXiPJ0WJxbFZL4tPm2.jpg"
                },
                "extraInfo": "",
                "logo": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/ab/6a58d76893af8090fc3fa845209c6f/tYwntspFH6MxNEGDYQHjZLWrWlLf8lOFPMHzHzHb.svg"
                },
                "brandColor": {
                    "first": "#7D5FA3",
                    "text": "#FFFFFF"
                },
                "link": "",
                "descriptionList": [
                    "Дмитровская",
                    "3 минуты",
                    "Готовность: 2026",
                    "От 45&nbsp;м&#178;"
                ],
                "order": "6",
                "coordinates": {
                    "lat": "55.808417",
                    "lng": "37.576070"
                },
                "pin": {
                    "default": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/b69c5d5575fd2885bf258184346c12/erEbElr4ZAjlVwFl5WPGWf1kdjfrdPd4mwUEaUnH.svg"
                    },
                    "active": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/85/f081caefbfb101c3dfda3b0c64a452/VOZlltG9IZ0XIFoIrqpKtL3KV7qdSrGvoZcWIyG7.svg"
                    }
                },
                "isShownOnMap": true
            }
        ],
        "map_settings": {
            "defaultZoom": "12",
            "lat": "55.75",
            "lng": "37.615",
            "defaultPin": {
                "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/52/ef10bc82cac5a0fe33fe565c775bfc/k9uoPEOejwQNbslPBhaKxenMtFgdlxqN3tgW0mhi.svg"
            },
            "activePin": {
                "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/7e/c139021f49509828e67fada6f1ecef/QYlSg8ZhfD3H2dph5iUJcdfW7xtQS0vZCYEKL6bK.svg"
            },
            "minZoom": "10",
            "maxZoom": "13",
            "clusterRadius": "70"
        },
        "about_company": {
            "description": "Девелопер коммерческой <br class=\"brMobile\"> и жилой недвижимости классов <br class=\"brMobile\">бизнес, премиум и deluxe в Москве",
            "plans": "За 16 лет на столичном рынке недвижимости девелопер накопил высокий уровень экспертизы и стал признанным лидером офисного рынка. В портфеле компании более 800 000 кв. м реализованных и строящихся объектов: из них 660 000 кв. м — офисные и многофункциональные проекты, как основная специализация развития девелопера. <br><br> В 2019 году запущен бренд офисной недвижимости класса А STONE by Stone Hedge, в рамках которого сегодня реализуются: премиальный квартал STONE Towers в Белорусском деловом районе, бизнес-центры STONE Савеловская и STONE Ленинский, а также офисное здание STONE Курская. Новым проектом девелопера стал бизнес-центр STONE Дмитровская в рамках городской программы КРТ. В 2022 году, согласно рейтингу «РБК Исследования рынков», STONE HEDGE признан лидером в сегменте продаж офисной недвижимости, а также лидирует по объему планируемого ввода в ближайшие годы.",
            "variableContent": {
                "slider": {
                    "isVisible": true,
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/TklqCjqnL79GHtTEdzkcr5y3ySRD2qUhnnc2FdJ2.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/TklqCjqnL79GHtTEdzkcr5y3ySRD2qUhnnc2FdJ2.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/Se1zEX6yYZAu7N5zcOi80LqVyajqdO5mffQndojp.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/Se1zEX6yYZAu7N5zcOi80LqVyajqdO5mffQndojp.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/HSguqs01O9QghwkibJMbU6jUC0bPU4hjWc5G92NL.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/HSguqs01O9QghwkibJMbU6jUC0bPU4hjWc5G92NL.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/cXzgHXR4PEhlvXNx0erhiMqpPIJH1KR4jBRnsJWi.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/3a/57efcacb39c1a0480499d17ada75a0/cXzgHXR4PEhlvXNx0erhiMqpPIJH1KR4jBRnsJWi.webp"
                        }
                    ],
                    "gallery_not_retina": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b4/dfa22d3cde1dc5288efe8f41032599/u8rp7GpS4xdYeWqD5IwzjA3yZxll4SElId1dGNBo.jpg"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b4/dfa22d3cde1dc5288efe8f41032599/msqdGa3CJHZgAFNC8BqRrL6QOTsHSp9HZpkUcw94.jpg"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b4/dfa22d3cde1dc5288efe8f41032599/2VeI9Z4gYKZKMcchN4DXFGIdpA2GNkgFbocAWxKa.jpg"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b4/dfa22d3cde1dc5288efe8f41032599/z3l3PKxUKTAqxBxM6FiE24HOCmSlx3pkdKCFDDAU.jpg"
                        }
                    ]
                },
                "video": {
                    "isVisible": false
                }
            }
        },
        "contacts": {
            "phone": "+7 (495) 124-45-67",
            "phone_tel": "+74951244567",
            "mail": "sales@bc-stone.ru",
            "address": "г. Москва, Бумажный проезд, вл. 19",
            "sales": "Отдел продаж по телефону: пн.${'\\u00A0'}- пт.: с${'\\u00A0'}9:00 до${'\\u00A0'}21:00 сб.${'\\u00A0'}-${'\\u00A0'}вс.:${'\\u00A0'}c${'\\u00A0'}9:30 до${'\\u00A0'}20:00",
            "telegram": "@stone_by_stonehedge"
        },
        "copyright": {
            "title": "Инвестируйте Выгодно В${'\\u00A0'}ликвидную недвижимость",
            "subtitle": "Политика конфиденциальности",
            "owner": "© АО «СТОУНХЕДЖ»",
            "description": "Содержимое данного сайта (включая размещенную информацию и материалы) охраняется авторским${'\\u00A0'}правом (ст. 1271 ГК РФ). Запрещено копирование дизайна настоящего сайта, его структуры и отдельных элементов без предварительного письменного согласия АО «СТОУНХЕДЖ»"
        },
        "sales": [
            {
                "type": "office",
                "name": "Офисы",
                "url": "offices_1",
                "picture": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/58/ed25a5c3bcad15565cd98bd9f202ae/WwaHtg9GvzBlZKnOkmKzm1KZT5W1ZzH9mFKhL1ex.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/58/ed25a5c3bcad15565cd98bd9f202ae/WwaHtg9GvzBlZKnOkmKzm1KZT5W1ZzH9mFKhL1ex.webp"
                }
            },
            {
                "type": "retail",
                "name": "Ритейл",
                "url": "retail_1",
                "picture": {
                    "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/c5/6407029dd1977608445dcf4dceff42/b6LAdakxesXkqRXifE3yz8umf8zU7oIm5efNU9se.jpg",
                    "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/c5/6407029dd1977608445dcf4dceff42/b6LAdakxesXkqRXifE3yz8umf8zU7oIm5efNU9se.webp"
                }
            }
        ],
        "main_form": {
            "title": "Не подобрали <br>подходящее <br>предложение?",
            "titleSuccess": "Готово!",
            "description": "Наш менеджер <br class=\"brMobile\">ответит <br class=\"brTablet\">на ваши вопросы",
            "descriptionSuccess": "Менеджер свяжется с вами <br class=\"brMobile\"><br class=\"brTablet\">в ближайшее время"
        },
        "bottom_commercial": {
            "config": {
                "shownElements": "2"
            },
            "list": [
                {
                    "title": "Около 70% продаж офисов в Москве пришлось на бизнес-центры STONE",
                    "content": "Объем продаж в бизнес-центрах STONE по итогам 11 месяцев 2022 года достиг 50 тыс. кв. м, что составляет порядка 70% от общего объема реализованных площадей класса А на московском офисном рынке",
                    "link": "commercial_4",
                    "order": "1",
                    "pic": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/77/3e737fd48f81a18596e7b77e4af8dc/lExxy00f8Dy3wxrfbHyMhWJvK3job0kJmnQPlNhZ.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/77/3e737fd48f81a18596e7b77e4af8dc/lExxy00f8Dy3wxrfbHyMhWJvK3job0kJmnQPlNhZ.webp"
                    }
                },
                {
                    "title": "В Москве строится почти 1 млн кв. м офисов на продажу",
                    "content": "Крупнейшим по объему заявленных проектов является девелопер STONE HEDGE, в портфеле которого более 357 000 кв. м",
                    "link": "commercial_5",
                    "order": "2",
                    "pic": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/e6/893855ea6b3feefffa37be875cba05/PPA1WyBUeCUgwTjz4sNnwdI8koUsDg2wAxqhSCgt.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/e6/893855ea6b3feefffa37be875cba05/PPA1WyBUeCUgwTjz4sNnwdI8koUsDg2wAxqhSCgt.webp"
                    }
                }
            ]
        },
        "news": {
            "config": {
                "shownElements": "3"
            },
            "list": [
                {
                    "title": "Выиграли конкурс",
                    "content": "Бизнес-центры и офисные кварталы будут реализованы в Белорусском деловом районе и других перспективных Бизнес-районах Москвы",
                    "link": "",
                    "order": "1",
                    "pic": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/75/180bcd0fc3bb61d4482eba9826e72b/JR2juU9uIEw0njyHnbgbMlC7vqTSU0FgLAZxWR4Z.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/75/180bcd0fc3bb61d4482eba9826e72b/JR2juU9uIEw0njyHnbgbMlC7vqTSU0FgLAZxWR4Z.webp"
                    },
                    "date": "20/04"
                },
                {
                    "title": "Победили в премии",
                    "content": "Бизнес-центры и офисные кварталы будут реализованы в Белорусском деловом районе и других перспективных Бизнес-районах Москвы",
                    "link": "",
                    "order": "2",
                    "pic": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/7e/c138cd541e6410bd3a6589eb400924/1c6XWqRHYRJj0QpyancETxBgObmPD5dBXo2ZyN0K.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/7e/c138cd541e6410bd3a6589eb400924/1c6XWqRHYRJj0QpyancETxBgObmPD5dBXo2ZyN0K.webp"
                    },
                    "date": "21/04"
                },
                {
                    "title": "Захватили мир",
                    "content": "Бизнес-центры и офисные кварталы будут реализованы в Белорусском деловом районе и других перспективных Бизнес-районах Москвы",
                    "link": "",
                    "order": "3",
                    "pic": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/b215a6704454e4c1ecb98fd2ef3c8f/DxQRpbbFsXNE291aYjqif28Wc5PcFlW5hurbr6mz.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/b215a6704454e4c1ecb98fd2ef3c8f/DxQRpbbFsXNE291aYjqif28Wc5PcFlW5hurbr6mz.webp"
                    },
                    "date": "22/04"
                }
            ]
        }
    },
    {
        "id": 3,
        "name": "Тест_Летучка",
        "slug": "infoPage1",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "премия",
                            "id": "award"
                        },
                        {
                            "name": "вручение",
                            "id": "presentation"
                        },
                        {
                            "name": "отчет",
                            "id": "report"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Максим Гейзер в рейтинге CRE 100",
                    "description": "100 самых влиятельных персон рынка коммерческой недвижимости 2022/23",
                    "date": "20/04/2022"
                }
            },
            {
                "isShown": true,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/738533053?h=4b93d1e31c",
                    "description": "Видео с вручения премии, которая, несомненно, внесла большой вклад."
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Задача <a href=\"https://stone-svl.ru/\">организации</a>, в особенности же постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений. Повседневная практика показывает, что новая модель организационной деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации дальнейших направлений развития. <br>Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения существенных финансовых и административных условий. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) <br>участие в формировании существенных финансовых и административных условий.Задача организации, в особенности же постоянный количественный рост.Задача организации, в особенности же постоянный количественный ростЗадача организации, в особенности же постоянный количественный рост."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a3/e061cca40c85b1db4e0c27dbe82c3e/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a3/e061cca40c85b1db4e0c27dbe82c3e/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.webp"
                    },
                    "description": "Снимок с вручения премии, которая внесла большой вклад."
                }
            },
            {
                "isShown": true,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a5/f8b6bb70e4a842b5407fd00c58940c/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": true,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/05/ce2f6569135ba35ff28421d1571cab/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/05/ce2f6569135ba35ff28421d1571cab/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://stone-svl.ru/",
                    "text": "Узнать больше"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и проектов",
                    "description": "Одним из первых узнавайте о новостях рынка коммерческой недвижимости",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": true,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Тестовый заголовок STONE HEDGE Тестовый заголовок STONE HEDGE Тестовый заголовок STONE HEDGE "
                }
            },
            {
                "isShown": true,
                "order": "11",
                "type": "text",
                "content": {
                    "text": "Задача <a href=\"https://stone-svl.ru/\">организации</a>, в особенности же постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений. Повседневная практика показывает, что новая модель организационной деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации дальнейших направлений развития. <br>Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения существенных финансовых и административных условий. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение новых предложений. Разнообразный и богатый опыт новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) <br>участие в формировании существенных финансовых и административных условий.Задача организации, в особенности же постоянный количественный рост.Задача организации, в особенности же постоянный количественный ростЗадача организации, в особенности же постоянный количественный рост."
                }
            },
            {
                "isShown": true,
                "order": "13",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/61/f2d5a0aff46b4a4ab57e71dc13dc17/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": true,
                "order": "12",
                "type": "paragraph_header",
                "content": {
                    "text": "Тестовый заголовок STONE HEDGE Тестовый заголовок STONE HEDGE Тестовый заголовок STONE HEDGE "
                }
            }
        ]
    },
    {
        "id": 11,
        "name": "Летучка_ commercial_1",
        "slug": "commercial_1",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "classA",
                            "id": "classA"
                        },
                        {
                            "name": "коммерция ",
                            "id": "kommercial "
                        },
                        {
                            "name": "STONETowers ",
                            "id": "STONETowers "
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Бизнес-центр Tower D",
                    "description": "Последняя очередь одного из самых востребованных офисных кварталов — STONE Towers на «Белорусской»",
                    "date": "16/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/66/af9d38a0e9e29e32508e4e5a2acbec/LoUouilT7pJc3Xd7eTNkRuFJe97LqgVUnnSKRMnh.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/66/af9d38a0e9e29e32508e4e5a2acbec/LoUouilT7pJc3Xd7eTNkRuFJe97LqgVUnnSKRMnh.webp"
                    },
                    "description": "Новый бизнес-центр в составе премиального офисного квартала STONE Towers "
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Tower D — новый бизнес-центр в составе премиального офисного квартала STONE Towers. Отличительной особенностью 19-этажной башни общей наземной площадью 40 тыс. кв. м. станет сквозное двусветное лобби с прямым выходом в центр офисного парка площадью 5 000 кв. м. Новый бизнес-центр — ближайший к ТТК и крупному транспортному хабу «Савеловская», путь пешком до одноименной станции метро займет всего четыре минуты."
                }
            },
            {
                "isShown": true,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Управляющий партнер STONE HEDGE",
                    "name": "Анастасия Малкова",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/da/11f87ed42476ba1df49440ac1c4a35/TTzCfHhzUE9k9reYmvtmvYQvHEdcmRFuV8DtPWzJ.png",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/da/11f87ed42476ba1df49440ac1c4a35/TTzCfHhzUE9k9reYmvtmvYQvHEdcmRFuV8DtPWzJ.webp"
                    },
                    "text": "«Открытие продаж в Tower D стало одним из самых ожидаемых событий на офисном рынке как возможность приобрести качественный офис класса А по стартовым ценам в фактически готовом офисном квартале»"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "К моменту строительной готовности Tower D ее резидентам уже будет доступна вся инфраструктура премиального офисного квартала, основная часть которой будет размещена на первых трех этажах Tower B и Tower С, где уже ведутся фасадные работы."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/ca/2e61cb043b68bcdbf43a652962ec1d/Bkyiyc0ZsEBJXC0pxJuAksdeLQWaALuISZ9NjDmO.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/ca/2e61cb043b68bcdbf43a652962ec1d/Bkyiyc0ZsEBJXC0pxJuAksdeLQWaALuISZ9NjDmO.webp"
                    },
                    "description": "Премиальный офисный квартал STONE Towers "
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Выход проекта в продажу дает возможность инвесторам заработать на росте цены, так как по мере строительства стоимость офисов будет индексироваться, и к моменту ввода бизнес-центра в эксплуатацию рост цены квадратного метра может составить до 40%. Сейчас к продаже доступны лоты площадью от 70 кв. м, а также стрит-ритейл от 22 кв. м, минимальный входной бюджет — от 23 млн руб. Приобрести помещение в Tower D можно с первым взносом 10% и рассрочкой от девелопера. Гибкий график платежей позволит комфортно распределить платежи до окончания строительства бизнес-центра. <br><br>\nДевелопер уже приступил к подготовительным работам для строительства Tower D, на площадке ведутся демонтажные работы. Выход на основные строительные работы на площадке последней очереди квартала запанирован на январь следующего года. \n"
                }
            },
            {
                "isShown": true,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/781760844",
                    "description": "Подготовка строительной площадки Tower D"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Планировочные решения нового бизнес-центра, согласно единым стандартам STONE, соответствуют всем современным требованиям функционального офисного пространства: глубина этажа — до 10 м, высота потолка — от 3,65 м. Увеличенная площадь остекления с возможностью естественного проветривания обеспечит оптимальный уровень инсоляции.<br><br>Офисный квартал STONE Towers состоит из четырех башен общей наземной площадью 106 тыс. кв. м и реализуется в концепции Healthy building, которая подразумевает создание безопасной и продуктивной среды для каждого резидента. Концепция реализуется через улучшенные инженерные системы, качественные строительные материалы, увеличенную площадь остекления и естественное проветривание, а также комплексный подход к благоустройству и элементы биофильного дизайна."
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1e/e8a0df572dd5aac2e053f1a5b523e4/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://stone-tws.ru/",
                    "text": "Узнать больше"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            }
        ]
    },
    {
        "id": 12,
        "name": "Летучка_ commercial_2",
        "slug": "commercial_2",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "classA",
                            "id": "classA"
                        },
                        {
                            "name": "коммерция ",
                            "id": "kommercial "
                        },
                        {
                            "name": "STONEДмитровская",
                            "id": "report"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Бизнес-центр STONE Дмитровская ",
                    "description": "Проект класса А, реализуемый совместно с Мэрией Москвы по программе комплексного развития территорий (КРТ)",
                    "date": "16/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/16/9d19f3ca11d9959710f45b7fa7d2b7/PlK4B2ROQ8QcMPKGlfTpZVLhWRTtNoaDURvYX0zo.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/16/9d19f3ca11d9959710f45b7fa7d2b7/PlK4B2ROQ8QcMPKGlfTpZVLhWRTtNoaDURvYX0zo.webp"
                    },
                    "description": "Бизнес-центр STONE Дмитровская "
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "STONE Дмитровская реализуется совместно с Мэрией г. Москвы в рамках программы комплексного развития территорий и станет первым качественным офисным объектом в сложившемся районе у станции метро «Дмитровская». <br><br>\nРеализация проекта в рамках КРТ — это дополнительная надежность для будущих инвесторов и резидентов: договор с городом предусматривает максимально прозрачные условия и четко зафиксированные сроки строительства. Выход на строительные работы запланирован на 2023 год."
                }
            },
            {
                "isShown": true,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/783619030",
                    "description": "Видео о том, как проекты КРТ повышают экономическую привлекательность района и создают новые точки притяжения"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "В бизнес-центре представлена широкая линейка предложений: от небольших офисов 44 кв. м до представительских этажей 1 610 кв. м. Стоимость квадратного метра в проекте начинается от 235 тыс. руб., минимальная цена лота — 14,4 млн руб."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/95/8c9953fe489d04a90623c1f0284c3d/ibTvGXbIDEiSCDdDXkXGUgMUvw2Z83cYKgXC6LZO.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/95/8c9953fe489d04a90623c1f0284c3d/ibTvGXbIDEiSCDdDXkXGUgMUvw2Z83cYKgXC6LZO.webp"
                    },
                    "description": "Первый качественный бизнес-центр в районе м. «Дмитровская»"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Бизнес-центр расположен в пешей доступности от станций метро «Дмитровская» и МЦД-2 по адресу: Дмитровский проезд, вл. 1г. Проект реализуется по стандартам бренда STONE и предусматривает концепции Healthy building и be CITIZEN, которые отвечают за ментальное здоровье резидентов и создают комфортную среду. Так, в STONE Дмитровская появятся функциональные общественные пространства, развитая инфраструктура и благоустроенная территория."
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/20/ee393d19d1f554c9017bdd50e17146/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a7/9693af54019f34f72ef059d3e3f67c/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a7/9693af54019f34f72ef059d3e3f67c/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Узнать больше"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            }
        ]
    },
    {
        "id": 13,
        "name": "Летучка_ commercial_3",
        "slug": "commercial_3",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "classA",
                            "id": "commerce"
                        },
                        {
                            "name": "коммерция ",
                            "id": "commerce"
                        },
                        {
                            "name": "дневникстроительства",
                            "id": "report"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Динамика строительства бизнес-центров STONE",
                    "description": "Отчет декабря 2022 года",
                    "date": "20/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/780760341",
                    "description": "Ход строительства бизнес-центров STONE "
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Работы на площадках наших объектов ведутся в строгом соответствии с графиком. Мы подготовили для вас новое видео с площадок наших бизнес-центров, чтобы вы могли лично убедиться в высоких темпах строительства.<br><br><b>STONE Towers</b>: началась подготовка площадки последней очереди премиального офисного квартала — Tower D. Приступить к строительству нового бизнес-центра мы планируем уже в январе 2023 г. На второй очереди квартала, в Tower B и Tower C, продолжаются фасадные работы, монтаж лифтового оборудования, ведутся работы по инженерным системам и черновой отделке.<br><br><b>STONE Ленинский</b>: на площадке премиального бизнес-центра ведутся подготовительные работы. Выход на основные строительные работы запланирован на I квартал 2023 г.<br><br><b>STONE Савеловская</b>: продолжается возведение монолита офисных этажей. По башне 1 мы вышли на уровень 7-го этажа, по башне 2 — на уровень 3-го этажа. В ближайшее время планируем приступить к кладочным работам подземной части бизнес-центра.<br><br><b>STONE Курская</b>: на площадке ведутся монолитные работы подземной части, которые мы планируем завершить уже в I квартале 2023 г.<br><br>Под брендом STONE представлена вся линейка предложения, в том числе уникальные для класса А офисы от 44 м² в бюджете от 14,4 млн рублей! Приобрести помещение можно с первым взносом 10% и рассрочкой от девелопера. Возможность возврата НДС уже в начале 2023 года с оплаченных сумм по договору.<br><br>Запишитесь на встречу с экспертом STONE и узнайте детали об инвестиционных предложениях от 235 тыс. руб./м².\n"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": false,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/f3/efeddd435c7778ce27f4cee3343eff/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/f3/efeddd435c7778ce27f4cee3343eff/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.webp"
                    },
                    "description": "Снимок с вручения премии, которая внесла большой вклад."
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fc/e055c4aa3975e090212195c4966cf0/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/03/ec7b632025ed613d60a3cd07ba6ed4/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/03/ec7b632025ed613d60a3cd07ba6ed4/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            }
        ]
    },
    {
        "id": 14,
        "name": "Летучка_ commercial_4",
        "slug": "commercial_4",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "офисы",
                            "id": "offices "
                        },
                        {
                            "name": "classA",
                            "id": "retail"
                        },
                        {
                            "name": "инвестиции",
                            "id": "investments"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Около 70% продаж офисов в Москве пришлось на бизнес-центры STONE",
                    "description": "",
                    "date": "05/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/97/cfe389c222bd5064156d4848b13a7e/IYaQdnXTFp5D2qSSRNt28sEjD2jAZIwS46q3LrmT.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/97/cfe389c222bd5064156d4848b13a7e/IYaQdnXTFp5D2qSSRNt28sEjD2jAZIwS46q3LrmT.webp"
                    },
                    "description": "Премиальный бизнес-центр STONE Ленинский"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Объем продаж в бизнес-центрах STONE по итогам 11 месяцев 2022 года достиг 50 тыс. кв. м, что составляет порядка 70% от общего объема реализованных площадей класса А на московском офисном рынке, по оценке CORE.XP. Планомерный вывод на рынок трех новых объектов и разноформатная линейка офисных площадей от 44 кв. м обеспечили стабильные темпы реализации, уточняют аналитики компании. Помимо высокой активности в январе, рост спроса на офисную недвижимость был зафиксирован в летние месяцы после раскрытия краткосрочных депозитов, когда инвесторы рассматривали альтернативные инструменты для сохранения капитала с оптимальным соотношением безопасности и доходности. <br><br>В начале года девелопер открыл продажи в премиальном бизнес-центре STONE Ленинский, который стал одним из первых за десятилетие качественных офисных объектов на Ленинском и уже к июлю был реализован на 45%. Вторым новым проектом стал бизнес-центр STONE Дмитровская, который расположен в трех минутах пешком от одноименной станции метро и реализуется по городской программе комплексного развития территорий. В конце осени в продажу вышла Tower D — последняя очередь в составе премиального офисного квартала STONE Towers на «Белорусской». Всего в реализации под брендом STONE представлено пять бизнес-центров класса А с широкой линейкой предложения и на разной стадии строительства."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/fe/f65e86b38822cc0248fdf513e06504/bCWLqSOTDF3nT6ZkLVjuwl8iRRHfy4utu9C7S78Q.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/fe/f65e86b38822cc0248fdf513e06504/bCWLqSOTDF3nT6ZkLVjuwl8iRRHfy4utu9C7S78Q.webp"
                    },
                    "description": "Премиальный офисный квартал STONE Towers "
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "«Результаты за отчетный период сопоставимы с объемом продаж за прошлый год за счет увеличения предложения с разноформатной линейкой площадей, — рассказала управляющий партнер STONE HEDGE Анастасия Малкова. — В структуре спроса преобладали инвестиционные сделки со стратегией последующей сдачи в аренду. Клиенты начали диверсифицировать вложения в разные проекты, и те, кто был среди первых покупателей недвижимости STONE, уже оценили рост цены метра в наших бизнес-центрах. При это мы фиксируем спрос не только со стороны инвесторов, но и конечных пользователей, которые рассматривают проекты в высокой стадии строительной готовности, представленные в нашей линейке».<br><br> В разрезе проектов большая часть реализованных площадей относится к премиальному бизнес-центру STONE Ленинский за счет уникальности объекта для престижной локации, а продажи единым объемом приходятся на офисный квартал STONE Towers, где была закрыта статусная сделка по реализации офисного здания Tower A под штаб-квартиру крупного металлургического холдинга, что объясняется вводом объекта в эксплуатацию согласно заявленным срокам в сентябре 2022 года."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/90/435d33993f617c2a61a771809da524/ggEayqH3dbbu5cKSb2o3BiA5fQABjZX1cev5r4v0.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/90/435d33993f617c2a61a771809da524/ggEayqH3dbbu5cKSb2o3BiA5fQABjZX1cev5r4v0.webp"
                    },
                    "description": "Бизнес-центр STONE Савеловская"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "На протяжении всего года STONE HEDGE занимает лидирующую позицию по объему офисов класса А, находящихся в свободной продаже, — общий объем офисных площадей в бизнес-центрах STONE достигает 250 тыс. кв. м. Согласно независимой оценке аналитиков консалтинговой компании CORE.XP, девелопер занимает почти 50% от всего офисного объема класса А на продажу блоками в границах Старой Москвы.<br><br> «Офисный рынок Москвы продолжает испытывать острый дефицит новых проектов. По итогам 2022 года объем площадей, введенных в эксплуатацию, составит всего лишь 0,3 млн кв. м. Количество новых проектов в активной стадии строительства крайне ограничено. Более того, существенный объем реализуется под нужды крупных пользователей. Можно констатировать, что спекулятивное строительство будет сохраняться на минимальных исторических уровнях в среднесрочной перспективе. Таким образом, по мере восстановления деловой активности и реализации отложенного спроса в 2023 году в наиболее выигрышном положении окажутся девелоперы, чьи проекты будут находиться в высокой стадии готовности. Безусловно, одной из таких компаний станет Stone Hedge, обладающая уникальным портфелем проектов в развитых деловых районах Москвы», — подчеркнула старший директор, руководитель департамента офисной недвижимости и направления интегрированных решений для клиентов CORE.XP Ирина Хорошилова."
                }
            },
            {
                "isShown": false,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/738533053?h=4b93d1e31c",
                    "description": "Видео с вручения премии, которая, несомненно, внесла большой вклад."
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/74/a6228869faa9053e53643e011679b8/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/65/dc514be12b66f352de0e664b323c87/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/65/dc514be12b66f352de0e664b323c87/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Узнать больше"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            }
        ]
    },
    {
        "id": 15,
        "name": "Летучка_ commercial_5",
        "slug": "commercial_5",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "офисы",
                            "id": "award"
                        },
                        {
                            "name": "classA",
                            "id": "presentation"
                        },
                        {
                            "name": "коммерция ",
                            "id": "report"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "В Москве строится почти 1 млн кв. м офисов на продажу",
                    "description": "",
                    "date": "24/11/2022"
                }
            },
            {
                "isShown": false,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/738533053?h=4b93d1e31c",
                    "description": "Видео с вручения премии, которая, несомненно, внесла большой вклад."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/e4/f54efef72e1dd9df135bd0969021a2/pRv5qA5zaUsBt0P9Yo0TmbYzLKva2eJ6pIUsYzKC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/e4/f54efef72e1dd9df135bd0969021a2/pRv5qA5zaUsBt0P9Yo0TmbYzLKva2eJ6pIUsYzKC.webp"
                    },
                    "description": "Премиальный офисный квартал STONE Towers "
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "В ноябре 2022 года площадь московских проектов, в рамках которых предлагаются офисы на продажу, достигла 930 000 кв. м, подсчитали аналитики консалтинговой компании NF Group (ex-Knight Frank Russia). Это на 47% больше, чем было в ноябре 2021 года, когда таких офисов предлагалось 630 000 кв. м. Всего в Москве строится порядка 2 млн кв. м офисов, предназначенных для сдачи в аренду и на продажу, причем 930 000 кв. м на продажу — это рекордное количество. <br><br> «В следующие несколько лет мы ожидаем продолжение роста объемов площадей на продажу и выхода новых игроков в этот сегмент», — прогнозирует партнер, директор департамента офисной недвижимости NF Group Мария Зимина.<br><br> Уже сейчас в Москве представлено 13 девелоперских компаний, строящих офисы на продажу. Часть из них специализируется именно на коммерческой недвижимости, а часть относится к крупным застройщикам жилой недвижимости, которые приняли решение о диверсификации бизнеса. Этому могла способствовать городская программа создания мест приложения труда — для получения льгот по оплате стоимости смены вида разрешенного использования (ВРИ) земли для строительства жилья застройщики создают коммерческую инфраструктуру, чтобы наполнить те или иные районы рабочими местами."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/28/b112e63c086c1751ec09168bcc225a/HTHMxVCLow6CLhqtfZ03vlqP6rS2AdBeQxzHdq6x.jpg"
                    },
                    "description": "Дизайн-проект лобби премиального бизнес-центра STONE Ленинский"
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/XXDsb2C2K7Ni8Qjjo2L4aRE9DofHmepuO1hTa9Ea.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/0a/417c947f777cf29abfd10d338151d8/OzUhsLd1oOpaK1Mu8X1Zs8jrqnbk8yV43QUfxgNH.webp"
                        }
                    ],
                    "description": "Фотографии с вручения премии, которая, несомненно, внесла вклад."
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Крупнейшим по объему заявленных проектов является девелопер Stone Hedge, в портфеле которого более 357 000 кв. м, на втором месте ГК «Пионер» с объемом в 152 000 кв. м, третье место занимает MR Group с портфелем в 135 000 кв. м.<br><br> Из 930 000 кв. м проектного объема офисов на продажу 29% уже реализовано, еще 37% продаются. В рамках некоторых проектов доступные для покупки площади выводятся поэтапно, поэтому часть помещений на текущий момент не маркетируется, но выйдет на рынок позже, объясняет Зимина. Доля таких площадей — 34% от общего количества.<br><br> В 2022 году, особенно в III квартале, темпы продаж подобного продукта замедлились, однако снижения цен это не вызвало: цены экспонирования остались не ниже уровня I и II кварталов. <br><br> Средневзвешенная цена продажи офисов класса А за год выросла с 250 000-270 000 рублей за кв. м до 320 000-330 000 рублей за «квадрат», годовой рост составил 20-30%. «Сегмент офисов на продажу начал свое активное развитие два-три года назад, и перегрева цен, который мы наблюдаем на рынке жилой недвижимости, не произошло», — поясняет управляющий партнер NF Group Алексей Новиков."
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/09/a76643db26590e566d562bb2e82fee/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/09/a76643db26590e566d562bb2e82fee/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Узнать больше"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            }
        ]
    },
    {
        "id": 16,
        "name": "Летучка_ offices_1",
        "slug": "offices_1",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "classA",
                            "id": "classA"
                        },
                        {
                            "name": "коммерция ",
                            "id": "commerce"
                        },
                        {
                            "name": "инвестиции",
                            "id": "investment"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Офисы и ритейл как один из самых доходных инструментов инвестирования",
                    "description": "О том, почему стоит вкладывать в офисную недвижимость",
                    "date": "01/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "03",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/f8/d16b7a1a66f110dd48a68f4275ef7a/k5fDOFCAeEvW00CrPkHZ13u5DD9A5uBSTURywlcF.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/f8/d16b7a1a66f110dd48a68f4275ef7a/k5fDOFCAeEvW00CrPkHZ13u5DD9A5uBSTURywlcF.webp"
                    },
                    "description": "Карта офисных проектов STONE"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "paragraph_header",
                "content": {
                    "text": "Стандарты качества STONE"
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "text",
                "content": {
                    "text": "Опыт и экспертиза STONE HEDGE в строительстве, аренде и продаже коммерческих объектов легли в основу бренда премиальной офисной недвижимости STONE. Девелопер сформировал единые стандарты офисных пространств класса А, которые заложены в каждый проект независимо от его масштаба и локации. Концепции бренда STONE стали трендом и ориентиром для многих игроков рынка офисной недвижимости. <br><br> \nКлиенты STONE HEDGE могут быть уверены не только в гарантии качества продукта и сроках реализации, но и в последующем управлении бизнес-центрами STONE. После ввода объекта в эксплуатацию девелопер передает его в профессиональную управляющую компанию, которую курирует сам, тем самым гарантируя высокий уровень сервиса."
                }
            },
            {
                "isShown": true,
                "order": "06",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": true,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/giBXqbJUQQorddJF5OsPQ0JIF0rqo2TOb7fBMBlF.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/giBXqbJUQQorddJF5OsPQ0JIF0rqo2TOb7fBMBlF.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/MKZr0yJzeJdyn5EkTqFc3Tii5PBf49iz3cpDJA3J.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/MKZr0yJzeJdyn5EkTqFc3Tii5PBf49iz3cpDJA3J.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/kSUF6cRzndk8ubuW0lD5jjSjPeqSM5MIubn7SKMM.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/kSUF6cRzndk8ubuW0lD5jjSjPeqSM5MIubn7SKMM.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/WhFsPWStmOqcBRsxRYhpQcJywoUTnoB3xFA81aJs.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/1f/17b2ac2b393bc3765fff2edbd0c1d7/WhFsPWStmOqcBRsxRYhpQcJywoUTnoB3xFA81aJs.webp"
                        }
                    ],
                    "description": "Бизнес-центры класса А от офисного девелопера №1"
                }
            },
            {
                "isShown": true,
                "order": "07",
                "type": "paragraph_header",
                "content": {
                    "text": "Стратегии покупки офисных и торговых помещений"
                }
            },
            {
                "isShown": false,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/738533053?h=4b93d1e31c",
                    "description": "Видео с вручения премии, которая, несомненно, внесла большой вклад."
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "text",
                "content": {
                    "text": "<h3>Для перепродаж</h3>STONE HEDGE, как офисный девелопер №1, ставит в приоритет инвестиционный потенциал своих объектов. В портфеле бренда STONE рост цены достигает 40-50% за счет выстроенной финансовой модели: на старте продаж цена метра формируется от стоимости текущего предложения в локации и заявленного роста для инвесторов. <br><br> Сейчас под брендом STONE представлено 5 проектов класса А на разной стадии строительства и с широкой линейкой площадей. Осенью 2022 года мы вывели в продажи два новых бизнес-центра: STONE Дмитровская, реализуемый в рамках городской программы комплексного развития территорий, и Tower D в составе <a href=\"https://stone-tws.ru/\">STONE Towers</a> на «Белорусской». Важным преимуществом сотрудничества со STONE HEDGE является программа Property service: мы оказываем услуги по дальнейшему управлению недвижимостью, перепродаже или сдаче в аренду. <h3>Для сдачи в аренду</h3> Планировки офисных этажей всех бизнес-центров STONE соответствуют адаптивным планировочным решениям, что позволит резидентам настраивать офисное пространство под потребности своего бизнеса и размещать даже на небольшой площади максимальное количество рабочих мест для сотрудников. Учитывается оптимальная глубина помещений до 10 м и высота потолков от 3,65 м. Увеличенная площадь остекления обеспечит оптимальный уровень инсоляции, а специальное покрытие стекол позволит сохранить температурный баланс.<br><br> \nБизнес-центры STONE строятся в соответствии с концепцией Healthy building, которая реализуется через улучшенные системы вентиляции, круглогодичное кондиционирование, многоступенчатую систему очистки воздуха, оптимальный уровень инсоляции и биофильный дизайн внутри офисных зданий, а также через комплексный подход к благоустройству территории и обилие зеленых зон.<br><br> \nОфисы STONE отвечают всем запросам современных резидентов, а значит, вы сможете за короткий срок найти подходящего арендатора. На примере расчета отдела оценки и аналитики STONE HEDGE вы увидите, как можно выгодно сдать в аренду офисное помещение 44 кв. м за 160 000 руб./мес. <h3>Для размещения собственного бизнеса</h3> Помимо продуманных архитектурных решений и инженерного оснащения, в бизнес-центрах STONE предусмотрена собственная богатая инфраструктура. Резиденты могут воспользоваться лаунж-зоной для проведения неформальных встреч и отдыха сотрудников. Также на первых этаж размещается торговая галерея, рестораны и кафе, в которые можно попасть не выходя здания. В просторном лобби с продуманной навигацией предусмотрена зона ресепшен, где будет удобно встретить клиента. Резиденты бизнес-центров также могут воспользоваться конференц-залом для проведения переговоров, презентаций или деловых корпоративных мероприятий.\n"
                }
            },
            {
                "isShown": false,
                "order": "09",
                "type": "text",
                "content": {
                    "text": "Планировки офисных этажей всех бизнес-центров STONE соответствуют адаптивным планировочным решениям, что позволит резидентам настраивать офисное пространство под потребности своего бизнеса и размещать даже на небольшой площади максимальное количество рабочих мест для сотрудников. Учитывается оптимальная глубина помещений до 10 м и высота потолков от 3,65 м. Увеличенная площадь остекления обеспечит оптимальный уровень инсоляции, а специальное покрытие стекол позволит сохранить температурный баланс.\nБизнес-центры STONE строятся в соответствии с концепцией Healthy building, которая реализуется через улучшенные системы вентиляции, круглогодичное кондиционирование, многоступенчатую систему очистки воздуха, оптимальный уровень инсоляции и биофильный дизайн внутри офисных зданий, а также через комплексный подход к благоустройству территории и обилие зеленых зон.\nОфисы STONE отвечают всем запросам современных резидентов, а значит, вы сможете за короткий срок найти подходящего арендатора. На примере расчета отдела оценки и аналитики STONE HEDGE вы увидите, как можно выгодно сдать в аренду офисное помещение 44 кв. м за 160 000 руб./мес."
                }
            },
            {
                "isShown": false,
                "order": "10",
                "type": "text",
                "content": {
                    "text": "Помимо продуманных архитектурных решений и инженерного оснащения, в бизнес-центрах STONE предусмотрена собственная богатая инфраструктура. Резиденты могут воспользоваться лаунж-зоной для проведения неформальных встреч и отдыха сотрудников. Также на первых этаж размещается торговая галерея, рестораны и кафе, в которые можно попасть не выходя здания. В просторном лобби с продуманной навигацией предусмотрена зона ресепшен, где будет удобно встретить клиента. Резиденты бизнес-центров также могут воспользоваться конференц-залом для проведения переговоров, презентаций или деловых корпоративных мероприятий."
                }
            },
            {
                "isShown": true,
                "order": "11",
                "type": "paragraph_header",
                "content": {
                    "text": "Варианты помещений"
                }
            },
            {
                "isShown": true,
                "order": "12",
                "type": "text",
                "content": {
                    "text": "В портфеле бренда STONE представлено 5 бизнес-центров класса А с самой широкой линейкой офисных и торговых площадей. <br><br>\nSTONE Towers — премиальный офисный квартал на «Белорусской» в высокой стадии готовности, в состав которого входят 4 башни: <br><br>\nTower A — отдельно стоящее офисное здание, которое уже введено в эксплуатацию и реализовано. <br><br>\nTower B и Tower C — бизнес-центры в высокой строительной готовности, ведутся фасадные работы. В реализации осталось менее 10 лотов и пара видовых этажей. <br><br>\nTower D — ближайший бизнес-центр к метро и с собственным выходом в парк площадью 5 000 кв. м, ведется подготовка к началу строительных работ. В реализации: лоты от 70 кв. м и ритейл.<br><br>\nSTONE Савеловская — бизнес-центр класса А в активной стадии строительства, ведутся монолитные работы. В реализации: офисы от 50 кв. м и ритейл. <br><br>\nSTONE Ленинский — премиальный бизнес-центр, первый современный офисный объект на Ленинском за последние 10 лет. В реализации: офисы от 70 кв. м и ритейл. <br><br>\nSTONE Дмитровская — бизнес-центр класса А, реализуемый в рамках городской программы комплексного развития территорий. В реализации: офисы от 44 кв. м с минимальным бюджетом в линейке STONE. <br><br>\nSTONE Курская — премиальное офисное здание в активной стадии строительства под штаб-квартиру крупной компании в 700 м от Садового кольца.\n"
                }
            },
            {
                "isShown": false,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/13rUkwqJkpVSpZxbTvy6eEQc0ALODuDaC7E7vrP0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/MKZr0yJzeJdyn5EkTqFc3Tii5PBf49iz3cpDJA3J.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/MKZr0yJzeJdyn5EkTqFc3Tii5PBf49iz3cpDJA3J.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/1RZXSYmRNJg238qPPcGjONXtHp0kvurCno4bvZDV.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/M5lU4FO9F8BapSthMfeBhnKLESukMqUe7Pheg4eO.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/WhFsPWStmOqcBRsxRYhpQcJywoUTnoB3xFA81aJs.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/112e146bc04f29a6800ddc72eea0c0/WhFsPWStmOqcBRsxRYhpQcJywoUTnoB3xFA81aJs.webp"
                        }
                    ],
                    "description": "Бизнес-центры класса А от офисного девелопера №1"
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/c3/52620014c0b48c1f3230975686da99/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/c3/52620014c0b48c1f3230975686da99/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                },
                "content_copy_1": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/f1eba1187c285af7845fde486647a6/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/15/f1eba1187c285af7845fde486647a6/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "16",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            },
            {
                "isShown": false,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и проектов",
                    "description": "Одним из первых узнавайте о новостях рынка коммерческой недвижимости",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            }
        ]
    },
    {
        "id": 17,
        "name": "Летучка_retail_1",
        "slug": "retail_1",
        "data": [
            {
                "isShown": true,
                "order": "01",
                "type": "hashtags",
                "content": {
                    "list": [
                        {
                            "name": "classA",
                            "id": "classA"
                        },
                        {
                            "name": "коммерция ",
                            "id": "commerce"
                        },
                        {
                            "name": "ритейл",
                            "id": "retail"
                        }
                    ]
                }
            },
            {
                "isShown": true,
                "order": "02",
                "type": "topic",
                "content": {
                    "title": "Трафик в квадрате: почему выгодно покупать ритейл",
                    "description": "",
                    "date": "22/12/2022"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Ритейл исторически считается одним из самых ликвидных и статусных активов в портфеле инвестора. Дополнительным преимуществом может стать дефицит предложения в локации. В портфеле девелопера STONE HEDGE на сегодняшний день находится 5 бизнес-центров в разных локациях с предложениями торговых помещений разного формата: помещения street retail с отдельным входом с улицы, помещения в торговой галерее и клиентские офисы.\n"
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/f7/952ae82e72e39a4d171898230b06f4/cPeBGBxD5piXvK6wl4fUOpLTkZGJ3wAP27n5mjPt.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/f7/952ae82e72e39a4d171898230b06f4/cPeBGBxD5piXvK6wl4fUOpLTkZGJ3wAP27n5mjPt.webp"
                    },
                    "description": "Ритейл — один из самых ликвидных и статусных активов в портфеле инвестора"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Подобрать предложение"
                }
            },
            {
                "isShown": true,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Подарите бизнес своим близким и заработаете на ритейле"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Вложение в ритейл — это разумное решение, чтобы прежде всего сохранить свои денежные средства, считает директор направления стрит-ритейла компании Knight Frank Russia Ирина Козина. «Доходность ритейла в среднем колеблется от 7% до 13% в зависимости от расположения, площади и экономических показателей помещения», — отметила Ирина Козина. <br><br>Рынок ритейла сохраняет свою привлекательность, согласна с коллегой партнер, руководитель департамента торговой недвижимости Commonwealth Partnership Ольга Антонова: «Например, сегодня в жилых массивах и офисных проектах востребованы лайф-стайл, спортивно-оздоровительные площадки и различные сервисы».<br><br>Высокой ликвидностью для арендаторов и инвесторов обладают помещения на первых этажах бизнес-центров, отметил директор департамента торговой недвижимости Nikoliers Борис Маца. «Это связано с тем, что ритейл внутри БЦ обеспечивается естественным потоком посетителей, а набор потенциальных арендаторов в качественных пространствах support retail понятен как пользователям, так и владельцам помещений», — пояснил он."
                }
            },
            {
                "isShown": true,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/a7/a4e390193e8175cc84aa0242b446c6/6Pc9TDWEO7FxhZlTm4DgrsiizmZrgEHVMYtwCGXY.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/a7/a4e390193e8175cc84aa0242b446c6/6Pc9TDWEO7FxhZlTm4DgrsiizmZrgEHVMYtwCGXY.webp"
                    },
                    "description": "Предложения торговых помещений разного формата от девелопера STONE HEDGE"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": true,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Трафик в квадрате"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Преимущество ритейла в составе бизнес-центров — двойной трафик. Посетителями торговой галереи становятся и резиденты офисов, и жители окружающих домов. В результате бизнес-центры становятся не только офисным пространством, но и районными точками притяжения, формирующими локальный спрос. Кроме того, сегодня спрос смещается от центральных торговых коридоров к локальным инфраструктурным объектам, что повышает ликвидность таких площадей. <br><br> По такому принципу девелопер STONE HEDGE создает премиальный бизнес-центр STONE Ленинский, где помимо офисных площадей представлены торговые помещения под инфраструктуру первой необходимости. Они разместятся в двухуровневом стилобате, фасад которого будет выполнен из гранита. В нем использован классический архитектурный прием оформления стилобата (черный гранит и витринное остекление), который визуально создает welcome-эффект для торговых помещений в проекте и вовлекает горожан в сформированное пространство. Продуманные пешеходные маршруты вдоль здания сформируют стабильный клиентский поток, а гостевой паркинг — автомобильный трафик."
                }
            },
            {
                "isShown": true,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/nfDG4XfG6JXJUworxPyUHVkayQKrkKldgBKSF7y2.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/nfDG4XfG6JXJUworxPyUHVkayQKrkKldgBKSF7y2.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/MgeNdJZNTuLUcTeWC0Qm6eGgfC1eLY8ARy9wntWn.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/MgeNdJZNTuLUcTeWC0Qm6eGgfC1eLY8ARy9wntWn.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/pGBXUrpVbK8ypH4epDElkjg0KrdqePpK88YSOKf0.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/pGBXUrpVbK8ypH4epDElkjg0KrdqePpK88YSOKf0.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/MAAuWZoVYffOH2REve04ykVakvcBVOlEnuqfl8Ov.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/MAAuWZoVYffOH2REve04ykVakvcBVOlEnuqfl8Ov.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/46C2NgSpg8R6jGctraSvYcagNiu3DkrOp1UTpkKN.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/8d/5e682854ed16ee514b1fa8e87c1519/46C2NgSpg8R6jGctraSvYcagNiu3DkrOp1UTpkKN.webp"
                        }
                    ],
                    "description": "Ритейл в премиальном бизнес-центре STONE Ленинский "
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": true,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Эксклюзивное предложение"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Премиальный бизнес-центр STONE Ленинский станет одним из первых в районе качественным офисным объектом за последнее десятилетие. Бизнес-центр класса А разместится на улице Вавилова — в четырех минутах ходьбы от станции метро «Ленинский проспект» и МЦК «Площадь Гагарина». «Направление Ленинского проспекта считается престижным, но в то же время здесь нет большого разнообразия современных торговых центров или торговых пространств в коллаборации с офисными. Поэтому предложение от STONE HEDGE на горизонте ближайших трех — шести лет может быть одним из самых востребованных», — считает генеральный директор Ricci | BlackStone. По его мнению, для инвестиций и для бизнеса STONE Ленинский станет привлекательным вариантом за счет наличия активного трафика и фактического отсутствия конкуренции среди качественного современного ритейла. В пользу этого говорит и хорошая транспортная доступность."
                }
            },
            {
                "isShown": true,
                "order": "06",
                "type": "slider",
                "content": {
                    "gallery": [
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/jhY9xWip0TZ0lFUaVoPgi8aACyJHqo3J9qDD4t2t.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/jhY9xWip0TZ0lFUaVoPgi8aACyJHqo3J9qDD4t2t.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/wOlg8W77WYLEj8thdemP65mT7BI8q7rfOkRDiWO7.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/wOlg8W77WYLEj8thdemP65mT7BI8q7rfOkRDiWO7.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/69LxfqRUi8JZTfievox8HQWxwLNZM3g0Ch1QWYkP.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/69LxfqRUi8JZTfievox8HQWxwLNZM3g0Ch1QWYkP.webp"
                        },
                        {
                            "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/xll8fqMONsvH99hMiO2kJMzIBLssrmZ0vsrWbDeU.jpg",
                            "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/d9/f700bbf588e628dc4da7d1e9ecb5ee/xll8fqMONsvH99hMiO2kJMzIBLssrmZ0vsrWbDeU.webp"
                        }
                    ],
                    "description": "Торговые помещения в бизнес-центрах класса А"
                }
            },
            {
                "isShown": true,
                "order": "08",
                "type": "button",
                "content": {
                    "url": "https://api.whatsapp.com/send?phone=79645640722",
                    "text": "Получить предложение"
                }
            },
            {
                "isShown": true,
                "order": "10",
                "type": "paragraph_header",
                "content": {
                    "text": "Защита от инфляции"
                }
            },
            {
                "isShown": true,
                "order": "04",
                "type": "text",
                "content": {
                    "text": "Недвижимость в любой кризис остается одним из самых надежных активов. Это подтверждают события последних месяцев, когда рынки ценных бумаг и валют вели себя непредсказуемо, а депозиты вслед за снижением ключевой ставки ЦБ тоже показали падение доходности. По данным Knight Frank Russia, за пять месяцев 2022 года, три из которых проходили в условиях жестких санкций и негативных экономических явлений, объем инвестиций в коммерческую недвижимость России составил 127,3 млрд руб. Этот показатель стал рекордным и превышает все полугодовые объемы вложений прошлых лет начиная с 2015 года.<br><br>Одним из наиболее привлекательных сегментов коммерческой недвижимости является торговая. Согласно оценкам Knight Frank Russia, она занимает второе место по объему инвестиций в 2022 году, уступая лишь площадкам под девелопмент. Популярность торговых помещений объясняется несколькими причинами. Во-первых, покупка ритейла часто эквивалентна по бюджету покупке квартиры в аналогичном классе и локации, при этом может приносить доход в два раза больше, чем жилье. Во-вторых, коммерческое помещение — это фиксированный договор аренды с ежегодно индексируемой ставкой. Именно поэтому инвесторы хотят иметь в своем портфеле объекты ритейла."
                }
            },
            {
                "isShown": false,
                "order": "05",
                "type": "picture",
                "content": {
                    "image": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/4f/070e3487d08a9e5d54a76411c6ad8a/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/4f/070e3487d08a9e5d54a76411c6ad8a/ZWmPgSh4hInQR5FBqdkjFqLGTGSSGhp4niQAm54e.webp"
                    },
                    "description": "Снимок с вручения премии, которая внесла большой вклад."
                }
            },
            {
                "isShown": false,
                "order": "03",
                "type": "video",
                "content": {
                    "url": "https://player.vimeo.com/video/738533053?h=4b93d1e31c",
                    "description": "Видео с вручения премии, которая, несомненно, внесла большой вклад."
                }
            },
            {
                "isShown": false,
                "order": "07",
                "type": "quote",
                "content": {
                    "description": "Руководитель департамента оценки и аналитики STONE HEDGE",
                    "name": "Кристина Недря",
                    "photo": {
                        "src": "https://satellites.stonehedge.ru/storage/peculiar_fields/b7/f7c2cf03c8f35f3ea49da21825027e/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.jpg",
                        "srcWebp": "https://satellites.stonehedge.ru/storage/peculiar_fields/b7/f7c2cf03c8f35f3ea49da21825027e/4l1oWCaQizXkYqcWoiGSRyzpS4WxZCRBxkotUVeC.webp"
                    },
                    "text": "«Генеральный директор STONE HEDGE Максим Гейзер второй год подряд вошёл в число самых влиятельных персон рынка коммерческой недвижимости рейтинга CRE 100. В списке CRE 100 генеральный директор STONE HEDGE был высоко отмечен в числе лидеров отрасли и занял 16 позицию в категории Девелопмент»"
                }
            },
            {
                "isShown": true,
                "order": "09",
                "type": "form",
                "content": {
                    "title": "Новости рынка и старты продаж",
                    "description": "Подпишитесь на рассылку. Получайте аналитику и качественную подборку новостей рынка коммерческой недвижимости.",
                    "success": {
                        "title": "Готово!",
                        "description": "Подписка на новости активна. Вы всегда можете отменить почтовую рассылку в конце письма"
                    }
                }
            }
        ]
    }
];

export default function Home() {
    const [width, height] = useWindowSize();

    const topMenuEl = useRef(null);
    const [menuOnTop, isMenuOnTop] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const menuEl = topMenuEl.current && topMenuEl.current.getBoundingClientRect();
                if (menuEl && menuEl.top < 0) {
                    isMenuOnTop(true);
                    // setActiveItem(1);
                } else {
                    isMenuOnTop(false);
                }
            }
        }
    }, []);

    // const [data, setData] = useState([]);
    const [newsData, setNewsData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
    //                 headers: {
    //                     'site-slug': 'stone'
    //                 }
    //             });
    //             const { data } = res;
    //             setData(data);
    //             return { data };
    //         } catch (error) {
    //             return { error };
    //         }
    //     };
    //     fetchData();
    //
    // }, []);

    useEffect(() => {
        const fetchNewsData = async () => {
                try {
                    const res = await axios.get(`https://stonehedge.ru/api/landing-news/bcstone`, {

                    });
                    const { data } = res;
                    setNewsData(data);
                    return { data };
                } catch (error) {
                    return { error };
                }
            };
            fetchNewsData();
    }, []);
     
    // const mainPageData = data && data.data && data.data.length !== 0 && data.data.filter(el => {
    //     if (el && el.id) {
    //         return el.id === 2
    //     }
    // });
    // let sliderVideoPopupContent;
    //
    // if (mainPageData) {
    //     sliderVideoPopupContent = mainPageData[0].about_company.variableContent;
    // }
    const [isPopupClose, setIsPopupClose] = useState(true);
    const [isAboutPopupClose, setIsAboutPopupClose] = useState(true);
    
    return (
        <Context.Provider value={[width, height]}>
            <div className={"page-wrapper"}>
                <Head>
                    <title>Премиальные бизнес-центры STONE</title>
                    <meta name="description" content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи." />
                    <link rel="icon" href="/favicon.ico" />
                    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZJD3HM')`}}></script>
                </Head>
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZJD3HM";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

                <div className={`common_top_bg`}  ref={topMenuEl}>
                    <S_Menu menuOnTop={menuOnTop} data={mainPageData[0]} setIsPopupClose={setIsPopupClose}/>
                    <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                        <C_FullForm data={mainPageData[0]} className={classes.fullFormIndexSection} popup={true}/>
                    </S_Popup>
                    <S_Hero data={mainPageData[0]} setIsPopupClose={setIsPopupClose}/>
                    <S_Top_Commercial data={mainPageData[0]} />
                    <S_Projects data={mainPageData[0]} className={"projects-bg"} setIsPopupClose={setIsPopupClose}/>
                    <S_About data={mainPageData[0]} width={width} setIsPopupClose={setIsPopupClose} setIsAboutPopupClose={setIsAboutPopupClose} popup={isAboutPopupClose}/>
                    <C_SliderVideoPopup data={mainPageData[0]} sliderVideoPopupContent={mainPageData[0].about_company.variableContent} setIsAboutPopupClose={setIsAboutPopupClose} isAboutPopupClose={isAboutPopupClose} popup={isAboutPopupClose}/>
                    <S_Sales data={mainPageData[0]} />
                    <S_FullForm data={mainPageData[0]} />
                    <S_Bottom_Commercial data={mainPageData[0]}/>
                    {newsData.length !== 0 ? <S_PressCenter data={newsData}/> : null}
                    <S_Footer phone_number={mocks.contacts.phone} mail={mocks.contacts.mail} address={mocks.contacts.address} sales_number={mocks.contacts.sales} telegram={mocks.contacts.telegram} copyright={mocks.copyright} />
                </div>
            </div>
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
        </Context.Provider>
    )
}
