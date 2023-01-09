import '../src/styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Head from "next/head";
import {S_Footer} from "../src/sections/s_Footer";
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

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

export default function BcStone({Component, pageProps}) {
    return (
     <>
            <Head>
                <title>Премиальные бизнес-центры STONE</title>
                <meta name="description"
                      content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи."/>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>

            <div className={"page-wrapper"}>
                <Component {...pageProps} />
            </div>
            <S_Footer phone_number={mocks.contacts.phone} mail={mocks.contacts.mail} address={mocks.contacts.address}
                      sales_number={mocks.contacts.sales} telegram={mocks.contacts.telegram} copyright={mocks.copyright}/>
     </>
    )
}


