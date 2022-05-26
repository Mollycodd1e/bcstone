import Head from 'next/head';
import {Header} from "../src/sections/Header";
import {Hero} from "../src/sections/Hero";
import {Projects} from "../src/sections/Projects";
import {Offices} from "../src/sections/Offices";
import {FormTop} from "../src/sections/FormTop";
import {AdvantagesTop} from "../src/sections/AdvantagesTop";
import {AdvantagesBtm} from "../src/sections/AdvantagesBtm";
import {FormBtm} from "../src/sections/FormBtm";
import {SummaryNews} from "../src/sections/SummaryNews";
import {Footer} from "../src/sections/Footer";
import {FormPopup} from "../src/sections/FormPopup";
import {Navigation} from "../src/sections/Navigation";
import {Examples} from "../src/sections/Examples";
import {useEffect, useState} from "react";
import classes from './style.module.scss';
import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import axios from "axios";
import {S_Menu} from "../src/sections/S_Menu";

export default function Home() {
    // const [isNavMenuActive, setIsNavMenuActive] = useState(false);
    // const [isPopupVisible, setIsPopUpVisible] = useState(false);
    const [width, height] = useWindowSize();

    const [data, getData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://stonehedge.ru/api/landing-news/bcstone');
    //             const stoneNews = res.data;
    //             getData(stoneNews);
    //
    //             return { stoneNews };
    //         } catch (error) {
    //             return { error };
    //         }
    //     };
    //     fetchData();
    //
    // }, []);
    //
    // useEffect(() => {
    //     console.log('stoneNews', data);
    // }, [data])

    return (
        // <Context.Provider value={setIsPopUpVisible}>
            <Context.Provider value={[width, height]}>
                <div className={"page-wrapper"}>
                    <Head>
                        <title>Премиальные бизнес-центры STONE</title>
                        <meta name="description" content="Продажа или аренда премиальной офисной недвижимости у метро от девелопера STONE HEDGE. Статусные инвестиции для дальнейшей перепродажи, сдачи в аренду или размещения собственного бизнеса. Любые форматы от офисов, офисных этажей, офисных зданий до ритейла и торговой галереи." />
                        {/*TODO: facebook-domain-verification ? */}
                        {/*<meta name="facebook-domain-verification" content="9z0sixxjkzgui2ay20ckf44xvhjnhk" />*/}
                        <link rel="icon" href="/favicon.ico" />
                        {/*TODO: googletagmanager 1 ? */}
                        {/*                    <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
                        {/*new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
                        {/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
                        {/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
                        {/*})(window,document,'script','dataLayer','GTM-N7GL33F')`}}></script>*/}
                    </Head>
                    {/*TODO: googletagmanager 2 ? */}
                    {/*<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7GL33F";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>*/}

                    <S_Menu />

                    {/*<Header isActive={isNavMenuActive} setIsActive={setIsNavMenuActive} setIsPopUpVisible={setIsPopUpVisible} />*/}
                    {/*<div className={classes.heroProjectWrapper} id={"hero"}>*/}
                    {/*    <Hero />*/}
                    {/*    <Projects setIsPopUpVisible={setIsPopUpVisible} />*/}
                    {/*</div>*/}
                    {/*<Offices setIsPopUpVisible={setIsPopUpVisible} />*/}
                    {/*<FormTop />*/}
                    {/*<AdvantagesTop />*/}
                    {/*<Examples />*/}
                    {/*<AdvantagesBtm />*/}
                    {/*<FormBtm />*/}
                    {/*{data.length !== 0 ?*/}
                    {/*    <SummaryNews newsList={data} />*/}
                    {/*    : null*/}
                    {/*}*/}
                    {/*<Footer />*/}
                    {/*<FormPopup isPopupVisible={isPopupVisible} setIsPopUpVisible={setIsPopUpVisible} />*/}
                    {/*<Navigation isActive={isNavMenuActive} setIsActive={setIsNavMenuActive} />*/}

                </div>
                <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
            </Context.Provider>
        // </Context.Provider>
    )
}
