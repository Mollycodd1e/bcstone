import Head from 'next/head';
import {useEffect, useRef, useState} from "react";

import {useWindowSize, Context} from "../src/library";
import Script from 'next/script'
import {S_Menu} from "../src/sections/S_Menu";
import {S_Hero} from "../src/sections/S_Hero";
import axios from "axios";

export default function Home() {
    const [width, height] = useWindowSize();

    const topMenuEl = useRef(null);
    const [menuOnTop, isMenuOnTop] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                const menuEl = topMenuEl.current && topMenuEl.current.getBoundingClientRect();
                if (menuEl.top < 0) {
                    isMenuOnTop(true);
                    // setActiveItem(1);
                } else {
                    isMenuOnTop(false);
                }
            }
        }
    }, []);

    const [data, getData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://satellites.stonehedge.ru/api/pages', {
                    headers: {
                        'site-slug': 'stone'
                    }
                });
                const { data } = res;
                getData(data);
                return { data };
            } catch (error) {
                return { error };
            }
        };
        fetchData();

        // var myHeaders = new Headers();
        // myHeaders.append("site-slug", "stone");
        //
        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };
        //
        // fetch("https://satellites.stonehedge.ru/api/pages", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));


    }, []);

    useEffect(() => {
        console.log('data', data);
    }, [data])

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
                        {/*new Date().getTime(),event:'gtm.js'});var f=d.getByTagName(s)[0],*/}
                        {/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
                        {/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
                        {/*})(window,document,'script','dataLayer','GTM-N7GL33F')`}}></script>*/}
                    </Head>
                    {/*TODO: googletagmanager 2 ? */}
                    {/*<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7GL33F";height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>*/}

                    {data.length == 0 ? (
                            <>
                                <div className={"common_top_bg"}  ref={topMenuEl}>
                                    <S_Menu menuOnTop={menuOnTop}/>
                                    <S_Hero />
                                </div>
                            </>
                        ) : (
                            <div className="lds-grid-wrapper">
                                <div className="lds-grid">
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                    <div/>
                                </div>
                            </div>
                    )

                    }


                </div>
                <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3xsHwkwIhhfEFp3og9dunH0Jw39tsxi0" strategy="beforeInteractive"/>
            </Context.Provider>
        // </Context.Provider>
    )
}
