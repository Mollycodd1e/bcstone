import '../src/styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Head from "next/head";
import {S_Footer} from "../src/sections/s_Footer";
import {footerData, mainPageData} from "@/data/mocks";
import classes from "./styleNews.module.scss";
import {S_MenuC} from "../src/sections/s_MenuC";
import {S_Popup} from "../src/sections/s_Popup";
import {C_FullForm} from "@/components/c_FullForm";
import popupClasses from "../src/sections/s_Popup/style.module.scss";
import {useState} from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import {Context} from "../src/library";

export default function BcStone({Component, pageProps}) {
    const [isPopupClose, setIsPopupClose] = useState(true);
    const size = useWindowSize();

    return (
        <Context.Provider value={size}>
            <Head>
                <title>Премиальные бизнес-центры STONE</title>
                <meta name="description"
                      content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи."/>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>

             <div className={`common_top_bg + ${classes.common_top_bg_news}`} id="top">
                 <S_MenuC data={mainPageData[0]} setIsPopupClose={setIsPopupClose}
                          briefing={true}/>
                 <S_Popup isPopupClose={isPopupClose} setIsPopupClose={setIsPopupClose}>
                     <C_FullForm data={mainPageData[0]} className={popupClasses.fullFormIndexSection} popup={true}/>
                 </S_Popup>
             </div>

            <div className={"page-wrapper"}>
                <Component {...pageProps} />
            </div>
            <S_Footer phone_number={footerData.contacts.phone} mail={footerData.contacts.mail} address={footerData.contacts.address}
                      sales_number={footerData.contacts.sales} telegram={footerData.contacts.telegram} copyright={footerData.copyright}/>
        </Context.Provider>
    )
}


