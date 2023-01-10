import '../src/styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Head from "next/head";
import {S_Footer} from "../src/sections/s_Footer";
import {footerData, navData} from "@/data/mocks";
import classes from "./styleNews.module.scss";
import {S_MenuC} from "../src/sections/s_MenuC";
import useWindowSize from "../src/hooks/useWindowSize";
import {Context} from "../src/library";
import {StoreProvider} from "../src/store/stores";


const BcStone = ({Component, pageProps}) => {
    const size = useWindowSize();

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

                <div className={`common_top_bg + ${classes.common_top_bg_news}`} id="top">
                    <S_MenuC data={navData} briefing={true}/>
                </div>

                <div className={"page-wrapper"}>
                    <Component {...pageProps} />
                </div>
                <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail}
                          address={footerData.contacts.address}
                          sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram}
                          copyright={footerData.copyright}/>
            </Context.Provider>
        </StoreProvider>
    )
}
export default BcStone
