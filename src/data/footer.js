import {developerLogo, emptyLogo, logo} from "../img/svgInlineImg";

export const footer = {
    text1: 'Отдел продаж',
    text2: `Дом коммерческой <br class="brMobile">недвижимости STONE`,
    text3: `инвестируйте <br class="brMobile">выгодно <br class="brMobile"><br class="brDesktop">в ликвидную <br class="brMobile">недвижимость`,
    emptyLogo: emptyLogo,
    stoneLogo: logo,
    developerLogo: developerLogo,
    text4: 'Политика конфиденциальности',
    text5: '© АО «СТОУНХЕДЖ»',
    text6: `Содержимое данного сайта (включая <br class="brMobile">размещенную информацию и материалы) <br class="brMobile">охраняется <br class="brDesktop">авторским правом (ст. 1271 ГК РФ). <br class="brMobile">Запрещено копирование дизайна настоящего <br class="brMobile">сайта, его <br class="brDesktop">структуры и отдельных элементов <br class="brMobile">без предварительного письменного согласия <br class="brMobile">АО «СТОУНХЕДЖ»`,
    navs: [
        {
            name: `Наверх`,
            code: 'up',
            moveTo: 'hero',
        },
        {
            name: `Предложения`,
            code: 'offers',
            moveTo: 'hero',
        },
        {
            name: `Инвестиции`,
            code: 'investments',
            moveTo: 'investments',
        },
        {
            name: `Команда`,
            code: 'team',
            moveTo: '#',
        },
        {
            name: `Новости`,
            code: 'news',
            moveTo: 'news',
        },
        {
            name: `Контакты`,
            code: 'contacts',
            moveTo: 'contacts',
        },

    ],
}