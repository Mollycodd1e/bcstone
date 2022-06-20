import Head from 'next/head';
import {useState} from "react";

import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import {S_Menu} from "../src/sections/S_Menu";
import {S_Hero} from "../src/components/S_Hero";

export default function Home() {
    const [width, height] = useWindowSize();

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
                    <S_Hero />

                </div>
                <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
            </Context.Provider>
        // </Context.Provider>
    )
}
