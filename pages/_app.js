import '../src/styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Head from "next/head";
import Script from 'next/script'
import {S_Footer} from "../src/sections/s_Footer";
import {footerData, navData} from "@/data/mocks";
import {S_MenuC} from "../src/sections/s_MenuC";
import useWindowSize from "../src/hooks/useWindowSize";
import {Context} from "../src/library";
import {StoreProvider} from "../src/store/stores";
import {useRouter} from "next/router";
import TagManager from 'react-gtm-module';
import {useEffect} from "react";

const BcStone = ({Component, pageProps}) => {
    const size = useWindowSize();
    const { pathname } = useRouter()
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-WZJD3HM' });
    }, []);
    //TODO вывести все эелементы из div common_top_bg
    return (
        <StoreProvider {...pageProps}>
            <Context.Provider value={size}>
                <Head>
                    <title>Премиальные бизнес-центры STONE</title>
                    <meta name="description"
                          content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE.
                       Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного
                       бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи."/>
                    <link rel="icon" href={"/favicon.ico"}/>
                </Head>
                <div className={"page-wrapper"}>
                    <div className={`common_top_bg ${(pathname === '/') ? 'gray' : ''}`}>
                        <S_MenuC data={navData} briefing={true}/>
                    <Component {...pageProps} />
                    </div>
                    <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail}
                              address={footerData.contacts.address}
                              sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram}
                              copyright={footerData.copyright}/>
                </div>
            </Context.Provider>
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0"
                    strategy="beforeInteractive"/>
        </StoreProvider>
    )
}
export default BcStone

