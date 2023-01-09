import '../src/styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Head from "next/head";
import {S_Footer} from "../src/sections/s_Footer";
import {footerData} from "@/data/mocks";

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
            <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail} address={footerData.contacts.address}
                      sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram} copyright={footerData.copyright}/>
     </>
    )
}


